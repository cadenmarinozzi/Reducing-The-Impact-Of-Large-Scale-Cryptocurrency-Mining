import { Component, createRef } from 'react';
import { Gradient } from 'react-gradient';
import CryptoImage from '../../../assets/images/crypto.png';
import './TitlePage.scss';

const gradients = [
	['#bd19d6', '#ea7d10'],
	['#ff2121', '#25c668'],
];

class TitlePage extends Component {
	constructor() {
		super();

		this.state = {};
		this.ref = createRef();
		this.titleContentsRef = createRef();
	}

	componentDidMount() {
		if (!this.ref.current) return;

		let cryptoImages = [];

		for (let i = 0; i < 20; i++) {
			const width = 100 + Math.random() * 400;

			const img = document.createElement('img');
			img.src = CryptoImage;
			img.style.position = 'fixed';
			img.style.left = `${Math.random() * window.innerWidth}px`;
			img.style.width = `${width}px`;
			img.style.top = `-${width / 2}px`;

			this.ref.current.appendChild(img);
			cryptoImages.push(img);
		}

		const cryptoImageAnimation = () => {
			window.removeEventListener('scroll', cryptoImageAnimation);

			cryptoImages.forEach((img) => {
				let height = parseInt(img.style.top);
				let acceleration = parseInt(img.style.width) / 500;
				let velocity = 0;

				function animate() {
					height += velocity;
					velocity += acceleration;
					img.style.top = `${height}px`;

					if (height < window.innerHeight) {
						requestAnimationFrame(animate);
					}
				}

				animate();
			});
		};

		const windowScrollInvert = () => {
			const scroll = window.scrollY;

			if (scroll > 0 && scroll <= window.innerHeight) {
				const color = Math.max(35, 255 - Math.min(scroll / 2, 255));
				document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
				this.titleContentsRef.current.style.opacity = 1 - scroll / 200;
			}
		};

		window.addEventListener('scroll', windowScrollInvert);
	}

	render() {
		return (
			<>
				<div ref={this.ref} className="crypto-images"></div>
				<div className="title-page">
					<div ref={this.titleContentsRef}>
						<Gradient
							gradients={gradients} // required
							property="text"
							duration={3000}
							angle="45deg">
							<h1 className="title">
								Reducing The Impact Of Large-Scale
								Cryptocurrency Mining
							</h1>
						</Gradient>
						<span className="subtitle">By: Caden Marinozzi</span>
					</div>
				</div>
			</>
		);
	}
}

export default TitlePage;
