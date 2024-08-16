// src/ToggleThemeButton.js
import React from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '../utils/ThemeContext';

const ToggleThemeButton = () => {
    const { toggleTheme } = useTheme();

    return (
        <Button variant="contained" onClick={toggleTheme}>
            Toggle Theme
        </Button>
    );
};

export default ToggleThemeButton;
