import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import taskReducer from '../slice/taskSlice.js';
import { thunk } from 'redux-thunk';


export const store = configureStore({
  reducer:
  {
    task: taskReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});