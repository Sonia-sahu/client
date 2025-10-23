import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createPost,
  getAllPosts,
  getPostById,
} from "../../services/post.service";

export const getPostsAction = createAsyncThunk(
  "post/getPostsAction",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllPosts();
      return { data: response.data, status: response.status };
    } catch (err) {
      return rejectWithValue(err?.data || { message: "Failed to load posts" });
    }
  }
);
export const getPostByIdAction = createAsyncThunk(
  "post/getPostByIdAction",
  async (postId, { rejectWithValue }) => {
    try {
      const response = await getPostById(postId);
      return { data: response.data, status: response.status };
    } catch (err) {
      return rejectWithValue(
        err?.data || { message: "Failed to load post details" }
      );
    }
  }
);
export const createPostAction = createAsyncThunk(
  "post/createPostAction",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await createPost(formData);
      return { data: response.data, status: response.status };
    } catch (err) {
      return rejectWithValue(err?.data || { message: "Failed to create post" });
    }
  }
);
