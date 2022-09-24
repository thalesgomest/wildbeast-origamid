import { createContext, useState } from 'react';

export const ThemeContext = createContext();
import { themes } from '../themes';

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(themes.light);
	const toggleTheme = (curr) => {
		setTheme(curr === themes.light ? themes.dark : themes.light);
	};
	const [pageSelected, setPageSelected] = useState('home');
	return (
		<ThemeContext.Provider
			value={{
				theme,
				toggleTheme,
				pageSelected,
				setPageSelected,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};
