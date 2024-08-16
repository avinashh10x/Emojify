import React from 'react';
import { Box, Typography } from '@mui/material';
import MovieGuessGame from '../component/MovieGuessGame';

function HomeScreen() {
    return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100vw',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: 'background.default',
                padding: 2
            }}
        >
            <Typography 
                variant="h2" 
                component="h1" 
                textAlign="center" 
                gutterBottom 
                sx={{
                    fontWeight: 'bold',
                    color: 'primary.main',
                    marginBottom: 4,
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
                }}
            >
                Guess the 🎬 Movie 
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    flexDirection: 'column',
                    maxWidth: 800,
                    padding: 2,
                    backgroundColor: 'background.paper',
                    borderRadius: 2,
                    boxShadow: 3
                }}
            >
                <MovieGuessGame />
            </Box>
        </Box>
    );
}

export default HomeScreen;
