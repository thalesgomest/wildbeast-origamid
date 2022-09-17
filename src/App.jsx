import GlobalStyle from './styles';
import Router from './routes';
import { useContext } from 'react';
import { ThemeContext } from '../src/providers/ThemeProvider';
import { ThemeProvider } from 'styled-components';

function App() {
	const { theme } = useContext(ThemeContext);
	return (
		<ThemeProvider
			theme={{ background: theme.background, color: theme.color }}
		>
			<GlobalStyle />
			<Router />
		</ThemeProvider>
	);
}

export default App;
