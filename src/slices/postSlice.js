import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    getPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts = state.posts || [];
      state.posts.push(action.payload);
    },
    addComment: (state, action) => {
      const { postId, comment } = action.payload;
      const post = state.posts.find((p) => p.id === postId);
      if (post) {
        post.comments.push(comment);
      }
    },
  },
});

export const { getPosts, addPost, addComment } = postSlice.actions;
export default postSlice.reducer;
