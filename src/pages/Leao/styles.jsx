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
			height: 100%;
		}
		:nth-of-type(3) {
			width: 100%;
		}
	}

	p {
		font-size: 1.2em;
		line-height: 1.6;
		letter-spacing: -0.005em;
		color: var(--font-color);
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
		font-size: 1.2em;
		color: #b07dfb;
		/* max-width: 16em; */
		width: 100%;
		text-align: justify;
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
