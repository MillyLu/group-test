import styles from './index.module.css';

export function SignUpContainer({children}) {
    return(
        <div className={styles.container}>
            {children}
            </div>
    )
}