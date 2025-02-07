import { Box, CardContent, Button, Checkbox, Card, MenuItem, TextField, Toolbar, Typography, Chip, Divider } from '@mui/material';
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
import GoldCrest from '../../assets/Gold crest.webp'
import GiftImg from '../../assets/giftImg.png';
// import Pakeeza from '../../assets/pa'
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
      image: Gulberg,
      rating: 8.0,
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
      name: 'Premium Signature Luxurious',
      image: Premium,
      rating: 9.2,
      location: 'Karachi • 2.3 km from downtown',
      deal: 'Special Discount',
      roomType: 'Executive Room • 1 king bed',
      breakfast: true,
      cancellation: 'No prepayment needed',
      oldPrice: 'PKR 105,000',
      newPrice: 'PKR 63,000',
      taxes: '+ PKR 4,000 taxes and fees',
    },
    {
      id: 3,
      name: ' Rose Palace Hotel, Gulberg',
      image: Rose,
      rating: 8.8,
      location: 'Islamabad • 5.0 km from downtown',
      deal: 'Seasonal Offer',
      roomType: 'Luxury Suite • 2 queen beds',
      breakfast: true,
      cancellation: 'Free cancellation',
      oldPrice: 'PKR 37,350',
      newPrice: 'PKR 22,410',
      taxes: '+ PKR 3,586 taxes and fees',
    },
    {
      id: 4,
      name: 'Hotel Grand PakeezaOpens in new window',
      image: GoldCrest,
      rating: 8.3,
      location: 'Mall Road, Lahore • 10.2 km from downtown',
      deal: 'Limited Time Offer',
      roomType: 'Deluxe Room • 1 double bed',
      breakfast: true,
      cancellation: 'Free cancellation',
      oldPrice: 'PKR 18,500',
      newPrice: 'PKR 10,347',
      taxes: '+ PKR 1,656 taxes and fees',
    },
  ];

  const filters = [
    {
      category: "Facilities",
      options: [
        { label: "Parking", count: 585 },
        { label: "Restaurant", count: 127 },
        { label: "Pet friendly", count: 171 },
        { label: "Room service", count: 261 },
        { label: "24-hour front desk", count: 244 },
        { label: "Show all 14", count: "" },
      ],
    },
    {
      category: "Property Type",
      options: [
        { label: "Entire homes & apartments", count: 346 },
        { label: "Apartments", count: 312 },
        { label: "Hotels", count: 208 },
        { label: "Guesthouses", count: 40 },
        { label: "Homestays", count: 17 },
        { label: "Show all 14", count: "" },
      ],
    },
    {
      category: "Property Rating",
      options: [
        { label: "1 star", count: 1 },
        { label: "2 stars", count: 23 },
        { label: "3 stars", count: 160 },
        { label: "4 stars", count: 58 },
        { label: "5 stars", count: 11 },
      ],
    },
    {
      category: "Bed Preference",
      options: [
        { label: "Twin beds", count: 134 },
        { label: "Double bed", count: 592 },
      ],
    },
    {
      category: "Room Facilities",
      options: [
        { label: "Sea view", count: 3 },
        { label: "Private bathroom", count: 438 },
        { label: "Air conditioning", count: 571 },
        { label: "Balcony", count: 331 },
        { label: "Kitchen/Kitchenette", count: 371 },
        { label: "Show all 25", count: "" },
      ],
    },
    {
      category: "Review Score",
      options: [
        { label: "Wonderful: 9+", count: 83 },
        { label: "Very Good: 8+", count: 150 },
        { label: "Good: 7+", count: 222 },
        { label: "Pleasant: 6+", count: 255 },
      ],
    },
    {
      category: "Neighborhood",
      options: [
        { label: "Johar Town", count: 76 },
        { label: "Gulberg", count: 28 },
        { label: "Wapda Town", count: 2 },
        { label: "Mall Road", count: 2 },
        { label: "M.M. Allam Road", count: 2 },
        { label: "Model Town", count: 1 },
        { label: "Township", count: 1 },
      ],
    },
    {
      category: "Reservation Policy",
      options: [
        { label: "Free cancellation", count: 150 },
        { label: "Book without credit card", count: 490 },
        { label: "No prepayment", count: 528 },
      ],
    },
    {
      category: "Distance from Center of Lahore",
      options: [
        { label: "Less than 1 km", count: 15 },
        { label: "Less than 3 km", count: 38 },
        { label: "Less than 5 km", count: 73 },
      ],
    },
    {
      category: "Fun Things To Do",
      options: [
        { label: "Fitness center", count: 42 },
        { label: "Fitness", count: 36 },
        { label: "Hot tub/Jacuzzi", count: 35 },
        { label: "Walking tours", count: 34 },
        { label: "Playground", count: "41" },
        { label: "walking tours", count: "41" },
      ],
    },
    {
      category: "Landmarks",
      options: [
        { label: "Badshahi Mosque", count: 5 },
        { label: "Lahore", count: 4},
      ],
    },
    {
      category: "Entire places",
      options: [
        { label: "Entire homes & apartments", count: 815 },
      ],
    },
    {
      category: "Brands",
      options: [
        { label: "Ramada", count: 1 },
        { label: "Best Western Premier", count: 36 },
        { label: "Hot tub/Jacuzzi", count: 35 },
        { label: "Walking tours", count: 34 },
        { label: "Playground", count: "41" },
        { label: "walking tours", count: "41" },
      ],
    },
  ];

  const SecondHotelData = [
    {
      id: 1,
      name: 'Hotel Grand PakeezaOpens in new window',
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
      name: 'Park View Hotel GulbergOpens in new window',
      rating: 9.2,
      image: Premium,
      location: 'Karachi • 2.3 km from downtown',
      deal: 'Special Discount',
      roomType: 'Executive Room • 1 king bed',
      breakfast: true,
      cancellation: 'No prepayment needed',
      oldPrice: 'PKR 105,000',
      newPrice: 'PKR 63,000',
      taxes: '+ PKR 4,000 taxes and fees',
    },
    {
      id: 3,
      name: 'Lahore Continental HotelOpens in new window',
      image: Rose,
      rating: 8.8,
      location: 'Islamabad • 5.0 km from downtown',
      deal: 'Seasonal Offer',
      roomType: 'Luxury Suite • 2 queen beds',
      breakfast: true,
      cancellation: 'Free cancellation',
      oldPrice: 'PKR 37,350',
      newPrice: 'PKR 22,410',
      taxes: '+ PKR 3,586 taxes and fees',
    }]

  const [children] = useState(0);

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
        className="rounded-3 p-1 d-flex gap-2 container
         justify-content-between align-items-center"
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
          value={children} >
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
            display: 'flex', gap: '10px',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          }} >
          <Box
            sx={{
              width: { xs: "100%", md: "25%" },
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "10px",
              backgroundColor: "#f9f9f9",
            }}
          >
            {filters.map((filter, index) => (
              <Box key={index} sx={{ marginBottom: "20px" }}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold" }} >
                  {filter.category}:
                </Typography>
                {filter.options.map((option, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}>
                    <Box className='d-flex align-items-center'>
                      <Checkbox className='py-2' size="small" />
                      <Typography variant="body2">{option.label}</Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ color: "#0071c2", fontWeight: "bold" }} >
                      {option.count}
                    </Typography>
                  </Box>
                ))}
                {index < filters.length - 1 && <Divider />}
              </Box>
            ))}
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box className='d-flex justify-content-between'>
              <Typography variant="h5" className="text-black fw-bold" sx={{ marginBottom: '20px' }}>
                Lahore: 611 properties found
              </Typography>
              <Box>
                <Button className='rounded-5 px-2 gap-2 ' sx={{ background: "#ddd" }}>
                  <Button className='rounded-5 bg-white text-dark px-4'>list</Button>
                  Grid
                </Button>
              </Box>
            </Box>
            {hotelData.map((hotel) => (
              <Card className='mt-2'
                key={hotel.id}
                sx={{
                  display: 'flex', flexDirection: { xs: 'column', sm: 'row' },
                  borderRadius: '10px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                  overflow: 'hidden', border: '1px solid #ddd',
                  marginBottom: '20px', color: "#0071c2"
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
            <Card className="py-2 container mt-2" sx={{ backgroundColor: '#0071c2' }}>
              <Box className="d-flex justify-content-between">
                <Box>
                  <Typography variant="h5" className='text-white'>Sign in, save money</Typography>
                  <Typography className='text-white'>
                    Save 10% or more at participating properties – just look for the blue Genius label
                  </Typography>
                  <Button variant="contained"
                    sx={{ textTransform: "none" }}
                    className="mt-3" >
                    Sign in
                  </Button>
                  <Button variant="contained"
                    sx={{ textTransform: "none" }}
                    className="mt-3 text-white ms-2"
                  > Register
                  </Button>
                </Box>
                <Box>
                  <img width={100} src={GiftImg} alt="Img" /></Box>
              </Box>
            </Card>
            {SecondHotelData.map((hotel) => (
              <Card className='mt-3'
                key={hotel.id}
                sx={{
                  display: 'flex', flexDirection: { xs: 'column', sm: 'row' },
                  borderRadius: '10px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                  overflow: 'hidden', border: '1px solid #ddd',
                  marginBottom: '20px', color: "#0071c2"
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