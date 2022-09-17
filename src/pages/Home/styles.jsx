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
	background: var(--primary-color);
	padding: 1.875rem;
	display: grid;
	grid-template-columns: 1fr auto;
	align-items: center;

	.logo {
		max-width: 12.5rem;
	}

	nav ul {
		display: flex;
		flex-wrap: wrap;
	}

	nav a {
		display: block;
		padding: 0.625rem;
		color: white;
		font-size: 1.125em;
		background: rgba(0, 0, 0, 0.1);
		border-radius: 0.313rem;
		transition: 0.1s;

		&:hover {
			background: rgba(0, 0, 0, 0.5);
		}
	}

	li + li {
		margin-left: 1.875rem;
	}
`;

export const Sidenav = styled.nav`
	grid-area: sidenav;
	background: #fafbfc;
	padding: 1.875rem;

	img {
		max-width: 100%;
	}

	li a {
		display: block;
		min-width: 3.75rem;
		max-width: 6.25rem;
		margin: 0 auto 1.875rem auto;
		background: white;
		padding: 1.25rem;
		border-radius: 0.313rem;
		box-shadow: 0.313rem 0.313rem 0.938rem 0 rgba(44, 44, 44, 0.15);
		transition: 0.1s ease-out;

		&:hover {
			background: #b07dfb;
		}
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
