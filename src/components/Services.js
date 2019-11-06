import React from 'react';
import './Services.css';

const Services = ({ services }) => {
	// const [ serviceList, setServiceList ] = useState([]);

	// temporary until DB is established
	// const user_services = [
	// 	{ name: 'Netflix', price: 12.99 },
	// 	{ name: 'Spotify', price: 9.99 },
	// 	{ name: 'HBO', price: 15.99 },
	// 	{ name: 'WOW', price: 10.99 }
	// ];

	// const getData = async () => {
	// 	let response = await fetch('./testData.json');
	// 	let data = await response.json();
	// 	try {
	// 		let serviceList = await data.map((serv) => {
	// 			return <ServiceItem servName={serv.data.name} servPrice={serv.data.price} />;
	// 		});
	// 		setServiceList(serviceList);
	// 	} catch (error) {
	// 		console.log(error);
	// 		setServiceList([ <h2>Services not available :(</h2> ]);
	// 	}
	// };

	// getData();

	return (
		<div className='Services'>
			<div className='Main-container'>
				<div className='Services-list'>{services}</div>
			</div>
		</div>
	);
};

export default Services;
