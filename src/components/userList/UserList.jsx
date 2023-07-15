import { useEffect } from "react";
import styles from "./index.module.css";
import { fetchUsers } from "../../store/usersSlice";
import { useDispatch } from "react-redux";
import { setUsers } from "../../store/usersSlice";

export function UserList() {
  const dispatch = useDispatch();

  useEffect(() => {
    const response = dispatch(fetchUsers());
    dispatch(setUsers(response));

    console.log(response);
  }, [dispatch]);
}
