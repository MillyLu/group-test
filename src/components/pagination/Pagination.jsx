import _ from 'lodash';
import styles from './index.module.css';
import { useState } from 'react';

export function Paginate({ totalPages, setCurrentPage }) {
    const [active, setActive] = useState(1);

    let pages = _.range(1, totalPages + 1);

    return (
        <div className={styles.pagination}>
            <div className={styles.pagination_list}>
                {pages &&
                    pages.map((pageNumber) => (
                        <button
                            className={
                                active === pageNumber
                                    ? styles.pagination_item_active
                                    : styles.pagination_item
                            }
                            onClick={() => {
                                setCurrentPage(pageNumber);
                                setActive(pageNumber);
                            }}
                            key={pageNumber}
                        >
                            {pageNumber}
                        </button>
                    ))}
            </div>
        </div>
    );
}
