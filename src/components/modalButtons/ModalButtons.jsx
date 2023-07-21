import styles from './index.module.css';

export function ModalButtons({ setLogin, setRegister }) {
    return (
        <div className={styles.modal_form}>
            <button
                className={styles.modal_form__button}
                onClick={() => setLogin(true)}
            >
                Войти
            </button>
            <p>Или</p>
            <button
                className={styles.modal_form__button}
                onClick={() => setRegister(true)}
            >
                Зарегистрироваться
            </button>
        </div>
    );
}
