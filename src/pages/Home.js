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
					<h2>About</h2>
					<h2>Supported Services</h2>
					<h2>Payment Tracking</h2>
				</div>
			</div>
		</div>
		<div className='Home-info'>
			<div className='Main-container'>
				<div className='Home-info-text'>
					<div className='info-block1'>
						<p>You might be wondering "why would I need to track my subscriptions?", good question!</p>
						<p>
							The reason trackers are important is because more and more services are moving towards a subscription
							based model. The days of just paying for something once are already in the rear-view mirror. So it has
							become crucial to make sure we aren't subscribing and forgetting, throwing away money that could be used
							more effectively.
						</p>
					</div>
					<div className='info-block1 hidden'>
						<p>SubTrack supports all popular subscription services and new ones are being added all the time.</p>
						<p>
							Can't find the service you want to add? You can manually enter service that has not yet been added and
							you'll be notified when it becomes officially supported.
						</p>
					</div>
					<div className='info-block1 hidden'>
						<p>SubTrack supports all popular subscription services and new ones are being added all the time.</p>
						<p>
							Can't find the service you want to add? You can manually enter service that has not yet been added and
							you'll be notified when it becomes officially supported.
						</p>
					</div>
				</div>
			</div>
			<div className='demo-img' />
		</div>
		<Footer />
	</div>
);

export default Home;
