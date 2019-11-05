import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Subscriptions from '../components/Subscriptions';
import MonthlyReport from '../components/MonthlyReport';
import Services from '../components/Services';
import Updates from '../components/Updates';
import './Dashboard.css';



const Dashboard = () => {
	const [currentView, setCurrentView] = useState('subs');
	const showViewStyle = {
		height: window.height - 76 - 86
	}


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
						<i class='fas fa-chart-bar nav-icon' />Monthly Report
					</div>
					<div
						className='Dash-menu-link nav-bg-norm'
						onClick={() => {
							setCurrentView('services');
						}}
					>
						<i class='fab fa-buffer nav-icon' />Services
					</div>
					<div
						className='Dash-menu-link nav-bg-norm'
						onClick={() => {
							setCurrentView('updates');
						}}
					>
						<i class='far fa-newspaper nav-icon' />Updates
					</div>
				</div>
				<div className='show-container' style={showViewStyle}>{showView()}</div>
			</div>
			<Footer />
		</div>
	);
};

export default Dashboard;
