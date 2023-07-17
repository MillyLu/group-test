import styles from "./index.module.css";

export function HeaderContentTeam() {
  return (
    <div className={styles.header}>
      <h1 className={styles.header_title}>Наша команда</h1>
      <p className={styles.header_description}>
        Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
        ложатся на их плечи, и умеющие находить выход из любых, даже самых
        сложных задач
      </p>
    </div>
  );
}
