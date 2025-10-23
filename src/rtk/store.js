import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/redux/reducers/authSlice";
import profileReducer from "../profiles/redux/reducers/profileSlice";
import postReducer from "../posts/redux/reducers/postSlice";
const store = configureStore({
  reducer: { auth: authReducer, profile: profileReducer, post: postReducer },
});

//middleware: will help us to handle the navigation.

export default store;
