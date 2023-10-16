import { configureStore } from '@reduxjs/toolkit';
import menusReducer from './menusSlice';

export default configureStore({
  reducer: {
    menus: menusReducer
  },
});