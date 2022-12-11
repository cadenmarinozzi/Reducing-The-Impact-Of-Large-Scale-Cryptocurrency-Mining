import { faAngleDown, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component, createRef } from 'react';
import { Gradient } from 'react-gradient';
import './TitlePage.scss';

const gradients = [
	['#bd19d6', '#ea7d10'],
	['#ff2121', '#25c668'],
];

class TitlePage extends Component {
	constructor() {
		super();

		this.titleContentsRef = createRef();
	}

	componentDidMount() {
		window.addEventListener('scroll', () => {
			if (!this.titleContentsRef.current) return;

			const scroll = window.scrollY;

			if (scroll > 0 && scroll <= window.innerHeight) {
				const color = Math.max(35, 255 - Math.min(scroll / 2, 255));
				document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
				this.titleContentsRef.current.style.opacity = 1 - scroll / 200;
			}
		});
	}

	render() {
		return (
			<div className="title-page">
				<div ref={this.titleContentsRef}>
					<Gradient
						gradients={gradients} // required
						property="text"
						duration={3000}
						angle="45deg">
						<h1 className="title">
							Reducing The Impact Of Large-Scale Cryptocurrency
							Mining
						</h1>
					</Gradient>
					<span className="subtitle">By: Caden Marinozzi</span>
					<FontAwesomeIcon
						onClick={this.props.scroller}
						icon={faAngleDown}
						className="start-arrow"
					/>
				</div>
			</div>
		);
	}
}

export default TitlePage;
