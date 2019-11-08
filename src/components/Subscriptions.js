import React, { useState, useEffect } from 'react';
import ServiceItem from './ServiceItem';
import './Subscriptions.css';

const Subscriptions = ({ dbData }) => {
	const [ subList, setSubList ] = useState([
		<img style={{ width: '260px', margin: '0 auto' }} src={require('../images/spinner.gif')} alt='spinner' />
	]);
	const [ userInfo, setUserInfo ] = useState({});

	const getUserData = () => {
		try {
			let userSubIDs = dbData.data.users[0].subs;
			let subs = dbData.data.services.filter((sub) => {
				if (userSubIDs.includes(sub.id)) {
					return sub;
				}
			});
			let userSubs = subs.map((sub) => {
				return <ServiceItem servName={sub.name} servPrice={sub.price} key={sub.id} />;
			});
			setSubList(userSubs);
			setUserInfo({ name: dbData.data.users[0].name });
		} catch (error) {
			console.log(error);
			setSubList([ <h2>{`Services not found :(`}</h2> ]);
		}
	};

	useEffect(() => {
		setTimeout(() => {
			getUserData();
		}, 800);
	}, []);

	return (
		<div className='Subscriptions'>
			<header className='Sub-header'>
				<h2>{`${userInfo.name}'s Subscriptions`}</h2>
			</header>
			<div className='Services-list'>{subList}</div>
		</div>
	);
};

export default Subscriptions;
