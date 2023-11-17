import React, { useState } from "react";

const CommentForm = ({ onSubmit }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      onSubmit(comment);
      setComment("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md ml-2"
      >
        Comment
      </button>
    </form>
  );
};

export default CommentForm;
