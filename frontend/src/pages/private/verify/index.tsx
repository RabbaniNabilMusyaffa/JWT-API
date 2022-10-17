import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/button/button';
import { InfoCircleIcon } from '../../../components/icons';
import { Input } from '../../../components/input/input';
import { Navbar } from '../../../components/navbar/navbar';
import { useHistory } from '../../../hooks/useHistory';
import './index.css';

export const VerifyPage = () => {
	const navigate = useNavigate();
	const history = useHistory();

	return (
		<div className="verify">
			<div className="verify__wrapper">
				<Navbar
					type="page"
					pageNavbarAttributes={{
						pageTitle: 'Email Verification',
						pageIconRight: <InfoCircleIcon />,
						handlePageIconLeft: () => {
							history.previous();
						},
					}}
				/>

				<div className="verify__content">
					<div className="verify__content__title">
						Enter Email Verification Code
					</div>

					<div className="verify__content__input">
						<Input
							className="verify__content__input__element"
							placeholder="_"
							maxLength={1}
						/>
						<Input
							className="verify__content__input__element"
							placeholder="_"
							maxLength={1}
						/>
						<Input
							className="verify__content__input__element"
							placeholder="_"
							maxLength={1}
						/>
						<Input
							className="verify__content__input__element"
							placeholder="_"
							maxLength={1}
						/>
					</div>
				</div>

				<div className="verify__button-container">
					<Button variant="bold">Verify</Button>
				</div>
			</div>
		</div>
	);
};
