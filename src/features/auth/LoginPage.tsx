import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './LoginPage.scss';
import { useAppDispatch, useAppSelector } from './../../app/hooks';
import { request } from './authSlice';

const LoginPage = () => {
	const user = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);

	useEffect(() => {
		document.title = 'Argent Bank - Sign In';
	}, []);

	const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
		e.currentTarget.name === 'email'
			? setEmail(e.currentTarget.value)
			: setPassword(e.currentTarget.value);
	};

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		// dispatch(request(email, password));
	};

	// if (user.isLoggedIn) return <Redirect to='/profile' />;

	return (
		<main className='main bg-dark'>
			<section className='sign-in-content'>
				<i className='fa fa-user-circle sign-in-icon'></i>
				<h1>Sign In</h1>
				<form onSubmit={handleSubmit}>
					<div className='input-wrapper'>
						<label htmlFor='username'>Username</label>
						<input
							type='text'
							id='username'
							name='email'
							value={email}
							onChange={handleInputChange}
						/>
					</div>
					<div className='input-wrapper'>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							id='password'
							name='password'
							value={password}
							onChange={handleInputChange}
						/>
					</div>
					<div className='input-remember'>
						<input
							type='checkbox'
							id='remember-me'
							onChange={() => setRememberMe(!rememberMe)}
						/>
						<label htmlFor='remember-me'>Remember me</label>
					</div>
					<button className='sign-in-button'>Sign In</button>
				</form>
			</section>
		</main>
	);
};

export default LoginPage;
