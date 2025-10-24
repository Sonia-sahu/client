import React from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "../components/Posts";
import Discussion from "../../comments/components/Discussion"; // ✅ Import your discussion component

const PostRouter = () => {
  return (
    <Routes>
      <Route path="" element={<Posts />} /> {/* /posts */}
      <Route path="createpost" element={<Posts />} /> {/* optional */}
      <Route path=":id" element={<Discussion />} /> {/* /posts/:id */}
    </Routes>
  );
};

export default PostRouter;
