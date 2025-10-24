import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitPostAction, loadPostsAction } from "../redux/action/post.action";
import PostItem from "./PostItem";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Stack,
  CircularProgress,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CommonTextField from "../../core/components/common/TextFields";
import CommonButton from "../../core/components/common/Button";

const Posts = () => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({ text: "" });
  const { posts, loading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(loadPostsAction());
  }, [dispatch]);

  const onChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(submitPostAction(postData));
    setPostData({ text: "" });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      {/* Header */}
      <Typography variant="h4" color="primary" fontWeight={700} gutterBottom>
        Posts
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
        <PersonIcon sx={{ verticalAlign: "middle", mr: 1 }} />
        Welcome to the community!
      </Typography>

      {/* Post Form */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" color="primary" gutterBottom>
          Say Something...
        </Typography>
        <Box component="form" onSubmit={onSubmit} noValidate>
          <Stack spacing={2}>
            <CommonTextField
              name="text"
              label="Create a post"
              multiline
              rows={4}
              value={postData.text}
              onChange={onChange}
              required
              fullWidth
            />
            <CommonButton
              type="submit"
              variant="contained"
              color="success"
              label="Submit"
            ></CommonButton>
          </Stack>
        </Box>
      </Paper>

      {/* Posts List */}
      <Box>
        {loading ? (
          <Stack alignItems="center" sx={{ mt: 4 }}>
            <CircularProgress />
            <Typography variant="body2" sx={{ mt: 2 }}>
              Loading posts...
            </Typography>
          </Stack>
        ) : Array.isArray(posts) && posts.length > 0 ? (
          posts.map((post) => <PostItem key={post._id} post={post} />)
        ) : (
          <Typography variant="body2" color="text.secondary">
            No posts found.
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Posts;
