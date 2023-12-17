import { useState } from "react";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/store/configureStore";
import { signInUser } from "./accountSlice";
import "../../styles/style.css";
import lock_icon from "../../img/svg/lock_icon.svg";
import user_icon from "../../img/svg/user_icon.svg";
import lock_icon_error from "../../img/svg/lock_icon_error.svg";
import user_icon_error from "../../img/svg/user_icon_error.svg";

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [errorLogin, setErrorLogin] = useState(false);

  // when writing css code make loading component and assing it to button
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm({
    mode: "onTouched",
  });

  async function submitForm(data: FieldValues) {
    try {
      await dispatch(signInUser(data));
      navigate("/events");
    } catch (e) {
      setErrorLogin(true);
    }
  }
  return (
    <div className="background-style">
      <div className="login pillow">
        <h1>Login</h1>
        <p>
          or <a href="/register">create an account</a>
        </p>
        <form onSubmit={handleSubmit(submitForm)}>
          <div>
            <div>
              <div className="forms">
                <p>Email address</p>
                <div className="input">
                  <img
                    src={errorLogin ? user_icon_error : user_icon}
                    alt="user_icon"
                  ></img>
                  <input
                    className={errorLogin ? "error-input" : ""}
                    type="email"
                    id="email"
                    {...register("email", { required: true })}
                    placeholder="Type your email"
                  />
                </div>
              </div>
              <div className="forms">
                <p>Password</p>
                <div className="input">
                  <img
                    src={errorLogin ? lock_icon_error : lock_icon}
                    alt="lock_icon"
                  ></img>
                  <input
                    className={errorLogin ? "error-input" : ""}
                    type="password"
                    id="password"
                    {...register("password", { required: true })}
                    placeholder="Type your password"
                  />
                </div>
              </div>
            </div>
            <div className="forget-password">
              <a href="/passwordRecovery">Forgot password?</a>
            </div>
            {errorLogin ? (
              <div className="error">Invalid email or password</div>
            ) : null}
          </div>
          <div>
            <button disabled={!isValid} type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
