import React from 'react';
import './Services.css';
import ServiceItem from './ServiceItem';

const Services = () => {

	// temporary until DB is established
	const user_services = [
		{ name: 'Netflix', price: 12.99 },
		{ name: 'Spotify', price: 9.99 },
		{ name: 'HBO', price: 15.99 },
		{ name: 'WOW', price: 10.99 },
	]

	const loadServices = (servs) => {
		return servs.map(serv => {
			return <ServiceItem servName={serv.name} servPrice={serv.price} />
		});
	}

	return (
		<div className='Services'>
			<div className="Main-container">
				<div className="Services-list">
					{loadServices(user_services)}
				</div>
			</div>
		</div>
	);
};

export default Services;
