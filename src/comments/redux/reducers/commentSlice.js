import { createSlice } from "@reduxjs/toolkit";
import {
  fetchDiscussionAction,
  submitCommentAction,
  deleteCommentAction,
} from "../action/comment.action";

const commentState = {
  post: null,
  comments: [],
  loading: true,
  error: {},
};

const commentSlice = createSlice({
  name: "comment",
  initialState: commentState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchDiscussionAction
      .addCase(fetchDiscussionAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDiscussionAction.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload.data.post;
        state.comments = action.payload.data.comments;
      })
      .addCase(fetchDiscussionAction.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = action.payload;
      })

      // submitCommentAction
      .addCase(submitCommentAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(submitCommentAction.fulfilled, (state, action) => {
        state.loading = false;

        const raw = action.payload.data;

        const fallbackComment = {
          ...raw,
          _id: raw._id || `${Date.now()}`, // fallback ID if missing
          date: raw.date || new Date().toISOString(), // fallback date
          name: raw.name || "Anonymous",
          avatar: raw.avatar || null,
        };

        state.comments = [fallbackComment, ...state.comments];
      })

      .addCase(submitCommentAction.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = action.payload;
      })

      // deleteCommentAction
      .addCase(deleteCommentAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCommentAction.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = state.comments.filter(
          (comment) => comment._id !== action.payload.commentId
        );
      })
      .addCase(deleteCommentAction.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default commentSlice.reducer;
