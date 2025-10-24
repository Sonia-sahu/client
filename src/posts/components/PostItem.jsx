import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${post.user}`}>
          <img
            className="round-img"
            src={post.avatar || "https://www.gravatar.com/avatar/000?s=200"}
            alt=""
          />
          <h4>{post.name || "Anonymous"}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{post.text}</p>
        <p className="post-date">
          Posted on {new Date(post.date).toLocaleDateString()}
        </p>
        <button type="button" className="btn btn-light">
          <i className="fas fa-thumbs-up"></i>{" "}
          <span>{post.likes?.length || 0}</span>
        </button>
        <button type="button" className="btn btn-light">
          <i className="fas fa-thumbs-down"></i>
        </button>
        <Link to={`/posts/${post._id}`} className="btn btn-primary">
          Discussion{" "}
          <span className="comment-count">{post.comments?.length || 0}</span>
        </Link>
        <button type="button" className="btn btn-danger">
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default PostItem;
