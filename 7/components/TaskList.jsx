import { useDispatch, useSelector } from "react-redux";

import "../App.css";
import { showList, isLoading } from "../slice/taskSlice.js";
import { fetchUserData } from '../actions.js';



export default function Tasks() {
  const tasks = useSelector((state) => state.task);
  const loading = useSelector(isLoading);
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
    <h1>Задачи:</h1>
    {loading && <div>Загрузка...</div>}
    <ul>

          {tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        
      </ul>
    </>
  );
}