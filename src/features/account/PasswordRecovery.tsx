import { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/store/configureStore";
import { passwordRecovery } from "./accountSlice";
import lock_icon from "../../img/svg/lock_icon_recovery.svg";
import mail_icon from "../../img/svg/mail_icon.svg";

export default function PasswordRecovery() {
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
    const user = await dispatch(passwordRecovery(data));
    user.meta.requestStatus === "rejected"
      ? setErrorLogin(true)
      : navigate("/emailConfirmation");
  }

  return (
    <div className="background-style">
      <div className="pillow password-recovery">
        <img className="icon" src={lock_icon} alt="lock_icon" />
        <h1 className="info">Forgot password?</h1>
        <p className="info">
          Enter your email and we will send you a link to reset your password
        </p>
        <form onSubmit={handleSubmit(submitForm)}>
          <div>
            <div>
              <div className="forms">
                <p>Email address</p>
                <div className="input">
                  <img
                    className="mail-icon"
                    src={mail_icon}
                    alt="mail_icon"
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
            </div>
            {errorLogin ? (
              <div className="error">We can’t find your email</div>
            ) : null}
          </div>
          <div>
            <button disabled={!isValid} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
