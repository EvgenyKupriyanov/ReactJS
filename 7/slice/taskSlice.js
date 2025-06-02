import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data/tasks.js"



export const taskSlice = createSlice({
  name: "taskList",
  initialState: data,
  reducers:{
    showList: (state) => {
      return state;
    }

  
  },
});

export const { showList} = taskSlice.actions;

export default taskSlice.reducer;