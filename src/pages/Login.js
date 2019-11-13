import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/*
	Use Mongoose to access the mongo DB
	Check DB if user email/ password exist

	Use bcrypt to encrypt password upon registeration
*/

const Login = () => (
	<div className='Login'>
		<Navbar />
		<Footer />
	</div>
);

export default Login;
