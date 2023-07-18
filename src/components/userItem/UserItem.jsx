import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLike, deleteLike } from "../../store/likeSlice";

export function UserItem(props) {
  const style = { color: "purple" };
  const navigate = useNavigate();
  const userId = props.id;
  console.log(props.id);
  const dispatch = useDispatch();

  const likesList = useSelector((state) => state.likes);
  console.log(likesList);

  const [like, setLike] = useState(false);
  const toggleLike = () => {
    setLike((prev) => !prev);
    if (like) {
      setLike(false);
      dispatch(deleteLike(userId));
    } else {
      setLike(true);
      dispatch(addLike(userId));
    }
  };

  useEffect(() => {
    if (likesList.likes.includes(userId)) {
      setLike(true);
    }
  }, [likesList.likes, userId]);

  return (
    <div className={styles.user}>
      <img className={styles.user_avatar} alt="avatar" src={props.avatar}></img>
      <p
        onClick={() => navigate(`/partner/${userId}`)}
        className={styles.user_name}
      >
        {props.name} {props.lastName}
      </p>
      <i className={styles.user_likes} onClick={toggleLike}>
        {like ? <FaHeart style={style} /> : <FaRegHeart />}
      </i>
    </div>
  );
}
