import React from 'react';
import { JDcard, InputText, isEmail, isPassword, onCompletedMessage, queryDataFormater, JDbutton, hooks } from '@janda-com/front';
import { useQuery } from 'react-apollo';
import client from '../../apollo/apolloClient';
import { EMAIL_SIGN_IN } from '../../apollo/main.qr';
import { emailSignIn, emailSignInVariables } from '../../types/api';
import './Login.scss';

interface Iprops {}

const { useInput } = hooks;

const Login: React.FC<Iprops> = ({ history }: any) => {
	const lastLoginEmail = localStorage.getItem('lastLogin') || '';
	const passwordHook = useInput('');
	const emailHook = useInput(lastLoginEmail, true);
	const queryVarExsist = Boolean(emailHook.value && passwordHook.value);
	// TODO EmailSingInForSU 관리자 권한만 가능한거 필요
	const { refetch } = useQuery<emailSignIn, emailSignInVariables>(EMAIL_SIGN_IN, {
		skip: queryVarExsist,
		client,
		variables: {
			email: emailHook.value,
			password: passwordHook.value
		}
	});

	const loginFn = async () => {
		const loginIn = (token: string) => {
			localStorage.setItem('jwt', token);
			history.replace('/dashboard');
		};

		const { data: { EmailSignIn } } = await refetch({
			email: emailHook.value,
			password: passwordHook.value
		});
		const { token } = EmailSignIn;
		onCompletedMessage(EmailSignIn, '관리자 인증완료', '관리자 인증실패');
		if (token) loginIn(token);
	};

	return (
		<div id="loginPage" className="container container--centerlize">
			<div>
				<h1>Login</h1>
				<JDcard>
					<div>
						<InputText id="LoginEmail" {...emailHook} validation={isEmail} label="Email" />
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
								label={'login'}
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
