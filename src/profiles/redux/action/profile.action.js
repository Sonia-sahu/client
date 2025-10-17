import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addEducation,
  addExperience,
  createProfile,
  getCurrentProfile,
} from "../../services/profile.service";
import API from "../../../utils/api";

export const addEducationAction = createAsyncThunk(
  "profile/addEducationAction",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await addEducation(formData);
      return { data: response.data, status: response.status };
    } catch (err) {
      return rejectWithValue(
        err?.data || { message: "Failed to add education details" }
      );
    }
  }
);

export const addExperienceAction = createAsyncThunk(
  "profile/addExperienceAction",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await addExperience(formData);
      return { data: response.data, status: response.status };
    } catch (err) {
      return rejectWithValue(
        err?.data || { message: "Failed to add experience details" }
      );
    }
  }
);
export const createProfileAction = createAsyncThunk(
  "profile/createProfileAction",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await createProfile(formData);
      // dispatch(createProfileAction());
      return { data: response.data, status: response.status };
    } catch (err) {
      return rejectWithValue(
        err?.data || { message: "Failed to create or update the profile" }
      );
    }
  }
);

export const getCurrentProfileAction = createAsyncThunk(
  "profile/getCurrentProfileAction",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCurrentProfile();
      console.log(response);
      if (response.status === 200) {
        return { status: 200, data: response.data };
      }
    } catch (err) {
      const status = err?.status || err?.response?.status;
      if (status === 400)
        return rejectWithValue({
          notFound: true,
        });
      return rejectWithValue(
        err?.data || { message: "Failed to load profile" }
      );
    }
  }
);
