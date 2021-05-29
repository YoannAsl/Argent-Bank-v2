import { Link } from 'react-router-dom';
import './Nav.scss';
import logo from '../../assets/images/argentBankLogo.png';
import { useAppDispatch, useAppSelector } from './../../app/hooks';
import { logout } from '../../features/auth/authSlice';

const Nav = () => {
	const auth = useAppSelector((state) => state.auth);
	const user = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();

	return (
		<nav className='main-nav'>
			<Link className='main-nav-logo' to='./'>
				<img
					className='main-nav-logo-image'
					src={logo}
					alt='Argent Bank Logo'
				/>
				<h1 className='sr-only'>Argent Bank</h1>
			</Link>
			{!auth.isLoggedIn ? (
				<div>
					<Link className='main-nav-item' to='/login'>
						<i className='fa fa-user-circle'></i>
						Sign In
					</Link>
				</div>
			) : (
				<div>
					<span className='main-nav-item'>
						<i className='fa fa-user-circle'></i>
						{user.firstName}
					</span>
					<Link
						className='main-nav-item'
						to='/'
						onClick={() => dispatch(logout())}
					>
						<i className='fa fa-sign-out'></i>
						Sign Out
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Nav;
