import { useEffect, useState } from 'react';
import styles from './index.module.css';
import { fetchUsers } from '../../store/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { UserItem } from '../userItem/UserItem';
import { Paginate } from '../pagination/Pagination';

export function UserList() {
    const dispatch = useDispatch();

    const [usersPerPage] = useState(8);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const getUsers = async () => {
            await dispatch(fetchUsers({ perPage: usersPerPage, page: page }));
        };

        getUsers();
    }, [dispatch, page, usersPerPage]);

    const users = useSelector((state) => state.users.users.data);
    const totalPages = useSelector((state) => state.users.users.total_pages);
    const loading = useSelector((state) => state.users.loading);

    return (
        <>
            <div className={styles.users}>
                {users?.map((user) => (
                    <UserItem
                        id={user.id}
                        key={user.id}
                        avatar={user.avatar}
                        name={user.first_name}
                        lastName={user.last_name}
                    />
                ))}
            </div>
            <Paginate totalPages={totalPages} setCurrentPage={setPage} />
        </>
    );
}
