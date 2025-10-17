import { createAsyncThunk } from "@reduxjs/toolkit";
import { loadUser, registerUser } from "../../services/auth.service";
import { loginUser } from "../../services/auth.service";

export const loadUserAction = createAsyncThunk(
  "auth/loadUserAction",
  // eslint-disable-next-line no-unused-vars
  async (_, { rejectWithValue }) => {
    try {
      const data = await loadUser();
      return { data };
    } catch (error) {
      console.log(error);
    }
  }
);
//Using _ keeps the function signature valid while clearly showing you're not using that parameter.

export const loginUserAction = createAsyncThunk(
  "auth/loginUserAction",
  // eslint-disable-next-line no-unused-vars
  async (userData, { rejectWithValue, dispatch }) => {
    //1st initial args are the args which u will pass while calling the action
    //2nd arg is an 0objecr which has multiple properties
    //this is coming redux toolkit
    try {
      const data = await loginUser(userData);
      dispatch(loadUserAction());
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const registerUserAction = createAsyncThunk(
  //this action with whom it will be associated
  "auth/registerUserAction",
  // eslint-disable-next-line no-unused-vars
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const data = await registerUser(userData);
      dispatch(loadUserAction()); //to load the user
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
