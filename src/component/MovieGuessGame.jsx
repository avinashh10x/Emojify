// src/component/MovieGuessGame.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Card, CardContent } from '@mui/material';
import MovieListing from '../functioning/MovieListing';
import ConfettiExplosion from 'react-confetti-explosion';

const MovieGuessGame = () => {
    const [movieListing, setMovieListing] = useState(null);
    const [currentMovie, setCurrentMovie] = useState(null);
    const [userGuess, setUserGuess] = useState('');
    const [feedback, setFeedback] = useState('');
    const [hint, setHint] = useState('');
    const [isExploding, setIsExploding] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const listing = MovieListing();
        setMovieListing(listing);
        setCurrentMovie(listing.getNextMovie());
    }, []);

    useEffect(() => {
        if (currentMovie) {
            setHint(currentMovie.hint);
            console.log(currentMovie);
        }
    }, [currentMovie]);

    const handleSubmit = () => {
        if (movieListing.checkAnswer(currentMovie.id, userGuess)) {
            setFeedback('Correct! 🎉');
            setScore((prevScore) => prevScore + 1);
            setIsExploding(true);

            setCurrentMovie(movieListing.getNextMovie());
            setUserGuess('');
            setHint('');

            setTimeout(() => {
                setIsExploding(false);
                setFeedback('');
            }, 3000);
        } else {
            setFeedback('Try Again! 😔');
            setTimeout(() => setFeedback(''), 3000);
        }
    };

    if (!currentMovie) return null;

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
            {isExploding && <ConfettiExplosion />}

            <Card sx={{ minWidth: 275, textAlign: 'center', padding: 2 }}>
                <CardContent>
                    <Typography variant="h2">{currentMovie.emoji}</Typography>
                </CardContent>
            </Card>

            <Typography textAlign={'center'} variant="subtitle1" sx={{ margin: 2 }}>
                Hint: {hint}
            </Typography>

            <TextField
                label="Your Guess"
                variant="outlined"
                fullWidth
                sx={{ maxWidth: 300, marginBottom: 2 }}
                value={userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
            />

            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
            >
                Submit
            </Button>

            {feedback && (
                <Typography variant="subtitle1" color={feedback.includes('Correct') ? 'green' : 'error'} sx={{ marginTop: 2 }}>
                    {feedback}
                </Typography>
            )}

            <Card sx={{ margin: 2 }}>
                <CardContent>
                    <Typography variant="h6">Score: {score}</Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default MovieGuessGame;
