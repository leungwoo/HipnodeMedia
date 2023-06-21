import { createSlice } from '@reduxjs/toolkit';

import { IPost } from '../../lib/utils/type';

interface IPostState extends IPost {
  searchResults: IPost[]; // Add a searchResults field to hold the search results
}

const initialState: any = {
  title: '',
  content: '',
  post_image: '',
  post_tags: [],
  created_at(): Date {
    throw new Error('Function not implemented.');
  },
  searchResults: [], // Initialize searchResults as an empty array
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    updatePost: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    updateSearchResults: (state, action) => {
      // Handle updating the search results
      // eslint-disable-next-line no-param-reassign
      state.searchResults = action.payload;
    },
  },
});

export const { updatePost, updateSearchResults } = postSlice.actions;
export default postSlice.reducer;
