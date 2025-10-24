import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchDiscussion,
  submitComment,
  deleteComment,
} from "../../services/comment.service";

export const fetchDiscussionAction = createAsyncThunk(
  "comment/fetchDiscussionAction",
  async (postId, { rejectWithValue }) => {
    try {
      const response = await fetchDiscussion(postId);
      return { data: response.data, status: response.status };
    } catch (err) {
      return rejectWithValue(
        err?.data || { message: "Failed to load discussion" }
      );
    }
  }
);

export const submitCommentAction = createAsyncThunk(
  "comment/submitCommentAction",
  async ({ postId, text }, { rejectWithValue }) => {
    try {
      const response = await submitComment(postId, text);
      return { data: response.data, status: response.status };
    } catch (err) {
      return rejectWithValue(
        err?.data || { message: "Failed to submit comment" }
      );
    }
  }
);

export const deleteCommentAction = createAsyncThunk(
  "comment/deleteCommentAction",
  async ({ postId, commentId }, { rejectWithValue }) => {
    try {
      const response = await deleteComment(postId, commentId);
      return { data: response.data, status: response.status, commentId };
    } catch (err) {
      return rejectWithValue(
        err?.data || { message: "Failed to delete comment" }
      );
    }
  }
);
