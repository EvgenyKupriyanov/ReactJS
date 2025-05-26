import { useDispatch, useSelector } from "react-redux";
import { changeToggle } from "./themeToggle.js";
import "../App.css";



export default function ChangeToggle() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <>
      <p className={theme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nesciunt nam minima commodi, assumenda deleniti qui perferendis totam blanditiis! Sed culpa consectetur praesentium neque molestias maiores in quae laudantium ipsam.
      </p>
      <button onClick={()=> dispatch(changeToggle())}>Change with Redux</button>
    </>
  )
}