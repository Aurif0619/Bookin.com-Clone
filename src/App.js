import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import HomeSection from "./components/home-section/HomeSection";
import HotelDetail from "./components/hotel-detail/HotelDetail";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";
import SignIn from "./components/signIn/SignIn";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Flights from "./Tabs/flights/Flights";
import Stays from "./Tabs/stays/Stays";
import CarRentals from "./Tabs/car-rentals/CarRentals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: "Jost, serif",
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/stays" element={<Stays />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/car-rentals" element={<CarRentals />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hotel-detail" element={<HotelDetail />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
