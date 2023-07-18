import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import styles from "./modal.module.css";

export function ModalRegister() {
  const navigate = useNavigate();
  const path = "/team";

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
    name: Yup.string().required("Это обязательное поле"),
    email: Yup.string().required("Это обязательное поле"),
    password: Yup.string().required("Это обязательное поле"),
    repassword: Yup.string()
      .required("Подтвердите пароль")
      .oneOf([Yup.ref("password")], "Пароли не совпадают"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(formSchema),
  });
  password = watch("password", "");

  const registration = async (data) => {
    const response = await fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    localStorage.setItem("token", `${result.token}`);
  };

  return (
    <div className={styles.modal}>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          registration({ email: data.email, password: data.password });
          navigate(path, { replace: true });
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
            {...register("name")}
          />
          {<p className={styles.modal_form_error}>{errors?.name?.message}</p>}
        </div>
        <div className={styles.modal_form__block}>
          <label>Электронная почта</label>
          <input
            className={
              errors?.email
                ? styles.modal_form_inputError
                : styles.modal_form_input
            }
            {...register("email")}
          />
          {<p className={styles.modal_form_error}>{errors?.email?.message}</p>}
        </div>
        <div className={styles.modal_form__block}>
          <label>Пароль</label>
          <input
            className={
              errors?.password
                ? styles.modal_form_inputError
                : styles.modal_form_input
            }
            type={showPass ? "text" : "password"}
            placeholder="Password"
            name="password"
            {...register("password")}
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
            {...register("repassword")}
            type={showRePass ? "text" : "password"}
          />
          <i className={styles.modal_form_icon} onClick={toggleRePass}>
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
    </div>
  );
}
