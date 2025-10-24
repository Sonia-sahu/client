import React from "react";
import { Routes, Route } from "react-router-dom";
import Discussion from "../components/Discussion";

const CommentRouter = () => {
  return (
    <Routes>
      <Route path="/posts/:id" element={<Discussion />} />
    </Routes>
  );
};

export default CommentRouter;
