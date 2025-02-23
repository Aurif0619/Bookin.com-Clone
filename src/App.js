import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import HomeSection from "./components/home-section/HomeSection";
import HotelDetail from "./components/hotel-detail/HotelDetail";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";
import SignIn from "./components/signIn/SignIn";
import Flights from "./Tabs/flights/Flights";
import Stays from "./Tabs/stays/Stays";
import CarRentals from "./Tabs/car-rentals/CarRentals";
import PageNotFound from "./components/page-not-found/PageNotFound";
import ProtectRoute from "./components/protect-route/ProtectRoute";
import HotelAvailibility from "./components/hotel-availibility/HotelAvailibility";

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
          <Route path="/register" element={<Register />} />
          <Route path="/sign-in" element={<SignIn />} />

          <Route path="/"
            element={<ProtectRoute> <HomeSection /> </ProtectRoute>
            }
          />
          <Route path="/stays"
            element={<ProtectRoute><Stays /></ProtectRoute>
            }
          />
          <Route path="/stays" element={<Stays />} />

          <Route path="/flights"
            element={<ProtectRoute><Flights /></ProtectRoute>
            }
          />
          <Route path="/car-rentals"
            element={<ProtectRoute><CarRentals /></ProtectRoute>
            }
          />
          <Route
            path="/hotel-availibility"
            element={<ProtectRoute><HotelAvailibility /> </ProtectRoute>
            }
          />

          <Route path="/hotel-detail"
            element={<ProtectRoute><HotelDetail /></ProtectRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;