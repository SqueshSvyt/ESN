import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "../../styles/style.css";
import lock_icon from "../../img/svg/lock_icon.svg";
import user_icon from "../../img/svg/user_icon.svg";
import agent from "../../app/api/agent";
import mail_icon from "../../img/svg/mail_icon.svg";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [errorRegister, setErrorRegister] = useState(false);
  const [confPass, setConfPass] = useState("");
  const [pass, setPass] = useState("");
  const [handlePass, setHandlePass] = useState(false);
  const navigate = useNavigate();
  // when writing css code make loading component and assing it to button

  const {
    register,
    getValues,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm({
    mode: "onTouched",
  });

  return (
    <div className="background-style">
      <div className="login pillow">
        <h1>Register</h1>
        <p>
          or <a href="/login">login</a>
        </p>
        <form
          onSubmit={handleSubmit((data) => {
            if (pass === confPass) {
              setHandlePass(true);
            }
            if (handlePass === false) {
              setErrorRegister(true);
            } else {
              try {
                agent.Account.register(data);
                navigate('/')
              } catch (e) {
                setErrorRegister(true);
              }
            }
          })}
        >
          <div>
            <div>
              <div className="forms">
                <p>Email address</p>
                <div className="input">
                  <img
                    className="mail-icon"
                    src={mail_icon}
                    alt="user_icon"
                  ></img>
                  <input
                    type="email"
                    id="email"
                    {...register("email", { required: true })}
                    placeholder="Type your email"
                  />
                </div>
              </div>
              <div className="forms">
                <p>Username</p>
                <div className="input">
                  <img src={user_icon} alt="user_icon"></img>
                  <input
                    type="text"
                    id="userName"
                    {...register("userName", { required: true })}
                    placeholder="Type your username"
                  />
                </div>
              </div>
              <div className="forms">
                <p>Password</p>
                <div className="input">
                  <img src={lock_icon} alt="lock_icon"></img>
                  <input
                    type="password"
                    id="password"
                    {...register("password", {
                      required: true,
                      onChange: () => {
                        const value = getValues("password");
                        value === confPass
                          ? setHandlePass(true)
                          : setHandlePass(false);
                      },
                    })}
                    placeholder="Type your password"
                  />
                </div>
              </div>
              <div className="forms">
                <p>Password</p>
                <div className="input">
                  <img src={lock_icon} alt="lock_icon"></img>
                  <input
                    type="password"
                    id="password-conf"
                    required
                    value={confPass}
                    placeholder="Confirm password"
                    onChange={(e) => {
                      setConfPass(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            {errorRegister || handlePass ? (
              <div className="error">Invalid email or password</div>
            ) : null}
          </div>
          <div>
            <button disabled={!isValid} type="submit">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

