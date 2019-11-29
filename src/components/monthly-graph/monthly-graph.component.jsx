import React from 'react';
import { Line } from 'react-chartjs-2';
import './monthly-graph.css';

const testData = {
	labels: [ 'January', 'February', 'March', 'April', 'May' ],
	datasets: [
		{
			label: 'AMAZON PRIME',
			fill: false,
			lineTension: 0.5,
			backgroundColor: 'rgba(75,192,192,1)',
			borderColor: 'rgba(75,192,192,1)',
			borderWidth: 2,
			data: [ 0, 59, 8, 61, 56 ]
		},
		{
			label: 'NETFLIX',
			fill: false,
			lineTension: 0.5,
			backgroundColor: '#d97d54',
			borderColor: '#d97d54',
			borderWidth: 2,
			data: [ 0, 39, 10, 61, 26 ]
		},
		{
			label: 'SPOTIFY',
			fill: false,
			lineTension: 0.5,
			backgroundColor: '#3bd277',
			borderColor: '#3bd277',
			borderWidth: 2,
			data: [ 0, 69, 20, 31, 66 ]
		}
	]
};

export default class MonthlyChart extends React.Component {
	render() {
		return (
			<div className='chart'>
				<Line
					data={testData}
					options={{
						title: {
							display: true,
							text: 'Your 2019 Subscription Report',
							fontSize: 20
						},
						legend: {
							display: true,
							position: 'right'
						}
					}}
				/>
			</div>
		);
	}
}
