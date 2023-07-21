import styles from './modal.module.css';


export function ModalRegister({children}) {


    return (
        <div className={styles.modal}>
            {children}
     
        </div>
    );
}
