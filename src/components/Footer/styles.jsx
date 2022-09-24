import styled from 'styled-components';
import device from '../../utils/deviceSizes';

export const Footer = styled.footer`
	grid-area: footer;
	background: var(--primary-color);

	p {
		color: white;
		text-align: center;
		padding: 30px;
		font-weight: bold;
	}
`;
