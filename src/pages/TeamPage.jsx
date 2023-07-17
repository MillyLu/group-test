import { HeaderButton } from "../components/button/HeaderButton";
import { Header } from "../components/header/Header";
import { HeaderContentTeam } from "../components/headerContentTeam/HeaderContentTeam";
import { UserList } from "../components/userList/UserList";
import styles from "./index.module.css";

export function TeamPage() {
  return (
    <div className={styles.container}>
      <Header>
        <>
          <HeaderContentTeam />
          <HeaderButton title="Вперед" />
        </>
      </Header>
      <UserList />
    </div>
  );
}
