import { Gradient } from 'react-gradient';
import './SolutionEffectPage.scss';

const gradients = [
	['#bd19d6', '#ea7d10'],
	['#ff2121', '#25c668'],
];

function SolutionEffectPage() {
	return (
		<div className="solution-effect-page">
			<Gradient
				gradients={gradients}
				property="text"
				duration={3000}
				angle="45deg">
				<h1 className="title">
					How Will These Solutions Restore The Carbon Cycle And
					Restore Biodiversity?
				</h1>
			</Gradient>
			<h3>Renewable energy</h3>
			<span className="description">
				If crypto mining facilities are restricted to use only renewable
				energy, the amount of carbon dioxide released into the
				atmosphere will be reduced, as solar, wind, hydro, and other
				renewable energy sources are carbon neutral.
			</span>
			<h3>Non proof-of-work alogorithms</h3>
			<span className="description">
				If crypto mining facilities must use non proof-of-work
				cryptocurrencies, mining facilities will not have to use
				specialized hardware, which will reduce the amount of energy and
				heat produced by the mining facilities.
			</span>
			<h3>Smaller crypto farms</h3>
			<span className="description">
				Currently, there is no limit on the size of crypto mining
				facilities. If crypto mining facilities are restricted to a
				certain size, it will reduce the number of computers that are
				used to mine cryptocurrencies, which will reduce the carbon
				footprint of crypto mining. Less computers and less heat means
				less toxic chemicals will be released into the environment, as
				the computers will not need to be cooled as much.
			</span>
		</div>
	);
}

export default SolutionEffectPage;
