/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    name: 'Richard Gabriel',
  },
  reducers: {
    updateName: (state) => {
      state.name = 'sherlock';
    },
  },
});

export const { updateName } = profileSlice.actions;
export default profileSlice.reducer;
