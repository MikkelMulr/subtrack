import React from 'react';
import Home from './pages/Home.js';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });
			console.log(user);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className='App'>
				<Navbar currentUser={this.state.currentUser} />
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
}

export default App;
