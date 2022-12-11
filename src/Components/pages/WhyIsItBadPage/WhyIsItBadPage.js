import { Gradient } from 'react-gradient';
import './WhyIsItBadPage.scss';

const gradients = [
	['#bd19d6', '#ea7d10'],
	['#ff2121', '#25c668'],
];

function WhyIsItBadPage() {
	return (
		<div className="why-is-it-bad-page">
			<Gradient
				gradients={gradients}
				property="text"
				duration={3000}
				angle="45deg">
				<h1 className="title">Why Is It Bad?</h1>
			</Gradient>
			<span className="description">
				Large-scale crypto mining has become a crucial factor in climate
				change and habitat destruction, as proof-of-work algorithms
				require large amounts of energy and generates enormous amounts
				of heat.
			</span>
			<span className="description">
				An example of crypto mining facilities using enormous amounts of
				non-renewable electricity is the Stronghold Digital Mining
				crypto farm, who bought an entire coal power plant to power a
				single one of their crypto farms.
			</span>
			<ul className="list">
				<li>
					Currently, the total energy consumption of crypto mining is
					almost{' '}
					<span className="emphasis">
						240 billion kilowatt-hours per year
					</span>
					, more than the entire country of Argentina and Australia.
				</li>
				<li>
					From mid-2021 to 2022, crypto mining alone accounted for{' '}
					<span className="emphasis">27.4 million tons of CO2</span>{' '}
					being released into the atmosphere,
				</li>
				<li>
					Crypto mining accounts for almost{' '}
					<span className="emphasis">
						7% of green house gas emissions
					</span>
					.
				</li>
			</ul>
		</div>
	);
}

export default WhyIsItBadPage;
