import React from 'react';
import './Services.css';
import ServiceItem from './ServiceItem';

const Services = () => {
	return (
		<div className='Services'>
			<div className="Main-container">
				<div className="Services-list">
					<ServiceItem />
					<ServiceItem />
					<ServiceItem />
					<ServiceItem />
					<ServiceItem />
					<ServiceItem />
					<ServiceItem />
					<ServiceItem />
				</div>
			</div>
		</div>
	);
};

export default Services;
