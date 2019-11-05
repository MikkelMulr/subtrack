import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Subscriptions from '../components/Subscriptions';
import MonthlyReport from '../components/MonthlyReport';
import Services from '../components/Services';
import Updates from '../components/Updates';
import './Dashboard.css';

const Dashboard = () => {
	const [ currentView, setCurrentView ] = useState('subs');

	const showView = () => {
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
						href='!#'
						className='Dash-menu-link'
						onClick={() => {
							setCurrentView('subs');
						}}
					>
						<i className='fas fa-list-alt nav-icon' />My Subscriptions
					</div>
					<div
						href='!#'
						className='Dash-menu-link'
						onClick={() => {
							setCurrentView('monthly');
						}}
					>
						<i class='fas fa-chart-bar nav-icon' />Monthly Report
					</div>
					<div
						href='!#'
						className='Dash-menu-link'
						onClick={() => {
							setCurrentView('services');
						}}
					>
						<i class='fab fa-buffer nav-icon' />Services
					</div>
					<div
						href='!#'
						className='Dash-menu-link'
						onClick={() => {
							setCurrentView('updates');
						}}
					>
						<i class='far fa-newspaper nav-icon' />Updates
					</div>
				</div>
				{showView()}
			</div>
			<Footer />
		</div>
	);
};

export default Dashboard;
