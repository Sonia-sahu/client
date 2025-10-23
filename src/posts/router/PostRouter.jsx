import React from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "../components/Posts";
import PostDetails from "../components/PostDetails";
const PostRouter = () => {
  return (
    <Routes>
      <Route path="" element={<Posts />} />
      <Route path=":postId" element={<PostDetails />} />
    </Routes>
  );
};

export default PostRouter;
