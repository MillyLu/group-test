import { useEffect } from "react";
import styles from "./index.module.css";
import { fetchUsers } from "../../store/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../store/usersSlice";
import { UserItem } from "../userItem/UserItem";

export function UserList() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUsers = async () => {
      const response = await dispatch(fetchUsers());
      // dispatch(setUsers(response));

      console.log(response.payload.data);
    };

    getUsers();
  }, [dispatch]);

  const users = useSelector((state) => state.users.users.data);
  const loading = useSelector((state) => state.users.loading);
  console.log(loading);
  console.log(users);

  return(
<div className={styles.users}>
{users?.map((user) => (<UserItem id={user.id} key={user.id} avatar={user.avatar} name={user.first_name} lastName={user.last_name}/>)) }
      
</div>
  )
}
