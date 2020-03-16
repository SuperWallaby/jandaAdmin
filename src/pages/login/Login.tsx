import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import { JDcard, InputText, utills, JDbutton, hooks } from "@janda-com/front";
import { useMutation } from "react-apollo";
import client from "../../apollo/apolloClient";
import { EMAIL_SIGN_IN } from "../../apollo/queries";
import { emailSignIn, emailSignInVariables } from "../../types/api";
const { isEmail, isPassword } = utills;
interface Iprops {}

const { useInput } = hooks;

const Login: React.FC<Iprops> = () => {
  const lastLoginEmail = localStorage.getItem("lastLogin") || "";
  const emailHook = useInput(lastLoginEmail, true);
  const passwordHook = useInput("");
  const [loginMu, { loading }] = useMutation<emailSignIn, emailSignInVariables>(
    EMAIL_SIGN_IN,
    {
      client
    }
  );

  return (
    <div id="loginPage" className="container container--centerlize">
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
              />
              <Link id="linkToSingUp" to="/signUp">
                <JDbutton thema="primary" label={"signUp"} />
              </Link>
            </div>
          </div>
        </JDcard>
      </div>
    </div>
  );
};

export default Login;
