import { useDispatch, useSelector } from "react-redux";

import "../App.css";
import { showList } from "../slice/taskSlice.js";
import { fetchUserData } from '../actions.js';



export default function Tasks() {
  const tasks = useSelector((state) => state.task);
  const dispatch = useDispatch();
  console.log(tasks);

  const hadleClick = () =>{
    setTimeout(() => {
      console.log("Действие кнопки через три секуднды");
      dispatch(fetchUserData())
    }, 3000);
    ;
  }

  return (
    <>
    <button onClick={hadleClick}>Load data</button>
    </>
  );
}