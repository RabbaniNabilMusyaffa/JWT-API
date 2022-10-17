import React, { useRef } from 'react';
import './index.css';
import { Navbar } from '../../../components/navbar/navbar';
import { QuestionCircleIcon, UserIcon } from '../../../components/icons';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../../../components/input/input';
import { Button } from '../../../components/button/button';
import { useAuth } from '../../../utils/auth';

export const ForgotPasswordPage = () => {
	const auth = useAuth();
	const navigate = useNavigate();

	const refEmailField = useRef<HTMLInputElement>(null);

	const tryEmail = () => {
		const getEmail = refEmailField.current?.value;

		auth?.tryForgotPassword(getEmail)
			.then(() => {
				console.log('Email sent');
			})
			.catch(error => {
				console.log('Error was cought', error);
			});
	};

	return (
		<div className="forgot-password">
			<Navbar
				type="page"
				pageNavbarAttributes={{
					pageTitle: 'Forgot Password',
					handlePageIconLeft: () => navigate('/login'),
					pageIconRight: <QuestionCircleIcon />,
					handlePageIconRight: () => {
						navigate('/help');
					},
				}}
			/>

			<div className="forgot-password__container">
				<div className="forgot-password__container__header">
					<div className="forgot-password__container__header__title">
						Please Enter Email Address
					</div>
					<div className="forgot-password__container__header__subtitle">
						You&apos;ll receive Link via Email and reset your
						password
					</div>
				</div>

				<div className="forgot-password__container__form">
					<Input
						type="email"
						placeholder="Email"
						icon={<UserIcon color="#776BF8" />}
						refElement={refEmailField}
					/>
				</div>

				<div className="forgot-password__container__help">
					Forget Email Address?
					<Link
						className="forgot-password__container__help__link"
						to="/help"
					>
						Help Center
					</Link>
				</div>
			</div>

			<div className="forgot-password__button">
				<Button type="submit" onClick={tryEmail}>
					Send Verivication Code
				</Button>
			</div>
		</div>
	);
};
