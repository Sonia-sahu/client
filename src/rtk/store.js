import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/redux/reducers/authSlice";
import profileReducer from "../profiles/redux/reducers/profileSlice";
import postReducer from "../posts/redux/reducers/postSlice";
import commentReducer from "../comments/redux/reducers/commentSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    post: postReducer,
    comment: commentReducer,
  },
});

//middleware: will help us to handle the navigation.

export default store;
