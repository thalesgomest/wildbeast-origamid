import styled from 'styled-components';
import device from '../../utils/deviceSizes';

export const Sidenav = styled.nav`
	grid-area: sidenav;
	background: var(--secondary-color);
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
		ul li p {
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

	li p {
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

	#${(props) => props.page} {
		background: #b07dfb;
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
