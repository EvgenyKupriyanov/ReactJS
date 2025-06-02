import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchUserData = createAsyncThunk (
  'users/fetchUserData',
  async(_, thunkAPI) =>{ 
  
    try {
    const response = await fetch('https://www.example.com/');
    const taskData = await response.json();

    return taskData;
  } catch (error) {
    throw new Error(error.message);
    
  }}
)