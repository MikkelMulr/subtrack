import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
	<nav className='Navbar'>
		<div className='Nav-logo'>SUBTRACK</div>
		<div className='Nav-links'>
			<Link to='/'>Home</Link>
			<Link to='/dashboard'>Dashboard</Link>
			<Link to='/login'>Log in</Link>
		</div>
	</nav>
);

export default Navbar;
