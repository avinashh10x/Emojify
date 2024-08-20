// src/ToggleThemeButton.js
import React from 'react';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '../utils/ThemeContext';
import { styled } from '@mui/material/styles';
import NightsStayIcon from '@mui/icons-material/NightsStay'; // Import the icon for theme toggling

const RoundedIconButton = styled(IconButton)(({ theme }) => ({
    position: 'fixed',
    top: theme.spacing(2),
    right: theme.spacing(2),
    borderRadius: '50%',
    padding: theme.spacing(1),
    backgroundColor: 'transparent', // Make background transparent
    boxShadow: theme.shadows[4], // Optional shadow for better visibility
    '&:hover': {
        backgroundColor: theme.palette.action.hover, // Change color on hover
    },
}));

const ToggleThemeButton = () => {
    const { toggleTheme } = useTheme();

    return (
        <RoundedIconButton onClick={toggleTheme}>
            <NightsStayIcon  />
        </RoundedIconButton>
    );
};

export default ToggleThemeButton;
