import { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import './ProfilePage.scss';
import Account from '../../components/Account/Account';
import { useAppDispatch, useAppSelector } from './../../app/hooks';
import { getUserName, editUserName } from './userSlice';

const accounts = [
	{
		title: 'Argent Bank Checking (x8349)',
		amount: '2,082.79',
		description: 'Available Balance',
	},
	{
		title: 'Argent Bank Savings (x6712)',
		amount: '10,928.42',
		description: 'Available Balance',
	},
	{
		title: 'Argent Bank Credit Card (x8349)',
		amount: '184.30',
		description: 'Current Balance',
	},
];

const ProfilePage = () => {
	const auth = useAppSelector((state) => state.auth);
	const user = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();

	const [isEditing, setIsEditing] = useState(false);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	// Gets profile information
	useEffect(() => {
		dispatch(getUserName());
	}, [dispatch]);

	// Updates document title
	useEffect(() => {
		document.title = `Argent Bank - ${user.firstName} ${user.lastName} `;
	}, [user]);

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		// Both fields have to not be empty
		if (firstName && lastName !== '') {
			dispatch(editUserName({ firstName, lastName }));

			// Resets local state
			setFirstName('');
			setLastName('');
			setIsEditing(false);
		}
	};

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		e.currentTarget.id === 'firstNameInput'
			? setFirstName(e.currentTarget.value)
			: setLastName(e.currentTarget.value);
	};

	if (!auth.isLoggedIn) return <Redirect to='/' />;

	return (
		<main className='main bg-dark'>
			{!isEditing ? (
				<div className='header'>
					<h1>
						Welcome back
						<br />
						{user.firstName} {user.lastName}!
					</h1>
					<button
						className='edit-button'
						onClick={() => setIsEditing(true)}
					>
						Edit Name
					</button>
				</div>
			) : (
				<div className='header'>
					<h1>Welcome back</h1>
					<form onSubmit={handleSubmit}>
						<div className='inputs'>
							<input
								id='firstNameInput'
								type='text'
								placeholder={user.firstName}
								value={firstName}
								onChange={handleChange}
							/>
							<input
								id='lastNameInput'
								type='text'
								placeholder={user.lastName}
								value={lastName}
								onChange={handleChange}
							/>
						</div>
						<div className='buttons'>
							<button className='edit-button' type='submit'>
								Save
							</button>
							<button
								className='edit-button'
								onClick={() => setIsEditing(false)}
							>
								Cancel
							</button>
						</div>
					</form>
				</div>
			)}

			<h2 className='sr-only'>Accounts</h2>
			{accounts.map((account, index) => (
				<Account
					key={index}
					title={account.title}
					amount={account.amount}
					description={account.description}
				/>
			))}
		</main>
	);
};

export default ProfilePage;
