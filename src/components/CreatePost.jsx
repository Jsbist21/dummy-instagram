import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../slices/postSlice";

const CreatePost = () => {
  const dispatch = useDispatch();
  const [caption, setCaption] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleAddPost = () => {
    const newPost = {
      id: Date.now(),
      caption,
      imageUrl,
      comments: [],
    };
    dispatch(addPost(newPost));
    setCaption("");
    setImageUrl("");
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Create a Post</h2>
      <label className="block mb-4">
        Caption:
        <input
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="border rounded-md w-full p-2"
        />
      </label>
      <label className="block mb-4">
        Image URL:
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="border rounded-md w-full p-2"
        />
      </label>
      <button
        onClick={handleAddPost}
        className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
      >
        Add Post
      </button>
    </div>
  );
};

export default CreatePost;
