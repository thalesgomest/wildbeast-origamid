import styled from 'styled-components';

export const Structure = styled.div`
	display: grid;
	grid-template-columns: minmax(10rem, 1fr) 3fr 18.75rem;
	grid-template-areas:
		'header header header'
		'sidenav content adverts'
		'footer footer footer';
`;

export const Header = styled.header`
	grid-area: header;
`;

export const Sidenav = styled.nav`
	grid-area: sidenav;
	img {
		width: 100px;
	}
`;

export const Main = styled.main`
	grid-area: content;
	font-family: 'Vollkorn';
`;

export const Footer = styled.footer`
	grid-area: footer;
`;

export const Aside = styled.aside`
	grid-area: adverts;
`;
