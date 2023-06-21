import { configureStore } from '@reduxjs/toolkit';

import profileReducer from '../reducers/profile.reducer';
import postReducer from '../reducers/post.reducer';

const store = configureStore({
  reducer: {
    profile: profileReducer,
    post: postReducer,
  },
  devTools: true,
});

export default store;
