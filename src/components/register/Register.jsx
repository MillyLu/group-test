import styles from './index.module.css';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { FaRegEye } from 'react-icons/fa';
import { FaRegEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { registration } from '../../store/authSlice';

export function Registration({ setLogin, setRegister }) {
    const dispatch = useDispatch();

    const [showPass, setShowPass] = useState(false);
    const [showRePass, setShowRePass] = useState(false);
    let password;

    const togglePass = () => {
        setShowPass((prev) => !prev);
    };

    const toggleRePass = () => {
        setShowRePass((prev) => !prev);
    };

    const formSchema = Yup.object().shape({
        name: Yup.string().required('Это обязательное поле'),
        email: Yup.string().required('Это обязательное поле'),
        password: Yup.string().required('Это обязательное поле'),
        repassword: Yup.string()
            .required('Подтвердите пароль')
            .oneOf([Yup.ref('password')], 'Пароли не совпадают'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        mode: 'onTouched',
        resolver: yupResolver(formSchema),
    });
    password = watch('password', '');

    return (
        <>
            <form
                onSubmit={handleSubmit(async (data, e) => {
                    e.preventDefault();
                    console.log(data);
                    await dispatch(
                        registration({
                            email: data.email,
                            password: data.password,
                        }),
                    );
                    setLogin(true);
                    setRegister(false);
                })}
                className={styles.modal_form}
            >
                <h2 className={styles.modal_form__title}>Регистрация</h2>
                <div className={styles.modal_form__block}>
                    <label className={styles.modal_form_label}>Имя</label>
                    <input
                        className={
                            errors?.name
                                ? styles.modal_form_inputError
                                : styles.modal_form_input
                        }
                        {...register('name')}
                    />
                    {
                        <p className={styles.modal_form_error}>
                            {errors?.name?.message}
                        </p>
                    }
                </div>
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
                <div className={styles.modal_form__block}>
                    <label>Подтвердите пароль</label>
                    <input
                        className={
                            errors?.repassword
                                ? styles.modal_form_inputError
                                : styles.modal_form_input
                        }
                        placeholder="Password"
                        name="repassword"
                        {...register('repassword')}
                        type={showRePass ? 'text' : 'password'}
                    />
                    <i
                        className={styles.modal_form_icon}
                        onClick={toggleRePass}
                    >
                        {showRePass ? <FaRegEye /> : <FaRegEyeSlash />}
                    </i>
                    {
                        <p className={styles.modal_form_error}>
                            {errors?.repassword?.message}
                        </p>
                    }
                </div>

                <input
                    className={styles.modal_form__button}
                    type="submit"
                    value="Зарегистрироваться"
                />
            </form>
            <button
                onClick={() => setRegister(false)}
                className={styles.modal_form__button}
            >
                Назад
            </button>
        </>
    );
}
