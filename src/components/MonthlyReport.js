import React from 'react';
import './MonthlyReport.css';
import MonthlyChart from './monthly-graph/monthly-graph.component';

const MonthlyReport = () => {
	return (
		<div className='MonthlyReport'>
			<div className='Monthly-chart'>
				<MonthlyChart />
			</div>
		</div>
	);
};

export default MonthlyReport;
