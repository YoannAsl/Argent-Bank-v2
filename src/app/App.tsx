import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../App.scss';
import LoginPage from './../features/auth/LoginPage';
import Nav from './../components/Nav/Nav';
import HomePage from './../features/HomePage/HomePage';
import ProfilePage from './../features/user/ProfilePage';
import Footer from './../components/Footer/Footer';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Nav />
				<Switch>
					<Route exact path='/'>
						<HomePage />
					</Route>
					<Route path='/login'>
						<LoginPage />
					</Route>
					<Route path='/profile'>
						<ProfilePage />
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
