import styles from "./header.module.css";

export function Header({ children }) {
  return <section className={styles.header}>{children}</section>;
}
