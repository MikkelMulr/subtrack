import React, { useState, useEffect } from 'react';
import ServiceItem from './ServiceItem';
import './Subscriptions.css';

const Subscriptions = () => {

	const [subList, setSubList] = useState([<img style={{ width: '260px', margin: '0 auto' }} src={require('../images/spinner.gif')} alt="spinner" />]);
	const [userInfo, setUserInfo] = useState({})
	// MOVE API CALL TO PARENT COMPONENT AND STORE IN STATE > PASS DOWN AS NEEDED
	const getUserData = async () => {
		let response = await fetch('./testData.json');
		let data = await response.json();

		try {
			let userSubIDs = data.data.users[0].subs;
			let subs = data.data.services.filter((sub) => {
				if (userSubIDs.includes(sub.id)) {
					return sub;
				}
			});
			let userData = await subs.map((sub) => {
				return <ServiceItem servName={sub.name} servPrice={sub.price} key={sub.id} />;
			});
			setSubList(userData);
			setUserInfo({ name: data.data.users[0].name })
		} catch (error) {
			console.log(error);
			setSubList([<h2>{`Services not found :(`}</h2>]);
		}
	};

	useEffect(() => {
		setTimeout(() => {
			getUserData();
		}, 800);
	})

	return (
		<div className='Subscriptions'>
			<div className='Main-container'>
				<h2>{`${userInfo.name}'s Subscriptions`}</h2>
				<div className='Services-list'>{subList}</div>
			</div>
		</div>
	);
};

export default Subscriptions;
