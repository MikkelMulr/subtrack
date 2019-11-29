import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';

import './Navbar.css';

const Navbar = ({ currentUser }) => (
	<nav className='Navbar'>
		<div className='Nav-logo'>
			<Link to='/'>SUBTRACK</Link>
		</div>
		<div className='Nav-links'>
			<Link to='/'>Home</Link>
			<Link to='/dashboard'>Dashboard</Link>
			{currentUser ? (
				<div>
					<a onClick={() => auth.signOut()}>Log Out</a>
				</div>
			) : (
				<Link to='/login'>Log in</Link>
			)}
		</div>
	</nav>
);

export default Navbar;
