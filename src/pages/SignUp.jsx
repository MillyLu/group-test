import { ModalRegister } from "../components/modal/Modal";
import styles from "./signUp.module.css";

export function SignUp() {
  return (
    <div className={styles.container}>
      <ModalRegister />
    </div>
  );
}
