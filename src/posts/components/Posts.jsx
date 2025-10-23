import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CreatePost from "./CreatePost";
import PostItem from "./PostItem";
import { getPostsAction } from "../redux/action/post.action";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getPostsAction());
  }, []);

  return (
    <section className="container">
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome to the community!
      </p>
      <CreatePost />
      <div className="posts">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Posts;
