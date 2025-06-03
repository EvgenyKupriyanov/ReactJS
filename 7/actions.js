import { createAsyncThunk } from '@reduxjs/toolkit';
import { data } from "./data/tasks.js"

export const fetchUserData = createAsyncThunk (
  'users/fetchUserData',
  async(_, thunkAPI) =>{ 
    
    try {
    if (data.length > 0) {
      console.log("Возвращаем локальные данные");
      return data;
    }
    const response = await fetch('https://www.example.com/');
    const taskData = await response.json();

    return taskData;
  } catch (error) {
    throw new Error(error.message);
    
  }}
)