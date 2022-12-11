import { Gradient } from 'react-gradient';
import './WhatIsCryptoPage.scss';

const gradients = [
	['#bd19d6', '#ea7d10'],
	['#ff2121', '#25c668'],
];

function WhatIsCryptoPage() {
	return (
		<div className="what-is-crypto-page">
			<Gradient
				gradients={gradients}
				property="text"
				duration={3000}
				angle="45deg">
				<h1 className="title">
					What Is Large-Scale Cryptocurrency Mining?
				</h1>
			</Gradient>
			<span className="description">
				Large-Scale crypto mining is when large facilities are created
				to mine large amounts of cryptocurrencies such as Bitcoin and
				Ethereum.
			</span>
			<ul className="list">
				<li>
					Usually use <span className="emphasis">proof-of-work</span>{' '}
					cryptocurrencies.
				</li>
				<li>
					Use specialized hardware which require{' '}
					<span className="emphasis">massive amounts of energy</span>.
				</li>
				<li>
					Generate enormous amounts of{' '}
					<span className="emphasis">heat</span>.
				</li>
			</ul>
		</div>
	);
}

export default WhatIsCryptoPage;
