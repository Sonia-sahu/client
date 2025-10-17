import { createSlice } from "@reduxjs/toolkit";
import {
  addEducationAction,
  addExperienceAction,
  createProfileAction,
  getCurrentProfileAction,
} from "../action/profile.action";

const profileState = {
  profile: null,
  profiles: [],
  loading: true,
  error: {},
};

const profileSlice = createSlice({
  name: "profile",
  initialState: profileState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      //addEducationAction
      .addCase(addEducationAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(addEducationAction.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload.data;
      })
      .addCase(addEducationAction.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = action.payload;
      })

      //addExperienceAction
      .addCase(addExperienceAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(addExperienceAction.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload.data;
      })
      .addCase(addExperienceAction.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = action.payload;
      })

      //createProfileAction
      .addCase(createProfileAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProfileAction.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload.data;
      })

      .addCase(createProfileAction.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = action.payload;
      })

      //getCurrentProfileAction

      .addCase(getCurrentProfileAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrentProfileAction.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload.data;
      })
      .addCase(getCurrentProfileAction.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = action.payload;
        state.profile = null;
      });
  },
});

export default profileSlice.reducer;
