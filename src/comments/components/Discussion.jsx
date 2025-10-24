import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Avatar,
  TextField,
  Button,
  Stack,
  Divider,
  CircularProgress,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDiscussionAction,
  submitCommentAction,
  deleteCommentAction,
} from "../redux/action/comment.action";
import CommonButton from "../../core/components/common/Button";

const Discussion = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState("");
  const { post, comments, loading } = useSelector((state) => state.comment);

  useEffect(() => {
    dispatch(fetchDiscussionAction(id));
  }, [dispatch, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      submitCommentAction({
        postId: id,
        text: commentText,
        date: new Date().toISOString(),
      })
    );
    setCommentText("");
  };

  const handleDelete = (commentId) => {
    dispatch(deleteCommentAction({ postId: id, commentId }));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <CommonButton variant="outlined" href="/posts" sx={{ mb: 2 }}>
        Back To Posts
      </CommonButton>

      {loading ? (
        <Stack alignItems="center" sx={{ mt: 4 }}>
          <CircularProgress />
        </Stack>
      ) : (
        <>
          {/* Post Details */}
          <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar src={post?.user?.avatar} />
              <Typography variant="h6">{post?.user?.name}</Typography>
            </Stack>
            <Typography variant="body1" sx={{ mt: 2 }}>
              {post?.text}
            </Typography>
          </Paper>

          {/* Comment Form */}
          <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" color="primary" gutterBottom>
              Leave A Comment
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <CommonTextField
                  name="text"
                  label="Comment on this post"
                  multiline
                  rows={4}
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  required
                  fullWidth
                />
                <CommonButton type="submit" variant="contained" color="primary">
                  Submit
                </CommonButton>
              </Stack>
            </Box>
          </Paper>

          {/* Comments */}
          <Typography variant="h6" gutterBottom>
            Comments
          </Typography>
          {comments.map((comment) => (
            <Paper key={comment._id} elevation={1} sx={{ p: 2, mb: 2 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar src={comment.user?.avatar || ""} />
                <Typography variant="subtitle1">
                  {comment.user?.name || "Unknown User"}
                </Typography>
              </Stack>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {comment.text}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Posted on {new Date(comment.date).toLocaleDateString()}
              </Typography>
              <Divider sx={{ my: 1 }} />
              <CommonButton
                variant="outlined"
                color="error"
                size="small"
                onClick={() => handleDelete(comment._id)}
              >
                Delete
              </CommonButton>
            </Paper>
          ))}
        </>
      )}
    </Container>
  );
};

export default Discussion;
