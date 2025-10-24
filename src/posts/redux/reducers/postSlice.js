import { createSlice } from "@reduxjs/toolkit";
import {
  submitPostAction,
  loadPostsAction,
  deletePostAction,
} from "../action/post.action"; // Hypothetical actions for post management
const postState = {
  post: null,
  posts: [], // List to store posts
  loading: false,
  error: null,
};
// posts: to store all posts
// loading: to indicate if a post-related operation is in progress
// error: to store any error messages related to post actions
const postSlice = createSlice({
  name: "post",
  initialState: postState,
  extraReducers: (builder) => {
    builder
      .addCase(submitPostAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(submitPostAction.fulfilled, (state, action) => {
        state.loading = false;

        if (Array.isArray(state.posts) && action.payload?.data) {
          state.posts.unshift(action.payload.data);
        } else {
          state.posts = [action.payload.data]; // fallback if posts is undefined
        }
      })
      .addCase(submitPostAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loadPostsAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadPostsAction.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload.data; // Assuming payload structure with `data` containing posts
      })
      .addCase(loadPostsAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deletePostAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePostAction.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = state.posts.filter(
          (post) => post.id !== action.payload.data.id
        ); // Assuming payload with deleted post ID
      })
      .addCase(deletePostAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  reducers: {}, // Common business logic related to posts
});
export default postSlice.reducer;
