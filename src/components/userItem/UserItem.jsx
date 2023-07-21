import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLikes, deleteLikes } from '../../store/likeSlice';

export function UserItem(props) {
    const style = { color: 'purple' };
    const navigate = useNavigate();
    const userId = props.id;
    const dispatch = useDispatch();

    const likesList = useSelector((state) => state.likes);

    const [like, setLike] = useState(false);
    const toggleLike = () => {
        if (like) {
            setLike(false);
            dispatch(deleteLikes(userId));
        } else {
            dispatch(addLikes(userId));
            setLike(true);
        }
    };

    useEffect(() => {
        if (
            likesList.likes &&
            likesList.likes.length >= 1 &&
            likesList.likes.includes(userId)
        ) {
            setLike(true);
        }
    }, [likesList, userId]);

    return (
        <div
            className={styles.user}
            onClick={() => navigate(`/partner/${userId}`)}
        >
            <img
                className={styles.user_avatar}
                alt="avatar"
                src={props.avatar}
            ></img>
            <p className={styles.user_name}>
                {props.name} {props.lastName}
            </p>
            <i
                className={styles.user_likes}
                onClick={(e) => {
                    e.stopPropagation();
                    toggleLike();
                }}
            >
                {like ? <FaHeart style={style} /> : <FaRegHeart />}
            </i>
        </div>
    );
}
