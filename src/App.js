import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import HotelAvailibility from "./components/hotel-availibility/HotelAvailibility";
import HomeSection from "./components/home-section/HomeSection";
import PageNotFound from "./components/page-not-found/PageNotFound";
import ProtectRoute from "./components/protect-route/ProtectRoute";
import HotelDetail from "./components/hotel-detail/HotelDetail";
import CarRentals from "./Tabs/car-rentals/CarRentals";
import Register from "./components/register/Register";
import Navbar from "./components/navbar/Navbar";
import SignIn from "./components/signIn/SignIn";
import Flights from "./Tabs/flights/Flights";
import Stays from "./Tabs/stays/Stays";

const theme = createTheme({
  typography: {
    fontFamily: "Jost, serif",
  },
});

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