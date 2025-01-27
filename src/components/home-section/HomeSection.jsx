import { Box, Button, Toolbar, Typography, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";
import KingBedIcon from "@mui/icons-material/KingBed";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AttractionsIcon from "@mui/icons-material/Attractions";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

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
      <Box component="main" height={"60vh"} className="text-white" sx={{ p: 3, background: "#003B95" }}>
        <Toolbar />
        <Box className="container" sx={{ flexWrap: "wrap", justifyContent: { xs: "center", md: "flex-start" }, }} >
          <Button className="border-white text-white rounded-5 gap-2 py-2" variant="outlined" sx={{ textTransform: "none" }}>
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
          <Box className="mt-5 pt-4">
            <Typography
              variant="h2"
              className="text-white fw-bold"
              sx={{ fontSize: { xs: "1.5rem", md: "2.5rem" } }}
            >
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
          <Box className="rounded-3 p-3 mt-5 d-flex bg-white gap-2 justify-content-between align-items-center"
            sx={{
              flexWrap: "wrap",
              border: "2px solid orange",
            }}
          >
            <TextField
              placeholder="Where are you going?"
              fullWidth
              sx={{ flex: 1, minWidth: "200px" }}
              InputProps={{
                startAdornment: <KingBedIcon sx={{ mr: 1 }} />,
              }}
            />
            <TextField
              placeholder="Check-in Date"
              fullWidth
              sx={{ flex: 1, minWidth: "200px" }}
              InputProps={{
                startAdornment: <CalendarMonthIcon sx={{ mr: 1 }} />,
              }}
            />
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
          <Box >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ducimus rerum quisquam porro. Laboriosam ipsam perspiciatis minima eaque sequi modi sint temporibus aliquam id est distinctio nulla quod, quia aspernatur.</Box>
        </Box>
      </Box>
    </>
  );
};

export default HomeSection;
