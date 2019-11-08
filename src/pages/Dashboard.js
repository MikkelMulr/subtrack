import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Subscriptions from '../components/Subscriptions';
import MonthlyReport from '../components/MonthlyReport';
import Services from '../components/Services';
import Updates from '../components/Updates';
import './Dashboard.css';

const Dashboard = () => {
	const [currentView, setCurrentView] = useState('subs');
	const userLoggedIn = true;
	// const [serviceList, setServiceList] = useState([<img style={{ width: '260px', margin: '0 auto' }} src={require('../images/spinner.gif')} alt="spinner" />]);
	// const [userInfo, setUserInfo] = useState({})

	// Get user data from DB to pass to children
	// const getUserData = async () => {
	// 	let response = await fetch('./testData.json');
	// 	let data = await response.json();
	// 	let userSubIDs = data.data.users[0].subs;
	// 	let subs = data.data.services.filter((sub, i) => {
	// 		if (sub.id === userSubIDs[i]) {
	// 			return sub;
	// 		}
	// 	});

	// 	try {
	// 		let userData = await subs.map((sub) => {
	// 			return <ServiceItem servName={sub.name} servPrice={sub.price} key={sub.id} />;
	// 		});
	// 		setSubList(userData);
	// 		setUserInfo({ name: data.data.users[0].name })
	// 	} catch (error) {
	// 		console.log(error);
	// 		setSubList([<h2>{`Services not found :(`}</h2>]);
	// 	}
	// };


	const showView = (e) => {
		if (currentView === 'subs') {
			return <Subscriptions />;
		} else if (currentView === 'monthly') {
			return <MonthlyReport />;
		} else if (currentView === 'services') {
			return <Services />;
		} else if (currentView === 'updates') {
			return <Updates />;
		}
	};

	if (userLoggedIn) {

		return (
			<div className='Dashboard'>
				<Navbar />
				<div className='Main-container'>
					<div className='Dash-menu'>
						<div
							className='Dash-menu-link nav-bg-norm'
							onClick={() => {
								setCurrentView('subs');
							}}
						>
							<i className='fas fa-list-alt nav-icon' />My Subscriptions
					</div>
						<div
							className='Dash-menu-link nav-bg-norm'
							onClick={() => {
								setCurrentView('monthly');
							}}
						>
							<i className='fas fa-chart-bar nav-icon' />Monthly Report
					</div>
						<div
							className='Dash-menu-link nav-bg-norm'
							onClick={() => {
								setCurrentView('services');
							}}
						>
							<i className='fab fa-buffer nav-icon' />Services
					</div>
						<div
							className='Dash-menu-link nav-bg-norm'
							onClick={() => {
								setCurrentView('updates');
							}}
						>
							<i className='far fa-newspaper nav-icon' />Updates
					</div>
					</div>
					<div className='show-container' >
						{showView()}
					</div>
				</div>
				<Footer />
			</div>
		);
	} else {
		return <Redirect from='/Dashboard' to='/Login' />
	}

};

export default Dashboard;
