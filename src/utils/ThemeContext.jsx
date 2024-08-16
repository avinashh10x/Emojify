// src/utils/ThemeContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from './theme';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProviderWrapper = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(
        () => JSON.parse(localStorage.getItem('darkMode')) || false
    );

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const theme = isDarkMode ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
