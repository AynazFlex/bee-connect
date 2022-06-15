import React from "react";
import s from "./Login.module.css";
import { useForm } from "react-hook-form";

const LoginForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'all',
  });

  /*useEffect(() => {
    const subscription = watch((value, {name ,type}) => console.log(value, name, type));
    return () => subscription.unsubscribe();
  }, [watch])*/

  const onSubmit = (data) => {
    props.loginAuth(data.email, data.password, data.rememberMe, data.captcha);
  };

  return (
    <div className={s.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.login}>
          <input
            {...register("email", {
              required: "Введите email",
              pattern: {
                value:
                  /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
                message: "Please enter a valid email address",
              },
            })}
            type="text"
            placeholder="email"
          />
        </div>
        {errors?.email && (
          <div className={s.validation}>{errors.email.message}</div>
        )}
        <div className={s.password}>
          <input
            {...register("password", {
              required: "Введите пароль",
            })}
            type="password"
            placeholder="password"
          />
        </div>
        {errors?.password && (
          <div className={s.validation}>{errors.password.message}</div>
        )}
        {props.captchaUrl && <img className={s.captchaImg} src={props.captchaUrl} />}
        {props.captchaUrl && (
          <div className={s.password}>
          <input
            {...register("captcha", {
              required: "Введите символы с картинки",
            })}
            type="text"
            placeholder="Введите символы с картинки"
          />
        </div>
        )}
        {errors?.captcha && (
          <div className={s.validation}>{errors.captcha.message}</div>
        )}
        <div className={s.checkbox}>
          <input {...register('rememberMe')} type="checkbox" /> Remember me
        </div>
        <button className={s.submit}>Sing in</button>
      </form>
      {props.isCorectlData && <div className={s.validation}>{props.isCorectlData}</div> }
    </div>
  );
};

const Login = (props) => {
  //console.log('login render');
  console.log(props.captchaUrl);
  return (
    <div className={s.loginModal}>
      <LoginForm {...props}/>
    </div>
  );
};

export default Login;
