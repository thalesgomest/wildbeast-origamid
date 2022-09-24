import styled from 'styled-components';
import device from '../../utils/deviceSizes';

export const Header = styled.header`
	grid-area: header;
	background: var(--primary-color);
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
		cursor: pointer;
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
		color: white;
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
