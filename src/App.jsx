import GlobalStyle from './styles';
import Router from './routes';
import { useContext } from 'react';
import { ThemeContext } from '../src/providers/ThemeProvider';
import { ThemeProvider } from 'styled-components';

function App() {
	const { theme } = useContext(ThemeContext);
	return (
		<ThemeProvider
			theme={{
				background: theme.background,
				primary_color: theme.primary_color,
				secondary_color: theme.secondary_color,
				font_color: theme.font_color,
				font_secondary_color: theme.font_secondary_color,
			}}
		>
			<GlobalStyle />
			<Router />
		</ThemeProvider>
	);
}

export default App;
