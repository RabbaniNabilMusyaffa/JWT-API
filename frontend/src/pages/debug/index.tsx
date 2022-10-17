import React, { useEffect, useRef } from 'react';
import './index.css';
import { Navbar } from '../../components/navbar/navbar';
import { Input } from '../../components/input/input';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button/button';
import { Seperator } from '../../components/seperator/seperator';
import { useAuth } from '../../utils/auth';
import { useHistory } from '../../hooks/useHistory';

export const DebugPage = () => {
	const auth = useAuth();
	const navigate = useNavigate();
	const getRoutesRef = useRef<HTMLInputElement>(null);

	const history = useHistory();

	useEffect(() => {
		document.title = 'Project Sylly - Debug';
	}, []);

	const handleSpecificRoute = () => {
		navigate(`/${getRoutesRef.current?.value.toLowerCase()}`);
	};

	return (
		<div className="debug">
			<Navbar type="top" />

			<div className="debug__content">
				<div className="debug__content__container">
					<div className="debug__content__header">
						Go To Specific Routes
					</div>
					<Input
						type="link"
						placeholder="Routes pathname here!"
						refElement={getRoutesRef}
					/>

					<Button
						variant="primary"
						type="submit"
						onClick={handleSpecificRoute}
					>
						Go To This Routes
					</Button>
				</div>

				<div className="debug__content__container">
					<div className="debug__content__header">
						Debug Log Out - AUTH
					</div>

					<Button
						variant="bold"
						type="submit"
						onClick={() => {
							auth?.tryLogout();
						}}
					>
						Log Out
					</Button>
				</div>

				<Seperator />

				<div className="debug__content__container">
					<div className="debug__content__header">
						Debug usePrevious Hook - TEST
					</div>

					<Button
						variant="bold"
						type="submit"
						onClick={() => {
							history.previous();
						}}
					>
						usePrevious Hook
					</Button>
				</div>
			</div>

			{/* <Navbar type="bottom" /> */}
		</div>
	);
};
