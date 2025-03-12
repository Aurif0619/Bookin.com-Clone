import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
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

// Create a Material-UI theme
const theme = createTheme({
  typography: {
    fontFamily: "Jost, serif",
  },
});

// Define the router configuration
const router = createBrowserRouter([
  {
    element: (
      <ProtectRoute>
        <Navbar />
        <Outlet />
      </ProtectRoute>
    ),
    children: [
      {
        path: "/",
        element: <HomeSection />,
      },
      {
        path: "/hotel-availibility",
        element: <HotelAvailibility />,
      },
      {
        path: "/hotel-detail",
        element: <HotelDetail />,
      },
      {
        path: "/car-rentals",
        element: <CarRentals />,
      },
      {
        path: "/flights",
        element: <Flights />,
      },
      {
        path: "/stays",
        element: <Stays />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

// App component
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;