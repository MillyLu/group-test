import styles from './index.module.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaRegEye } from 'react-icons/fa';
import { FaRegEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authorization } from '../../store/authSlice';

export function Login({ setLogin }) {
    const navigate = useNavigate();
    const path = '/';
    const dispatch = useDispatch();

    const [showPass, setShowPass] = useState(false);

    const togglePass = () => {
        setShowPass((prev) => !prev);
    };
    const formSchema = Yup.object().shape({
        email: Yup.string().required('Это обязательное поле'),
        password: Yup.string().required('Это обязательное поле'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onTouched',
        resolver: yupResolver(formSchema),
    });

    return (
        <>
            <form
                onSubmit={handleSubmit(async (data, e) => {
                    e.preventDefault();
                    console.log(data);
                    await dispatch(
                        authorization({
                            email: data.email,
                            password: data.password,
                        }),
                    );
                    navigate(path, { replace: true });
                })}
                className={styles.modal_form}
            >
                <h2 className={styles.modal_form__title}>Войти</h2>
                <div className={styles.modal_form__block}>
                    <label>Электронная почта</label>
                    <input
                        className={
                            errors?.email
                                ? styles.modal_form_inputError
                                : styles.modal_form_input
                        }
                        {...register('email')}
                    />
                    {
                        <p className={styles.modal_form_error}>
                            {errors?.email?.message}
                        </p>
                    }
                </div>
                <div className={styles.modal_form__block}>
                    <label>Пароль</label>
                    <input
                        className={
                            errors?.password
                                ? styles.modal_form_inputError
                                : styles.modal_form_input
                        }
                        type={showPass ? 'text' : 'password'}
                        placeholder="Password"
                        name="password"
                        {...register('password')}
                    />
                    <i className={styles.modal_form_icon} onClick={togglePass}>
                        {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
                    </i>
                    {
                        <p className={styles.modal_form_error}>
                            {errors?.password?.message}
                        </p>
                    }
                </div>

                <input
                    className={styles.modal_form__button}
                    type="submit"
                    value="Войти"
                />
            </form>
            <button
                onClick={() => setLogin(false)}
                className={styles.modal_form__button}
            >
                Назад
            </button>
        </>
    );
}
