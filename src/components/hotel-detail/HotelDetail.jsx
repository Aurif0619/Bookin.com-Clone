import { Box, CardContent, Button, Checkbox, Slider, Card, MenuItem, TextField, Toolbar, Typography, Chip } from '@mui/material';
import React, { useState } from 'react'
import KingBedIcon from "@mui/icons-material/KingBed";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AttractionsIcon from "@mui/icons-material/Attractions";
import { useNavigate } from "react-router";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Gulberg from '../../assets/Gulber.webp';
import Premium from '../../assets/premium.webp';
import Rose from '../../assets/Rose.webp';
import GoldCrest from '../../assets/Gold crest.webp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const HotelDetail = () => {

  const Btns = [
    { id: 1, name: "Flights", path: "/flights", icon: <FlightTakeoffIcon /> },
    {
      id: 2, name: "Car rentals", path: "/car-rentals", icon:
        <DirectionsCarIcon className="d-none d-sm-block" />
    },
    { id: 3, name: "Attraction", icon: <AttractionsIcon /> },
    { id: 4, name: "Airport taxis", icon: <LocalTaxiIcon /> }
  ];

  const CityBtn = [{
    name: 'Home', icon: <ChevronRightIcon />
  },
  { name: 'Pakistan', icon: <ChevronRightIcon /> },
  { name: 'Punjab', icon: <ChevronRightIcon /> },
  { name: 'Lahore', icon: <ChevronRightIcon /> },
  { name: 'Search result' }
  ]

  const hotelData = [
    {
      id: 1,
      name: 'Gulberg Inn Hotel Lahore',
      rating: 8.0,
      image: Gulberg,
      location: 'Gulberg, Lahore • 7.4 km from downtown',
      deal: 'Early 2025 Deal',
      roomType: 'Deluxe Double Room • 1 queen bed',
      breakfast: true,
      cancellation: 'Free cancellation • No prepayment needed',
      oldPrice: 'PKR 23,973',
      newPrice: 'PKR 17,980',
      taxes: '+ PKR 2,877 taxes and fees',
    },
    {
      id: 2,
      name: 'Hotel Pearl Continental Karachi',
      rating: 9.2,
      location: 'Karachi • 2.3 km from downtown',
      deal: 'Special Discount',
      roomType: 'Executive Room • 1 king bed',
      breakfast: false,
      cancellation: 'No prepayment needed',
      oldPrice: 'PKR 35,000',
      newPrice: 'PKR 28,000',
      taxes: '+ PKR 4,000 taxes and fees',
      image: Premium
    },
    {
      id: 3,
      name: 'Serena Hotel Islamabad',
      rating: 8.8,
      location: 'Islamabad • 5.0 km from downtown',
      deal: 'Seasonal Offer',
      roomType: 'Luxury Suite • 2 queen beds',
      breakfast: true,
      cancellation: 'Free cancellation',
      oldPrice: 'PKR 50,000',
      newPrice: 'PKR 42,000',
      taxes: '+ PKR 6,000 taxes and fees',
      image: Rose
    },
    {
      id: 4,
      name: 'Avari Hotel Lahore',
      rating: 7.9,
      location: 'Mall Road, Lahore • 10.2 km from downtown',
      deal: 'Limited Time Offer',
      roomType: 'Deluxe Room • 1 double bed',
      breakfast: true,
      cancellation: 'Free cancellation',
      oldPrice: 'PKR 18,500',
      newPrice: 'PKR 15,500',
      taxes: '+ PKR 2,500 taxes and fees',
      image: GoldCrest,
    },
  ];
  
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const navigate = useNavigate();
  return (
    <>
      <Box component="main" className="text-white"
        sx={{ p: 2, background: "#003B95", height: "35vh", }}>
        <Toolbar />
        <Box className="container"
          sx={{ flexWrap: "wrap", justifyContent: { xs: "center", md: "flex-start" }, }}>
          <Button onClick={(() => navigate("/stays"))} className="border-white text-white rounded-5 gap-2 py-2"
            variant="outlined"
            sx={{ textTransform: "none" }}>
            <KingBedIcon className="fs-4" /> Stays
          </Button>
          {Btns.map((btn) => (
            <Button onClick={(() => navigate(btn.path))} className="text-white gap-2 ms-3"
              key={btn.id}
              sx={{ textTransform: "none" }}> {btn.icon}
              {btn.name}

            </Button>
          ))}
        </Box>
      </Box>
      <Box
        marginTop={-4}
        className="rounded-3 p-1 d-flex gap-2 container justify-content-between align-items-center"
        sx={{
          flexWrap: "wrap",
          backgroundColor: "orange",
          border: "orange",
        }}
      >
        <TextField
          placeholder="Where are you going?"
          fullWidth
          sx={{
            flex: 1,
            minWidth: "200px",
            backgroundColor: "white",
            borderRadius: "5px",
          }}
          InputProps={{
            startAdornment: <KingBedIcon sx={{ mr: 1 }} />,
          }}
        />
        <TextField className='text-black'
          placeholder="Check-in Date"
          fullWidth
          sx={{
            flex: 1,
            minWidth: "200px",
            backgroundColor: "white",
            borderRadius: "5px",
          }}
          InputProps={{
            startAdornment: <CalendarMonthIcon sx={{ mr: 1 }} />,
          }}
        />
        <TextField
          select fullWidth
          sx={{
            flex: 1,
            minWidth: "200px",
            backgroundColor: "white",
            borderRadius: "5px",
          }}
          InputProps={{
            startAdornment: <PersonOutlineIcon sx={{ mr: 1 }} />,
          }}
          value={children}
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

      <Box className='container'>
        <Box className='my-2'>
          {CityBtn.map((btn) => <Button sx={{ textTransform: 'none' }} className='text-dark'
            varian="text">{btn.name}{btn.icon}</Button>
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            gap: '20px',
          }}
        >
          <Box sx={{
            width: { xs: '100%', md: '25%' },
            border: '1px solid #ddd',
            padding: '10px',
            borderRadius: '10px',
            backgroundColor: '#f9f9f9',
          }}
          >
            <Typography variant="h6" className="fw-bold" sx={{ marginBottom: '15px' }}>
              Filter by:
            </Typography>

            <Typography variant="subtitle1" sx={{ marginBottom: '10px' }}>
              Your budget (per night):
            </Typography>
            <Slider defaultValue={[0, 30000]} max={30000} valueLabelDisplay="auto" sx={{ color: '#0071c2' }} />

            <Box sx={{ marginTop: '20px' }}>
              <Typography variant="subtitle1" sx={{ marginBottom: '10px' }}>
                Popular filters:
              </Typography>
              <Box>
                <Checkbox /> Free cancellation
              </Box>
              <Box>
                <Checkbox /> No prepayment needed
              </Box>
            </Box>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" className="text-black fw-bold" sx={{ marginBottom: '20px' }}>
              Lahore: 611 properties found
            </Typography>

            {hotelData.map((hotel) => (
              <Card
                key={hotel.id}
                sx={{
                  display: 'flex',  flexDirection: { xs: 'column', sm: 'row' },
                  borderRadius: '10px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                  overflow: 'hidden',
                  border: '1px solid #ddd',
                  marginBottom: '20px',
                }}
              >
                <Box
                  sx={{
                    width: { xs: '100%', sm: '30%' },
                    position: 'relative',
                  }}
                >
                  <img src={hotel.image}
                    alt={hotel.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  {hotel.breakfast && (
                    <Chip
                      label="Breakfast included"
                      sx={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        backgroundColor: '#28a745',
                        color: '#fff',
                        fontWeight: 'bold',
                      }}
                    />
                  )}
                  <FavoriteBorderIcon
                    sx={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      backgroundColor: '#fff',
                      borderRadius: '50%',
                      padding: '5px',
                      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
                      color: '#0071c2',
                    }}
                  />
                </Box>

                <CardContent
                  sx={{
                    flex: 1,
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {hotel.name} ★★★★
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#0071c2',
                      }}
                    >
                      {hotel.rating}
                    </Typography>
                  </Box>

                  <Typography variant="body2" color="textSecondary">
                    {hotel.location}
                  </Typography>

                  <Typography variant="body2" sx={{ color: 'green', fontWeight: 'bold' }}>
                    {hotel.deal}
                  </Typography>

                  <Typography variant="body2">{hotel.roomType}</Typography>

                  <Box>
                    <Typography variant="body2" color="textSecondary">
                      <span style={{ color: 'green', fontWeight: 'bold' }}>
                        {hotel.breakfast ? 'Breakfast included' : ''}
                      </span>{' '}
                      {hotel.cancellation}
                    </Typography>
                  </Box>

                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    mt="auto"
                  >
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{
                          textDecoration: 'line-through',
                          fontSize: '14px',
                          color: '#888',
                        }}
                      >
                        {hotel.oldPrice}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 'bold', color: '#0071c2' }}
                      >
                        {hotel.newPrice}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {hotel.taxes}
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#0071c2',
                        color: '#fff',
                        textTransform: 'none',
                        fontWeight: 'bold',
                      }}
                    >
                      See availability
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default HotelDetail;