import { Gradient } from 'react-gradient';
import './RestraintsPage.scss';

const gradients = [
	['#bd19d6', '#ea7d10'],
	['#ff2121', '#25c668'],
];

function RestraintsPage() {
	return (
		<div className="restraints-page">
			<Gradient
				gradients={gradients}
				property="text"
				duration={3000}
				angle="45deg">
				<h1 className="title">What Are The Solution Restraints</h1>
			</Gradient>
			<h3>Cost</h3>
			<span className="description">
				Requiring crypto mining facilities to use renewable energy
				sources will increase the cost of mining. This will make it more
				difficult for crypto mining facilities to make a profit. This
				means the cost of mining will be passed on to the consumer, so
				the price of cryptocurrencies will increase.
			</span>
			<h3>Where can it be implemented?</h3>
			<span className="description">
				The solution can only be implemented in countries that have a
				high percentage of renewable energy sources, and therefore less
				forward countries will not be able to implement the solution.
			</span>
			<h3>How long will it take?</h3>
			<span className="description">
				The solution will take a long time to implement, as it will
				require a lot of time and money to convert the mining facilities
				to use renewable energy sources, and it will take a long time to
				restrict the size of mining facilities.
			</span>
			<h3>Who would resist the solutions?</h3>
			<span className="description">
				The solution will be resisted by the crypto mining facilities,
				as they will not want to spend the money to convert to renewable
				energy sources, and they will not want to be restricted in the
				size of their facilities. The solution will also be resisted by
				the crypto miners, as they will not want to pay more for their
				cryptocurrencies.
			</span>
			<h3>Who would support the solutions?</h3>
			<span className="description">
				Activists around the world have been advocating for cleaner and
				less harmful energy sources, and this solution will help to
				achieve this goal. The solution will also be supported by the
				general public, as it will reduce the amount of carbon dioxide
				released into the atmosphere.
			</span>
		</div>
	);
}

export default RestraintsPage;
