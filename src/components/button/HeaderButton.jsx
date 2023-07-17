import styles from './index.module.css';


export function HeaderButton(props) {
    return(
        <button className={styles.button}>{props.title}</button>
    )
}