import { createSlice } from "@reduxjs/toolkit";
import {
  createPostAction,
  getPostByIdAction,
  getPostsAction,
} from "../action/post.action";

const postState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

const postSlice = createSlice({
  name: "post",
  initialState: postState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      //getPostsAction
      .addCase(getPostsAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPostsAction.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload.data;
      })
      .addCase(getPostsAction.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = action.payload;
      })

      //getPostByIdAction
      .addCase(getPostByIdAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPostByIdAction.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload.data;
      })
      .addCase(getPostByIdAction.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = action.payload;
      })
      // createPostAction
      .addCase(createPostAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPostAction.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.unshift(action.payload.data);
      })
      .addCase(createPostAction.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default postSlice.reducer;
