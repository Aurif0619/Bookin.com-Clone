import { Box, Button, Toolbar, Typography, TextField, MenuItem, Card } from "@mui/material";
import React, { useState } from "react";
import KingBedIcon from "@mui/icons-material/KingBed";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AttractionsIcon from "@mui/icons-material/Attractions";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import WordWide from '../../assets/worldWideImg.jpeg'
import GiftImg from '../../assets/giftImg.png'

const HomeSection = () => {
  const Btns = [
    { id: 1, name: "Flights", icon: <FlightTakeoffIcon /> },
    { id: 2, name: "Car rentals", icon: <DirectionsCarIcon className="d-none d-sm-block" /> },
    { id: 3, name: "Attraction", icon: <AttractionsIcon /> },
    { id: 4, name: "Airport taxis", icon: <LocalTaxiIcon /> },
  ];

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const handleAdultsChange = (event) => {
    setAdults(event.target.value);
  };

  const handleChildrenChange = (event) => {
    setChildren(event.target.value);
  };

  const handleRoomsChange = (event) => {
    setRooms(event.target.value);
  };

  return (
    <>
      <Box component="main"
        className="text-white"
        sx={{
          p: 3, background: "#003B95", height: "62vh",
        }}
      >
        <Toolbar />
        <Box className="container"
          sx={{ flexWrap: "wrap", justifyContent: { xs: "center", md: "flex-start" }, }}>
          <Button
            className="border-white text-white rounded-5 gap-2 py-2"
            variant="outlined"
            sx={{ textTransform: "none" }}>
            <KingBedIcon className="fs-4" /> Stays
          </Button>
          {Btns.map((btn) => (
            <Button
              className="text-white gap-2 ms-3"
              key={btn.id}
              sx={{ textTransform: "none" }}
            >
              {btn.icon}
              {btn.name}
            </Button>
          ))}

          <Box sx={{ background: "#003B95", padding: "20px 0" }} className='mt-5'>
            <Typography
              variant="h1" className="text-white fs-1 fw-bold"
              sx={{ fontSize: { xs: "1.5rem", md: "2.5rem" } }}>
              Find your next stay
            </Typography>
            <Typography
              variant="h5"
              className="text-white"
              sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, mt: 1 }}
            >
              Search deals on hotels, homes, and much more...
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className='container'>
        <Box className="rounded-3 p-2 d-flex bg-white bg-success gap-2 justify-content-between align-items-center"
          sx={{ flexWrap: "wrap", border: "2px solid orange" }} >
          <TextField placeholder="Where are you going?" fullWidth
            sx={{ flex: 1, minWidth: "200px" }}
            InputProps={{
              startAdornment: <KingBedIcon sx={{ mr: 1 }} />,
            }} />
          <TextField
            placeholder="Check-in Date"
            fullWidth
            sx={{ flex: 1, minWidth: "200px" }}
            InputProps={{
              startAdornment: <CalendarMonthIcon sx={{ mr: 1 }} />,
            }} />
          <TextField
            select
            fullWidth
            sx={{ flex: 1, minWidth: "200px" }}
            value={children}
            onChange={handleChildrenChange}
            InputProps={{
              startAdornment: <PermIdentityIcon sx={{ mr: 1 }} />,
            }}
          >
            <MenuItem value={0}>2 adults . 0 children . 1 room</MenuItem>
            <MenuItem value={1}>1 child</MenuItem>
            <MenuItem value={2}>2 children</MenuItem>
            <MenuItem value={3}>3 children</MenuItem>
          </TextField>
          <Button
            className="text-white"
            variant="contained"
            sx={{
              backgroundColor: "#003B95",
              minWidth: "150px",
              height: "56px",
              textTransform: "none",
            }}
          >
            Search
          </Button>
        </Box>
        <Box className="text-black mt-5">
          <Typography className="fw-bold" variant="h5">
            Offers
          </Typography>
          <Typography>Promotions, deals, and special offers for you</Typography>
        </Box>
        <Card className="py-2 container mt-2">
          <Box className="d-flex justify-content-between">
            <Box>
              <Typography variant="h5">Save on stays worldwide</Typography>
              <Typography>
                Start your year with an adventure, saving 15% or more with Early
                2025 Deals.
              </Typography>
              <Button
                variant="contained"
                sx={{ textTransform: "none" }}
                className="mt-3"
              >
                Save 15% or more
              </Button>
            </Box>
            <Box>
              <img width={100} src={WordWide} alt="Img" />
            </Box>
          </Box>
        </Card>
        <Box sx={{ paddingBottom: "50px" }} className='mt-4'>
          <Typography className="text-black" variant="h5">
            Travel more, spend less
          </Typography>
          <Card className="py-2 container mt-2">
          <Box className="d-flex justify-content-between">
            <Box>
              <Typography variant="h5">Sign in, save money</Typography>
              <Typography>
              Save 10% or more at participating properties – just look for the blue Genius label
              </Typography>
              <Button variant="contained"
                sx={{ textTransform: "none" }}
                className="mt-3"
              >
                Sign in
              </Button> 
               <Button  variant="outlined"
                sx={{ textTransform: "none" }}
                className="mt-3 ms-2"
              >
                Register
              </Button>
            </Box>
            <Box>
              <img width={100} src={GiftImg} alt="Img" />
            </Box>
          </Box>
        </Card>
        </Box>
      </Box>
    </>
  );
};

export default HomeSection;
