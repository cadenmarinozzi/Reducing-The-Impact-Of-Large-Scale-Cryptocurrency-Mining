import { Component } from 'react';
import { Gradient } from 'react-gradient';
import './WhatSolutionPage.scss';

const gradients = [
	['#bd19d6', '#ea7d10'],
	['#ff2121', '#25c668'],
];

class WhatSolutionPage extends Component {
	componentDidMount() {
		const windowScrollInvert = () => {
			const scroll = window.scrollY - window.innerHeight * 3;

			if (scroll > 0 && scroll <= window.innerHeight) {
				const color = Math.max(35, scroll / 2);
				document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
			}
		};

		window.addEventListener('scroll', windowScrollInvert);
	}

	render() {
		return (
			<div className="why-solution-page">
				<Gradient
					gradients={gradients}
					property="text"
					duration={3000}
					angle="45deg">
					<h1 className="title">What's The Solution?</h1>
				</Gradient>
				<span className="description">
					To solve the problem of crypto mining, government enforced
					regulations <span className="dark-emphasis">must</span> be
					implemented, as well as a change in the way that
					cryptocurrency is mined.
				</span>
				<span className="description">
					Some of these solutions could be:
				</span>
				<ul className="list">
					<li>
						Implement strict laws on the{' '}
						<span className="dark-emphasis">
							size of crypto mining facilities
						</span>
						.
					</li>
					<li>
						Restrict mining facilities to using{' '}
						<span className="dark-emphasis">non proof-of-work</span>{' '}
						algorithms.
					</li>
					<li>
						Require mining facilities to use{' '}
						<span className="dark-emphasis">
							renewable energy sources
						</span>
						.
					</li>
				</ul>
				<h3>Why must the restrictions be government enforced?</h3>
				<span className="description">
					According to studies done by many organizations, crypto
					mining investors show{' '}
					<span className="dark-emphasis">
						little interest in using clean energy sources
					</span>{' '}
					for their mining facilities. This is because the cost of
					using renewable energy sources is much higher than using
					traditional energy sources. This is why government enforced
					regulations are necessary to ensure that crypto mining
					facilities are using clean energy sources.
				</span>
			</div>
		);
	}
}

export default WhatSolutionPage;
