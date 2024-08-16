import { Container, Box } from '@mui/material';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import { Route, Routes } from 'react-router-dom';
import UserProfile from './screens/UserProfile';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
