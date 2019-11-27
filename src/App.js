import React from 'react';
import Home from './pages/Home.js';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/Dashboard/' component={Dashboard} />
				<Route exact path='/login/' component={Login} />
				<Route component={Error} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
