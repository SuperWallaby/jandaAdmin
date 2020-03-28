import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import { JDcard, InputText, utills, JDbutton, hooks } from "@janda-com/front";
import { useQuery } from "react-apollo";
import client from "../../apollo/apolloClient";
import { EMAIL_SIGN_IN } from "../../apollo/queries";
import { emailSignIn, emailSignInVariables } from "../../types/api";
const { isEmail, isPassword, onCompletedMessage, queryDataFormater } = utills;
interface Iprops {}

const { useInput } = hooks;

const Login: React.FC<Iprops> = ({ history }: any) => {
  const lastLoginEmail = localStorage.getItem("lastLogin") || "";
  const passwordHook = useInput("");
  const emailHook = useInput(lastLoginEmail, true);
  const { data, loading, refetch } = useQuery<
    emailSignIn,
    emailSignInVariables
  >(EMAIL_SIGN_IN, {
    skip: Boolean(emailHook.value && passwordHook.value),
    variables: {
      email: emailHook.value,
      password: passwordHook.value
    }
  });

  const token = queryDataFormater(data, "EmailSignIn", "token", undefined);

  const loginIn = () => {
    localStorage.setItem("jwt", token!);
    history.replace("/dashboard");
  };

  if (token) {
    loginIn();
  }

  const loginFn = async () => {
    const {
      data: { EmailSignIn }
    } = await refetch({
      email: emailHook.value,
      password: passwordHook.value
    });
    onCompletedMessage(EmailSignIn, "11", "22");
  };

  return (
    <div
      id="loginPage"
      style={{
        paddingTop: 0
      }}
      className="container container--centerlize"
    >
      <div>
        <h1>Login</h1>
        <JDcard>
          <div>
            <InputText
              id="LoginEmail"
              {...emailHook}
              validation={isEmail}
              label="Email"
            />
          </div>
          <div>
            <InputText
              id="LoginPassword"
              {...passwordHook}
              validation={isPassword}
              type="password"
              label="Password"
            />
          </div>
          <div>
            <div>
              <JDbutton
                id="LoginBtn"
                type="submit"
                thema="primary"
                label={"login"}
                onClick={() => {
                  loginFn();
                }}
              />
            </div>
          </div>
        </JDcard>
      </div>
    </div>
  );
};

export default Login;
