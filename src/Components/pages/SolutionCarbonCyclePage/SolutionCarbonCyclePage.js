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
	faMultiply,
	faSmog,
	faSolarPanel,
	faSun,
	faTemperatureLow,
	faWater,
} from '@fortawesome/free-solid-svg-icons';
import { Gradient } from 'react-gradient';
import { Component, createRef } from 'react';
import Xarrow from 'react-xarrows';
import './SolutionCarbonCyclePage.scss';

const gradients = [
	['#bd19d6', '#ea7d10'],
	['#ff2121', '#25c668'],
];

// ABSOLUTE TERRIBLE CODE LOL, I WILL CLEAN THIS UP LATER
class SolutionCarbonCyclePage extends Component {
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
			<div className="solution-carbon-cycle-page">
				<Gradient
					gradients={gradients}
					property="text"
					duration={3000}
					angle="45deg"
					className="carbon-cycle-gradient">
					<h1 className="title">
						How Does The Solution Effect The Carbon Cycle?
					</h1>
				</Gradient>
				<div className="carbon-cycle-diagram">
					<div className="multi-row">
						<div ref={firstPowerRef}>
							<div className="diagram-row">
								<FontAwesomeIcon
									icon={faLeaf}
									className="disabled-path"
								/>{' '}
								<span className="disabled-path">
									{' '}
									Fossil Sedimentation - Lithosphere
								</span>
							</div>
						</div>
						<div ref={solarPowerRef}>
							<div className="diagram-row">
								<FontAwesomeIcon icon={faSun} />
								Solar Power
							</div>
						</div>
					</div>
					<div className="multi-row">
						<div ref={powerPlantRef}>
							<div className="diagram-row">
								<FontAwesomeIcon
									icon={faIndustry}
									className="disabled-path"
								/>
								<span className="disabled-path">
									{' '}
									Power Plant
								</span>
							</div>
						</div>
						<div ref={solarPanelsRef}>
							<div className="diagram-row">
								<FontAwesomeIcon icon={faSolarPanel} />
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
								<FontAwesomeIcon
									icon={faTemperatureLow}
									className="disabled-path"
								/>
								<span className="disabled-path">
									{' '}
									Mining Facility Cooling
								</span>
							</div>
						</div>
					</div>
					<div ref={fossilFuelEmissionsRef}>
						<div className="diagram-row left-item">
							<FontAwesomeIcon
								icon={faSmog}
								className="disabled-path"
							/>
							<span className="disabled-path">
								{' '}
								Fossil Fuel Emissions
							</span>
						</div>
					</div>
					<div className="multi-row">
						<div ref={atmosphereRef}>
							<div className="diagram-row">
								<FontAwesomeIcon
									icon={faCloud}
									className="disabled-path"
								/>
								<span className="disabled-path">
									{' '}
									Atmosphere
								</span>
							</div>
						</div>
						<div ref={waterBodiesRef}>
							<div className="diagram-row">
								<FontAwesomeIcon
									icon={faWater}
									className="disabled-path"
								/>
								<span className="disabled-path">
									{' '}
									Water Bodies - Hydrosphere
								</span>
							</div>
						</div>
					</div>
					<div ref={endWaterRef}>
						<div className="diagram-row">
							<FontAwesomeIcon
								icon={faFish}
								className="disabled-path"
							/>
							<span className="disabled-path">
								{' '}
								Marine Life - Biosphere
							</span>
						</div>
						<div className="diagram-row">
							<FontAwesomeIcon
								icon={faBiohazard}
								className="disabled-path"
							/>
							<span className="disabled-path">
								{' '}
								Toxic Chemicals
							</span>
						</div>
					</div>
				</div>
				<Xarrow
					start={firstPowerRef}
					end={powerPlantRef}
					color="#CCCCCC"
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
					color="#CCCCCC"
				/>
				<Xarrow
					start={solarPanelsRef}
					end={miningFacilityCoolingRef}
					color="#CCCCCC"
				/>
				<Xarrow
					start={powerPlantRef}
					end={miningFacilityCoolingRef}
					color="#CCCCCC"
				/>
				<Xarrow
					start={powerPlantRef}
					end={fossilFuelEmissionsRef}
					color="#CCCCCC"
				/>
				<Xarrow
					start={fossilFuelEmissionsRef}
					end={atmosphereRef}
					startAnchor="bottom"
					color="#CCCCCC"
				/>
				<Xarrow
					start={miningFacilityCoolingRef}
					end={waterBodiesRef}
					color="#CCCCCC"
				/>
				<Xarrow
					start={waterBodiesRef}
					startAnchor="bottom"
					color="#CCCCCC"
					end={endWaterRef}
				/>
			</div>
		);
	}
}

export default SolutionCarbonCyclePage;
