import styles from './index.module.css';
import { useState } from 'react';

export function HeaderPartner({ name, avatar, lastName }) {
    const [image, setImage] = useState('');
    const [imageURL, setImageURL] = useState();
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
        setImageURL(fileReader.result);
    };

    const handleOnChange = (event) => {
        event.preventDefault();
        if (event.target.files && event.target.files.length) {
            const file = event.target.files[0];
            console.log(file);

            fileReader.readAsDataURL(file);
            setImage(file);
        }
    };
    return (
        <div className={styles.header_content}>
            <div className={styles.header_content_ava}>
                <img
                    src={imageURL ? imageURL : avatar}
                    className={styles.header_content__avatar}
                    alt="avatar"
                ></img>
                <label
                    htmlFor="file-loader-button"
                    className={styles.header_content__load}
                >
                    +
                </label>
                <input
                    onChange={handleOnChange}
                    className={styles.header_content__loader}
                    id="file-loader-button"
                    type="file"
                />
            </div>

            <div className={styles.header_content__text}>
                <h2 className={styles.header_content__name}>
                    {name} {lastName}
                </h2>
                <h3 className={styles.header_content__position}>Партнер</h3>
            </div>
        </div>
    );
}
