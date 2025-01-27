import React from 'react';
import './App.css'; 
import { createTheme, ThemeProvider } from '@mui/material';
import HomeSection from './components/home-section/HomeSection';
import HotelDetail from './components/hotel-detail/HotelDetail';
import Navbar from './components/navbar/Navbar';
import Register from './components/register/Register';
import SignIn from './components/signIn/SignIn';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const theme = createTheme({
  typography: {
    fontFamily: 'Jost, serif', 
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomeSection />
      <Navbar />
      <SignIn />
      <Register />
      <HotelDetail />
    </ThemeProvider>
  );
}

export default App;
