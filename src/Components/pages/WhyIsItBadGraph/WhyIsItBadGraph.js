import { Line, Scatter } from 'react-chartjs-2';
import cryptoJson from 'assets/data/crypto.json';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import './WhyIsItBadGraph.scss';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const dateRegex = /\d\d\d\d-\d\d-\d\d/g;
const cryptoData = JSON.parse(cryptoJson);
const evalData = cryptoData.slice(1).filter((_, index) => index % 50 === 0);

const data = {
	labels: evalData.map(
		(data) =>
			data['Average electricity cost assumption: 0.05 USD/kWh'].match(
				dateRegex
			)[0]
	),
	datasets: [
		{
			label: 'Hydro Only',
			data: evalData.map((data) => {
				return Object.values(data)[1];
			}),
			backgroundColor: 'rgb(54, 162, 235)',
			borderColor: 'rgba(54, 162, 235, 1)',
			pointBackgroundColor: 'rgba(54, 162, 235, 1)',
		},
		{
			label: 'Estimated',
			data: evalData.map((data) => {
				return Object.values(data)[2];
			}),
			backgroundColor: 'rgb(150, 150, 155)',
			borderColor: 'rgba(150, 150, 155, 1)',
			pointBackgroundColor: 'rgba(155, 155, 150, 1)',
		},
		{
			label: 'Coal Only',
			data: evalData.map((data) => {
				return Object.values(data)[3];
			}),

			backgroundColor: 'rgb(255, 99, 132)',
			borderColor: 'rgba(255, 99, 132, 1)',
			pointBackgroundColor: 'rgba(255, 99, 132, 1)',
		},
	],
};

function WhyIsItBadGraph() {
	return (
		<div className="why-is-it-bad-graph">
			<Line
				className="graph"
				data={data}
				options={{
					plugins: {
						legend: {
							position: 'top',
						},
					},
					scales: {
						y: {
							title: {
								display: true,
								text: 'Annual emmisions of C02 (MtCO2e)',
							},
						},
						x: {
							title: {
								display: true,
								text: 'Date of evaluation',
							},
						},
					},
				}}
			/>
			<span className="description">
				As evident by the data in the graph, the growth of
				cryptocurrency is growing exponentially, which means the amount
				of carbon emissions is growing exponentially too. In just one
				year, from 2020 to 2021, daily coal emissions due to
				cryptocurrency mining increased by 50 mega tons of CO2. Another
				visible aspect evident by the graph is how little renewable
				energy is being used for crypto mining, and how little it has
				changed throughout the years.
			</span>
		</div>
	);
}

export default WhyIsItBadGraph;
