import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;
