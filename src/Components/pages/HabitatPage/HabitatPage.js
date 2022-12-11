import { Gradient } from 'react-gradient';
import './HabitatPage.scss';

const gradients = [
	['#bd19d6', '#ea7d10'],
	['#ff2121', '#25c668'],
];

function HabitatPage() {
	return (
		<div className="habitat-page">
			<Gradient
				gradients={gradients}
				property="text"
				duration={3000}
				angle="45deg">
				<h1 className="title">How Does It Destroy Habitats?</h1>
			</Gradient>
			<span className="description">
				Crypto mining facilities directly destroy habitats and
				ecosystems by using up{' '}
				<span className="emphasis">
					large amounts of land and water
				</span>{' '}
				and{' '}
				<span className="emphasis">
					destroying the habitats of endangered species
				</span>
				. Crypto mining facilities also destroy habitats by{' '}
				<span className="emphasis">
					dumping their waste into rivers and lakes
				</span>
				.
			</span>
			<span className="description">
				Here are some examples of crypto mining facilities destroying
				habitats:
			</span>
			<ul>
				<li>
					Stronghold Digital Mining has been accused of destroying the
					habitat of the endangered golden-cheeked warbler.
				</li>
				<li>
					Stronghold Digital Mining has also been accused of
					destroying the habitat of the endangered lesser prairie
					chicken.
				</li>
				<li>
					Bitmain crypto mining facility in Rockdale, Texas dumped 1.5
					million gallons of toxic waste into the Colorado River.
				</li>
			</ul>
		</div>
	);
}

export default HabitatPage;
