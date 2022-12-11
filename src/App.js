import TitlePage from './Components/pages/TitlePage';
import WhatIsCryptoPage from './Components/pages/WhatIsCryptoPage';
import WhyIsItBadPage from './Components/pages/WhyIsItBadPage';
import WhatSolutionPage from 'Components/pages/WhatSolutionPage';
import SolutionEffectPage from 'Components/pages/SolutionEffectPage';
import ReferencesPage from 'Components/pages/ReferencesPage';
import HabitatPage from 'Components/pages/HabitatPage';
import WhyIsItBadGraph from 'Components/pages/WhyIsItBadGraph';
import './App.scss';

function App() {
	return (
		<>
			<TitlePage />
			<WhatIsCryptoPage />
			<WhyIsItBadPage />
			<WhyIsItBadGraph />
			<HabitatPage />
			<WhatSolutionPage />
			<SolutionEffectPage />
			<ReferencesPage />
		</>
	);
}

export default App;
