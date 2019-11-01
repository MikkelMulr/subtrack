import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => (
	<div className='Home'>
		<Navbar />
		<main className='Home-main'>
			<div className='Main-container'>
				<h2>Track your monthly subscriptions in a convenient and informative way</h2>
				<div className='divider' />
				<div className='Home-cards'>
					<div className='Home-card'>
						<p>Manage your monthly spending wisely.</p>
					</div>
					<div className='Home-card'>
						<p>View detailed information tailored to your subscriptions pricing, amount paid over time and more</p>
					</div>
					<div className='Home-card'>
						<p>Make informed decisions about the subscriptions you pay for every month.</p>
					</div>
				</div>
			</div>
		</main>
		<div className='Home-mid-nav'>
			<div className='Main-container'>
				<div className='Mid-nav-items'>
					<h2>REGISTER</h2>
					<h2>SUPPORTED SERVICES</h2>
					<h2>PAYMENT TRACKING</h2>
				</div>
			</div>
		</div>
		<div className='Home-info'>
			<div className='Main-container'>
				<div className='Home-info-text'>
					<p>SubTrack supports all popular subscription services and new ones are being added all the time.</p>
					<p>
						Can't find the service you want to add? You can manually enter service that has not yet been added and
						you'll be notified when it becomes officially supported.
					</p>
				</div>
			</div>
			<img src='../images/monthly-demo.png' className='demo-img' alt='323123' />
		</div>
		<Footer />
	</div>
);

export default Home;
