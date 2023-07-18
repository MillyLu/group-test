import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearLikes } from "../../store/likeSlice";

export function HeaderButton(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const back = () => {
    navigate("/team");
  };

  const exit = () => {
    dispatch(clearLikes);
    localStorage.removeItem("token");

    //localStorage.removeItem("persist:root");

    navigate("/");
  };

  return (
    <button
      onClick={props.title === "Назад" ? back : exit}
      className={
        props.title === "Выход" ?  styles.button_exit : props.page === 'Team' ?  styles.button_back_none :
        styles.button_back}
    >
      {props.title}
    </button>
  );
}
