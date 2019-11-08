import React, { useState, useEffect } from 'react';
import ServiceItem from './ServiceItem';
import './Services.css';

const Services = () => {
	const [serviceList, setServiceList] = useState([<img style={{ width: '260px', margin: '0 auto' }} src={require('../images/spinner.gif')} alt="spinner" />]);


	const getData = async () => {
		let response = await fetch('./testData.json');
		let data = await response.json();

		try {
			let updateServiceList = await data.data.services.map((serv) => {
				return <ServiceItem servName={serv.name} servPrice={serv.price} key={serv.id} />;
			});
			setServiceList(updateServiceList);
		} catch (error) {
			console.log(error);
			setServiceList([<h2>{`Services not available :(`}</h2>]);
		}
	};

	useEffect(() => {
		setTimeout(() => {
			getData();
		}, 1000);
	})

	return (
		<div className='Services'>
			<div className='Main-container'>
				<div className='Services-list'>{serviceList}</div>
			</div>
		</div>
	);
};

export default Services;
