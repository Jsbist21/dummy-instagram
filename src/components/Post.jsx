import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../slices/postSlice";
import CommentForm from "./CommentForm";
import { useSelector } from "react-redux";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const authenticatedUser = useSelector((state) => state.auth.user);

  const handleAddComment = (text) => {
    if (authenticatedUser) {
      const newComment = {
        id: Date.now(),
        username: authenticatedUser.name,
        text,
      };
      dispatch(addComment({ postId: post.id, comment: newComment }));
    }
  };

  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-md shadow-md">
      <img
        className="w-full h-auto rounded-md mb-4"
        src={post.imageUrl}
        alt={post.caption}
      />
      <p className="mb-4">{post.caption}</p>

      <CommentForm onSubmit={handleAddComment} />
      <div>
        {post.comments.map((comment, index) => (
          <div key={index} className="mb-2">
            <strong className="font-bold">{comment.username}</strong>:{" "}
            {comment.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
