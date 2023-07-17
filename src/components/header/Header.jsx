import styles from "./header.module.css";
import { HeaderButton } from "../button/HeaderButton";
import { useNavigate } from "react-router-dom";

export function Header({ children }) {
  const navigate = useNavigate();
  return (
    <section className={styles.header}>
      <HeaderButton title="Назад"  />
      <HeaderButton title="Выход" />

      {children}
    </section>
  );
}
