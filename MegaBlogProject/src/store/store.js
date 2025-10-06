import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/authSlice.js';
const store = configureStore({
  reducer: authReducer
});

export default store;