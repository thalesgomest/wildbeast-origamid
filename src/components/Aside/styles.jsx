import styled from 'styled-components';
import device from '../../utils/deviceSizes';

export const Aside = styled.aside`
	grid-area: adverts;
	background: var(--secondary-color);
	display: grid;
	align-content: start;
	padding: 30px;
	gap: 30px;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;
