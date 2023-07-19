import styles from './header.module.css';
import { HeaderButton } from '../button/HeaderButton';

export function Header({ children, page }) {
    return (
        <section className={styles.header}>
            <HeaderButton title="Назад" page={page} />
            <HeaderButton title="Выход" />

            {children}
        </section>
    );
}
