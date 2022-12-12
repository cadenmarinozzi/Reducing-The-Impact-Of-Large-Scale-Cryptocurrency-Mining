import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBiohazard,
	faCloud,
	faComputer,
	faFan,
	faFish,
	faIndustry,
	faLayerGroup,
	faLeaf,
	faSmog,
	faSolarPanel,
	faSun,
	faTemperatureLow,
	faWater,
} from '@fortawesome/free-solid-svg-icons';
import { Gradient } from 'react-gradient';
import Xarrow from 'react-xarrows';
import { Component, createRef } from 'react';
import './CarbonCyclePage.scss';

const gradients = [
	['#bd19d6', '#ea7d10'],
	['#ff2121', '#25c668'],
];

// ABSOLUTE TERRIBLE CODE LOL, I WILL CLEAN THIS UP LATER
class CarbonCyclePage extends Component {
	render() {
		const firstPowerRef = createRef();
		const powerPlantRef = createRef();
		const solarPowerRef = createRef();
		const solarPanelsRef = createRef();
		const cryptoMiningRef = createRef();
		const miningFacilityCoolingRef = createRef();
		const fossilFuelEmissionsRef = createRef();
		const atmosphereRef = createRef();
		const endWaterRef = createRef();
		const waterBodiesRef = createRef();

		return (
			<div className="carbon-cycle-page">
				<Gradient
					gradients={gradients}
					property="text"
					duration={3000}
					angle="45deg"
					className="carbon-cycle-gradient">
					<h1 className="title">
						How Does Carbon Move To And From Crypto Mining
						Facilities?
					</h1>
					<div className="carbon-cycle-diagram">
						<div className="multi-row">
							<div ref={firstPowerRef}>
								<div className="diagram-row">
									<FontAwesomeIcon icon={faLeaf} /> Fossil
									Sedimentation - Lithosphere
								</div>
							</div>
							<div ref={solarPowerRef}>
								<div className="diagram-row">
									<FontAwesomeIcon icon={faSun} /> Solar Power
								</div>
							</div>
						</div>
						<div className="multi-row">
							<div ref={powerPlantRef}>
								<div className="diagram-row">
									<FontAwesomeIcon icon={faIndustry} /> Power
									Plant
								</div>
							</div>
							<div ref={solarPanelsRef}>
								<div className="diagram-row">
									<FontAwesomeIcon icon={faSolarPanel} />{' '}
									Solar Panels
								</div>
							</div>
						</div>
						<div className="multi-row">
							<div ref={cryptoMiningRef}>
								<div className="diagram-row">
									<FontAwesomeIcon icon={faComputer} /> Crypto
									Mining
								</div>
							</div>
							<div ref={miningFacilityCoolingRef}>
								<div className="diagram-row">
									<FontAwesomeIcon icon={faTemperatureLow} />{' '}
									Mining Facility Cooling
								</div>
							</div>
						</div>
						<div ref={fossilFuelEmissionsRef}>
							<div className="diagram-row left-item">
								<FontAwesomeIcon icon={faSmog} /> Fossil Fuel
								Emissions
							</div>
						</div>
						<div className="multi-row">
							<div ref={atmosphereRef}>
								<div className="diagram-row">
									<FontAwesomeIcon icon={faCloud} />{' '}
									Atmosphere
								</div>
							</div>
							<div ref={waterBodiesRef}>
								<div className="diagram-row">
									<FontAwesomeIcon icon={faWater} /> Water
									Bodies - Hydrosphere
								</div>
							</div>
						</div>
						<div ref={endWaterRef}>
							<div className="diagram-row">
								<FontAwesomeIcon icon={faFish} /> Marine Life -
								Biosphere
							</div>
							<div className="diagram-row">
								<FontAwesomeIcon icon={faBiohazard} /> Toxic
								Chemicals
							</div>
						</div>
					</div>
				</Gradient>
				<Xarrow
					start={firstPowerRef}
					end={powerPlantRef}
					color="#ABA7B3"
				/>
				<Xarrow
					start={solarPowerRef}
					end={solarPanelsRef}
					color="#FBD700"
				/>
				<Xarrow
					start={solarPanelsRef}
					end={cryptoMiningRef}
					color="#FBD700"
				/>
				<Xarrow
					start={powerPlantRef}
					end={cryptoMiningRef}
					color="#ABA7B3"
				/>
				<Xarrow
					start={solarPanelsRef}
					end={miningFacilityCoolingRef}
					color="#FBD700"
				/>
				<Xarrow
					start={powerPlantRef}
					end={miningFacilityCoolingRef}
					color="#ABA7B3"
				/>
				<Xarrow
					start={powerPlantRef}
					end={fossilFuelEmissionsRef}
					color="#ABA7B3"
				/>
				<Xarrow
					start={fossilFuelEmissionsRef}
					end={atmosphereRef}
					startAnchor="bottom"
					color="#ABA7B3"
				/>
				<Xarrow start={miningFacilityCoolingRef} end={waterBodiesRef} />
				<Xarrow
					start={waterBodiesRef}
					startAnchor="bottom"
					end={endWaterRef}
				/>
			</div>
		);
	}
}

export default CarbonCyclePage;
