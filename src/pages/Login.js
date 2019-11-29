import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInWithGoogle } from '../firebase/firebase.utils';

import './Login.css';

const Login = ({ auth }) => {
	const [ view, setView ] = useState('login');
	const [ loggedIn, setLoggedIn ] = useState(false);

	const login = () => {
		auth.login();
	};

	const logout = () => {
		auth.logout();
	};

	let history = useHistory();

	// Cloud based mongo atlas connection (option)
	// // getting-started.js
	// let mongoose = require('mongoose');
	// mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

	// let db = mongoose.connection;
	// db.on('error', console.error.bind(console, 'connection error:'));
	// db.once('open', function () {
	// 	console.log('Connection established');
	// 	// we're connected!
	// });

	// // Define user schema
	// let userSchema = new mongoose.Schema({
	// 	email: String
	// });

	// let user = mongoose.model('User', userSchema);

	// var tony = new user({ name: 'Tony' });
	// console.log(tony.name);

	const handleSetView = () => {
		if (view === 'login') {
			setView('register');
		} else {
			setView('login');
		}
	};

	const checkLoggin = () => {
		console.log(loggedIn);
		// if (loggedIn) {
		history.push('/Dashboard');
		// }
	};

	const handleLogin = (e) => {
		e.preventDefault();
		if (view === 'login') {
			// placeholder for login cred checking from DB/ oAuth
			setLoggedIn(true);
			console.log('logged in');
			checkLoggin();
		}
	};

	if (view === 'login') {
		return (
			<div className='Login'>
				<div className='Login-container'>
					<div className='Main-container'>
						<div className='Login-form'>
							<h2>Log in</h2>
							<form method='get'>
								<input type='email' name='user_email' id='user_email' placeholder='email' required />
								<input type='password' name='user_password' id='user_password' placeholder='password' required />
								<div className='buttons'>
									<button type='submit' className='Login-btn'>
										Login
									</button>
									<button type='submit' className='Login-btn btn-blue' onClick={signInWithGoogle}>
										Login with Google
									</button>
								</div>
								<p>
									Not a member? <span onClick={handleSetView}>Register now</span>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	} else if (view === 'register') {
		return (
			<div className='Login'>
				<div className='Login-container'>
					<div className='Main-container'>
						<div className='Login-form'>
							<h2>Register</h2>
							<form method='get'>
								<input type='text' name='user_firstName' id='user_firstName' placeholder='first name*' required />
								<input type='text' name='user_lastName' id='user_lastName' placeholder='last name*' required />
								<input type='email' name='user_email' id='user_email' placeholder='email*' required />
								<input type='password' name='user_password' id='user_password' placeholder='password*' required />
								<input
									type='password'
									name='user_password_conf'
									id='user_password_conf'
									placeholder='confirm password*'
									required
								/>

								<p>
									Already a member? <span onClick={handleSetView}>Log in</span>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default Login;
