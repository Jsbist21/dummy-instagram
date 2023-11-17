import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../slices/postSlice";
import Post from "./Post";
import CreatePost from "./CreatePost";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    // Fetch posts from the mock API server
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((data) => {
        dispatch(getPosts(data)); // Use getPosts action to set posts in the store
      });
  }, [dispatch]);

  return (
    <div>
      <div>
        <CreatePost />
      </div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
