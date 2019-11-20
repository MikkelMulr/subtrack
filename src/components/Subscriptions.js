import React, { useState, useEffect } from 'react';
import ServiceItem from './ServiceItem';
import Axios from 'axios';
import './Subscriptions.css';

const Subscriptions = () => {
	const [subList, setSubList] = useState([]);
	const [userInfo, setUserInfo] = useState({});
	const [Loading, setLoading] = useState(true);

	// useEffect is working in bg WHILE component is being rendered REGARDLESS of data
	// Set loading state to true while data is being fetched and only render when data is recieved.


	useEffect(() => {
		const fetchData = async () => {
			const result = await Axios('./testData.json');
			setUserInfo(result.data);
		};
		fetchData();

	}, []);


	useEffect(() => {
		const getUserData = () => {
			try {
				let userSubIDs = userInfo.data.users[0].subs;
				let subs = userInfo.data.services.filter((sub) => {
					if (userSubIDs.includes(sub.id)) {
						return sub;
					} else {
						return null;
					}
				});
				let userSubs = subs.map((sub) => {
					return <ServiceItem servName={sub.name} servPrice={sub.price} key={sub.id} />;
				});
				setSubList(userSubs);
				setUserInfo({ name: userInfo.data.users[0].name });
				setLoading(false);

			} catch (error) {
				console.log(error);
				setSubList([<h2 key="00000">{`Services not found :(`}</h2>]);
			}
		};
		getUserData();
	}, [userInfo]);


	// if (Loading && subList.length === 0) {
	// 	return (
	// 		<div className='Subscriptions'>
	// 			<header className='Sub-header'>
	// 				<h2>Loading...</h2>
	// 			</header>
	// 			<div className='Services-list'>
	// 				<img style={{ width: '260px', margin: '0 auto' }} src={require('../images/spinner.gif')} alt='spinner' />
	// 			</div>
	// 		</div>
	// 	)
	// } else {
	return (
		<div className='Subscriptions'>
			<header className='Sub-header'>
				<h2>{`Your Subscriptions`}</h2>
			</header>
			{Loading ?
				<div className='Services-list'>{subList}</div>
				:
				<img style={{ width: '260px', margin: '0 auto' }} src={require('../images/spinner.gif')} alt='spinner' />
			}
		</div>
	);
	// }
};

export default Subscriptions;
