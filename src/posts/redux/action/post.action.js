import { createAsyncThunk } from "@reduxjs/toolkit";
import { loadPost, deletePost, submitPost } from "../../services/post.service";
export const submitPostAction = createAsyncThunk(
  "posts/submitPostAction",
  async (postData, { rejectWithValue }) => {
    try {
      const response = await submitPost(postData);
      console.log(response);
      return { data: response.data, status: response.status };
    } catch (err) {
      return rejectWithValue(
        err?.data || { message: "Failed to create or update profile" }
      );
    }
  }
);

export const loadPostsAction = createAsyncThunk(
  "posts/loadPostsAction",
  async (postData, { rejectWithValue }) => {
    try {
      const response = await loadPost(postData);
      return { data: response.data, status: response.status };
    } catch (err) {
      return rejectWithValue(
        err?.data || { message: "Failed to create or update profile" }
      );
    }
  }
);
export const deletePostAction = createAsyncThunk(
  "posts/deletePostAction",
  async (postData, { rejectWithValue }) => {
    try {
      const response = await deletePost(postData);
      return { data: response.data, status: response.status };
    } catch (err) {
      return rejectWithValue(
        err?.data || { message: "Failed to create or update profile" }
      );
    }
  }
);
