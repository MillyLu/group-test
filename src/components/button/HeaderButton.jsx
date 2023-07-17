import styles from './index.module.css';
import { useNavigate } from 'react-router-dom'; 


export function HeaderButton(props) {
const navigate = useNavigate();

const back = () => {
    navigate('/team');
}

const exit = () => {
    localStorage.removeItem('token');
    navigate('/')
}



    return(
        <button onClick={props.title=== "Назад" ? back : exit}  className={props.title=== "Назад" ? styles.button_back : styles.button_exit}>{props.title}</button>
    )
}