import React from 'react';
import { ThemeProvider } from './ThemeProvider';

export default function AppProvider({ children }) {
	return <ThemeProvider>{children}</ThemeProvider>;
}
