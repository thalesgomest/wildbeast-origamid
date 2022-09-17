import styled from 'styled-components';
import device from '../../utils/deviceSizes';

export const Structure = styled.div`
	display: grid;
	grid-template-columns: minmax(160px, 1fr) 3fr 300px;
	grid-template-areas:
		'header header header'
		'sidenav content adverts'
		'footer footer footer';
	img {
		display: block;
		max-width: 100%;
		border-radius: 5px;
	}
	@media ${device.tablet} {
		grid-template-areas:
			'header header header'
			'sidenav content content'
			'sidenav adverts adverts'
			'footer footer footer';
	}
	@media ${device.mobile} {
		grid-template-columns: auto;
		grid-template-areas:
			'header'
			'sidenav'
			'content'
			'adverts'
			'footer';
	}
`;

export const Header = styled.header`
	grid-area: header;
	/* background: var(--primary-color); */
	background: ${({ theme }) =>
		theme.background ? theme.background : 'var(--primary-color)'};
	padding: 30px;
	display: grid;
	grid-template-columns: 1fr auto;
	align-items: center;
	@media ${device.mobile} {
		grid-template-columns: auto;
		min-width: 350px;
		.logo {
			margin-bottom: 20px;
		}
		nav ul li {
			font-size: 0.8em;
		}

		nav ul li + li {
			margin-left: 10px;
		}
	}

	.logo {
		max-width: 200px;
	}

	nav ul {
		display: flex;
		flex-wrap: wrap;
	}

	nav ul li {
		/* From uiverse.io by @alexruix */
		/* The switch - the box around the slider */
		.switch {
			font-size: 17px;
			position: relative;
			display: inline-block;
			width: 3.5em;
			height: 2em;
		}

		/* Hide default HTML checkbox */
		.switch input {
			opacity: 0;
			width: 0;
			height: 0;
		}

		/* The slider */
		.slider {
			--background: #b07dfb;
			position: absolute;
			cursor: pointer;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: var(--background);
			transition: 0.5s;
			border-radius: 30px;
		}

		.slider:before {
			position: absolute;
			content: '';
			height: 1.4em;
			width: 1.4em;
			border-radius: 50%;
			left: 10%;
			bottom: 15%;
			box-shadow: inset 8px -4px 0px 0px #fff;
			background: var(--background);
			transition: 0.5s;
		}

		input:checked + .slider {
			background-color: #b07dfb;
		}

		input:checked + .slider:before {
			transform: translateX(100%);
			box-shadow: inset 15px -4px 0px 15px #fff;
		}
	}

	nav a {
		display: block;
		padding: 10px;
		color: ${({ theme }) => (theme.color ? theme.color : 'white')};
		font-size: 1.125em;
		background: rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		transition: 0.1s;

		&:hover {
			background: rgba(0, 0, 0, 0.5);
		}
	}

	li + li {
		margin-left: 30px;
	}
`;

export const Sidenav = styled.nav`
	grid-area: sidenav;
	background: #fafbfc;
	padding: 30px;

	@media ${device.mobile} {
		position: relative;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
		-ms-overflow-style: -ms-autohiding-scrollbar;
		::after {
			content: '→';
			position: absolute;
			top: 5px;
			right: 30px;
			color: rgba(0, 0, 0, 0.3);
			animation: seta 0.5s ease-in 0s infinite alternate;
		}
		padding: 0 30px;
		ul li a {
			margin: 30px 30px 30px 0;
			img {
				min-width: 60px;
			}
		}
		ul {
			display: flex;
		}
		li {
			flex: 1 0 60px;
		}
	}

	li a {
		display: block;
		min-width: 60px;
		max-width: 140px;
		margin: 0 auto 30px auto;
		background: white;
		padding: 20px;
		border-radius: 5px;
		box-shadow: 5px 5px 15px 0px rgba(44, 44, 44, 0.15);
		transition: 0.1s ease-out;

		&:hover {
			background: #b07dfb;
		}
	}

	@keyframes seta {
		from {
			right: 30px;
		}
		to {
			right: 20px;
		}
	}
`;

export const Main = styled.main`
	grid-area: content;
	max-width: 900px;
	margin: 0 auto;
	padding: 30px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 30px;

	@media (max-width: 600px) {
		grid-template-columns: auto;

		img {
			width: 100%;
		}

		.emphasis {
			margin: 0 auto;
		}
	}

	.col-wide {
		grid-column: 1 / -1;
	}

	img {
		:first-of-type {
			grid-row: span 2;
			align-self: end;
			width: 100%;
			height: 100%;
		}
		:nth-of-type(2) {
			align-self: end;
			width: 100%;
		}
		:nth-of-type(3) {
			width: 100%;
		}
	}

	p {
		font-size: 1.2em;
		line-height: 1.6;
		letter-spacing: -0.005em;
		color: rgba(0, 0, 0, 0.7);
	}

	.information p + p {
		margin-top: 30px;
	}

	.title {
		color: #b07dfb;

		h1 {
			font-size: 3.75em;
			line-height: 1;
			font-weight: 700;

			img {
				max-width: 300px;
			}
		}

		span {
			font-size: 0.875em;
			font-style: italic;
		}
	}

	.characteristics {
		display: flex;
		align-items: flex-start;

		> div {
			width: 80px;
			text-align: center;
			background: var(--primary-color);
			border-radius: 5px;
			box-shadow: 5px 5px 15px 0px rgba(44, 44, 44, 0.15);
			position: relative;
		}

		> div:first-child {
			margin-right: 30px;
		}

		span {
			display: block;
			color: #b07dfb;
		}

		.number {
			font-size: 3em;
			line-height: 1;
			margin: 10px auto;
		}

		.label {
			background: white;
			border-radius: 0 0 5px 5px;
			padding: 5px 0;
			position: relative;
			top: 2px;
		}
	}
	.emphasis {
		font-size: 0.875em;
		color: #b07dfb;
		max-width: 16em;
		width: 100%;
	}

	.quote,
	.atributes {
		align-self: start;
		padding: 30px;
		border-radius: 5px;
		box-shadow: 5px 5px 15px 0px rgba(44, 44, 44, 0.15);
		background: var(--primary-color);
	}

	.quote p {
		font-size: 1.5em;
		font-style: italic;
		text-align: center;
		color: white;
		max-width: 500px;
		margin: 0 auto;
	}

	.atributes li {
		color: white;
		font-family: var(--secondary-font);
		font-size: 1.125em;
		padding: 15px;
	}

	.atributes li + li {
		border-top: 2px solid #b07dfb;
	}
`;

export const Aside = styled.aside`
	grid-area: adverts;
	background: #fafbfc;
	display: grid;
	align-content: start;
	padding: 30px;
	gap: 30px;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;

export const Footer = styled.footer`
	grid-area: footer;
	background: ${({ theme }) =>
		theme.background ? theme.background : 'var(--primary-color)'};

	p {
		color: ${({ theme }) => (theme.color ? theme.color : 'white')};
		text-align: center;
		padding: 30px;
		font-weight: bold;
	}
`;
