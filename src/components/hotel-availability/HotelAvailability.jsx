import React, { useState } from 'react'
import { Box, Button, Card, CardMedia, Grid, MenuItem, TextField, Toolbar, Typography } from '@mui/material';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import KingBedIcon from "@mui/icons-material/KingBed";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AttractionsIcon from "@mui/icons-material/Attractions";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import AvailabilityImg1 from '../../assets/AvailabilityImg1.jpg';
import AvailabilityImg2 from '../../assets/AvailibilityImg2.jpg';
import AvailabilityImg3 from '../../assets/AvailibilityImg3.jpg';
import AvailabilityImg4 from '../../assets/AvailibilityImg4.jpg';
import AvailabilityImg5 from '../../assets/Availibility5.jpg';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AvailabilityImg6 from '../../assets/Availability6.jpg';
import FlatwareIcon from '@mui/icons-material/Flatware';
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import OpenTable from '../../assets/OpenTable.png';
import USAflag from '../../assets/AmericaFlag.png'
import GiftImg from '../../assets/giftImg.png';
import PlateImg from '../../assets/PlateImg.jpg';
import ShareIcon from '@mui/icons-material/Share';
import PlaceIcon from '@mui/icons-material/Place';
import WifiIcon from "@mui/icons-material/Wifi";
import Gulberg from '../../assets/Gulber.webp';
import HouseImg from '../../assets/house.jpg';
import KAYAKImg from '../../assets/KAYAK.png';
import Agoda from '../../assets/agoda.png';
import Booking from '../../assets/Booking.png';
import Priceline from '../../assets/Priceline.png';
import { useNavigate } from "react-router";


const HotelAvailability = () => {

  const Btns = [
    { id: 1, name: "Flight", path: "/flights", icon: <FlightTakeoffIcon /> },
    {
      id: 2, name: "Car rentals", path: "/car-rentals", icon:
        <DirectionsCarIcon className="d-none d-sm-block" />
    },
    { id: 3, name: "Attraction", icon: <AttractionsIcon /> },
    { id: 4, name: "Airport taxis", icon: <LocalTaxiIcon /> }
  ];

  const PopularBtns = [
    { id: 1, name: "Free Wifi", icon: <WifiIcon /> },
    {
      id: 2, name: "Free parking", icon: <FavoriteBorderIcon />
    },
    { id: 3, name: "Family rooms", icon: <FamilyRestroomIcon /> },
    { id: 4, name: "Restaurant", icon: <FlatwareIcon /> },
    { id: 5, name: "Room service", icon: <BabyChangingStationIcon /> }
  ];


  const Support = [
    { name: "Coronavirus (COVID-19) FAQs" }, { name: "Manage your trips" },
    { name: "Contact Customer Service" }, { name: "Hunza Valley hotels" },
    { name: "Safety Resource Center" }
  ]

  const Discover = [
    { name: "Genius loyalty program" }, { name: "Seasonal and holiday deals" },
    { name: "Travel articles" }, { name: "Booking.com for Business" },
    { name: "Traveller Review Awards" }, { name: "Car rental" },
    { name: "Flight finder" }
  ]

  const Terms = [
    { name: "Privacy & cookies" }, { name: "Terms & conditions" },
    { name: "Partner dispute" }, { name: "Modern Slavery Statement" },
    { name: "Human Rights Statement" }
  ]

  const Partners = [
    { name: "Extranet login" }, { name: "Partner help" },
    { name: "List your property" }, { name: "Become an affiliate" },
  ]

  const About = [
    { name: "About Booking.com" }, { name: "How We Work" },
    { name: "Sustainability" }, { name: "Press center" },
    { name: "Careers" }, { name: "Investor relations" },
    { name: "Corporate contact" },
  ]

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
          flexWrap: "wrap", backgroundColor: "orange",
          border: "orange",
        }}>
        <TextField
          placeholder="Where are you going?" fullWidth
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
          type='date'
          fullWidth
          sx={{
            flex: 1, minWidth: "200px",
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
            flex: 1, minWidth: "200px",
            backgroundColor: "white", borderRadius: "5px",
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
            minWidth: "150px", height: "56px",
            textTransform: "none",
          }}>
          Search
        </Button>
      </Box>

      <Box className="container">
        <Box className="my-2 d-flex align-items-center text-center">
          <Button sx={{ textTransform: "none" }} className="text-primary" variant="text">
            City Deals
          </Button>
          <Typography variant="body2">
            Gulberg Inn Hotel Lahore (Hotel) (Pakistan) Deals
          </Typography>
        </Box>

        <Box className="container my-4">
          <Box className="d-flex align-items-center text-center justify-content-between mb-3">
            <Typography variant="h5" className="fw-bold text-primary">
              Gulberg Inn Hotel Lahore
            </Typography>
            <Box>
              <FavoriteBorderIcon />
              <ShareIcon className="mx-4" />
              <Button variant="contained" color="primary">
                Reserve
              </Button>
            </Box>
          </Box>

          <Typography variant="body1" className="text-secondary">
            <LocationOnIcon fontSize="small" /> 239, A/3 Gurumangat Road, Block A3 Gulberg III, Lahore, Pakistan
          </Typography>

          <Box className="container my-4">
            <Box className="row">
              <Box className="col-md-6">
                <Card>
                  <CardMedia component="img" height="300" image={Gulberg} alt="Hotel Room" />
                </Card>
              </Box>

              <Card className="col-md-6 d-flex px-3 flex-wrap gap-2">
                <Box className="d-flex justify-content-between w-100">
                  <Box className="d-flex gap-2">
                    <Box className="col-6">
                      <CardMedia component="img" height="160" image={HouseImg} alt="Room Image" />
                    </Box>
                    <Box className="col-6">
                      <CardMedia component="img" height="160" image={PlateImg} alt="Room Image" />
                    </Box>
                  </Box>

                  <Box>
                    <Typography variant="h6" className="fw-bold">
                      Rating: 7.9
                    </Typography>
                    <Typography variant="body2" className="text-success d-flex justify-content-center mt-4">
                      <WifiIcon fontSize="small" /> Free Wifi 9.2
                    </Typography>
                  </Box>
                </Box>

                <Box className="col-12">
                  <Typography variant="body2" className="px-3 pb-2">
                    Guests who stayed here loved: <br />
                    “Net and Clean new Furnish hotel. Friendly and respectful staff like family,
                    and especially reception Guy Sir Mr. Kashif—helpful bundles of thanks...” <br />
                    <strong>Muhammad, United Arab Emirates</strong>
                  </Typography>
                </Box>
              </Card>
              <Box className='d-flex gap-2 my-2'>
                <Typography>
                  <CardMedia component="img" sx={{ width: '180px' }} className='rounded-2 h-75' image={AvailabilityImg1} alt="Room Image" />
                </Typography>
                <Typography>
                  <CardMedia component="img" sx={{ width: '180px' }} className='rounded-2 h-75' image={AvailabilityImg2} alt="Room Image" />
                </Typography>
                <Typography>
                  <CardMedia component="img" sx={{ width: '180px' }} className='rounded-2 h-75' image={AvailabilityImg3} alt="Room Image" />
                </Typography>
                <Typography>
                  <CardMedia component="img" sx={{ width: '180px' }} className='rounded-2 h-75' image={AvailabilityImg4} alt="Room Image" />
                </Typography>
                <Typography>
                  <CardMedia component="img" sx={{ width: '180px' }} className='rounded-2 h-75' image={AvailabilityImg5} alt="Room Image" />
                </Typography>
                <Typography>
                  <CardMedia component="img" sx={{ width: '180px' }} className='rounded-2 h-75' image={AvailabilityImg6} alt="Room Image" />
                </Typography>
              </Box>
              <Box
                className="d-flex flex-column flex-md-row gap-4 my-3"
                sx={{ justifyContent: "space-between" }}>
                <Box sx={{ flex: 1, minWidth: "300px" }}>
                  <Typography>
                    You might be eligible for a Genius discount at Gulberg Inn Hotel Lahore.
                    Sign in to check if a Genius discount is available for your selected
                    dates.
                  </Typography>
                  <Typography>
                    Genius discounts at this property are subject to booking dates, stay
                    dates, and other available deals.
                  </Typography>
                  <Typography className="my-2">
                    Located in Lahore, 18 miles from Wagah Border, Gulberg Inn Hotel Lahore
                    provides accommodations with a garden, free private parking, a shared
                    lounge and a terrace. With a restaurant, the 3-star hotel has
                    air-conditioned rooms with free WiFi, each with a private bathroom. The
                    property has room service, a 24-hour front desk and currency exchange for
                    guests.
                  </Typography>
                  <Typography className="my-2">
                    All guest rooms at the hotel are equipped with a seating area and a
                    flat-screen TV with satellite channels. Guest rooms feature a closet.
                  </Typography>
                  <Typography className="my-2">
                    A continental, Asian or halal breakfast is available at the property.
                  </Typography>
                  <Typography className="my-2">
                    Gaddafi Stadium is 2 miles from Gulberg Inn Hotel Lahore, while Nairang
                    Galleries is 3.4 miles away. Allama Iqbal International Airport is 4.3
                    miles from the property.
                  </Typography>
                  <Typography className="my-2">
                    Distance in property description is calculated using © OpenStreetMap
                  </Typography>
                  <Typography className="fw-bold">Most popular facilities</Typography>
                  <Box className="d-flex flex-wrap gap-2 my-3">
                    {PopularBtns.map((btn) => (
                      <Button sx={{ textTransform: 'none' }} key={btn.id} className="d-flex text-black align-items-center gap-1">
                        {btn.icon} {btn.name}
                      </Button>
                    ))}
                  </Box>
                </Box>

                <Box sx={{ flex: 1, minWidth: "300px" }}>
                  <Card className="px-4 py-4" sx={{ background: "#EBF3FF" }}>
                    <Typography className="fw-bold text-black">Property highlights</Typography>
                    <Typography variant="body1">
                      <PlaceIcon />
                      Top Location: Highly rated by recent guests (8.4)
                    </Typography>
                    <Typography className="fw-bold text-black">Breakfast Info</Typography>
                    <Typography className="body1">
                      <FavoriteBorderIcon />
                      Free private parking available at the hotel
                    </Typography>
                    <Button className="mt-3" variant="contained" color="primary">
                      Reserve
                    </Button>
                  </Card>
                </Box>
              </Box>
            </Box>
            <Card className="py-2 container mt-2" sx={{ backgroundColor: '#0071c2' }}>
              <Box className="d-flex justify-content-between">
                <Box><Typography variant="h5">Sign in, save money</Typography>
                  <Typography>
                    Save 10% or more at participating properties – just look for the blue Genius label
                  </Typography>
                  <Button variant="contained"
                    sx={{ textTransform: "none" }}
                    className="mt-3"> Sign in
                  </Button>
                  <Button variant="outlined"
                    sx={{ textTransform: "none" }}
                    className="mt-3 ms-2"> Register
                  </Button>
                </Box><Box>
                  <img width={100} src={GiftImg} alt="Img" />
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
      <Box sx={{ background: '#F5F5F5' }} container>
        <Grid container spacing={3} className="my-4">
          <Grid item xs={6} sm={6} md={2.4}>
            <Box className='ms-3 ps-4 d-none d-md-block'>
              <Typography className="fw-bold ms-5 ps-4" variant="body1">Support</Typography>
              {Support.map((item, index) => (
                <Typography key={index} className="py-1 ms-5 ps-4">
                  {item.name}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={2.4}>
            <Box className='ms-4 d-none d-md-block'>
              <Typography variant="body1" className="fw-bold" >Discover</Typography>
              {Discover.map((item, index) => (
                <Typography key={index} className="py-1">
                  {item.name}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={2.4}>
            <Box className='ms-3'>
              <Typography variant="body1" className="fw-bold ms-3">Terms and settings</Typography>
              {Terms.map((item, index) => (
                <Typography key={index} className="py-1 ms-4">
                  {item.name}
                </Typography>))}
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={2.4}>
            <Box className='ms-5'>
              <Typography variant="body1" className="fw-bold">Partners</Typography>
              {Partners.map((item, index) => (
                <Typography key={index} className="py-1">
                  {item.name}
                </Typography>))}
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={2.4}>
            <Box className='d-none d-md-block'>
              <Typography variant="body1" className="fw-bold">About</Typography>
              {About.map((item, index) => (
                <Typography key={index} className="py-1">
                  {item.name}</Typography>))}
            </Box>
          </Grid>
        </Grid>

        <Box className='py-3 ms-5 ps-5'>
          <Button> <img className="rounded-5" src={USAflag}
            alt="USA Flag" style={{ width: "25px", height: "25px" }} />
          </Button>
          <Button variant="text" className="text-black"> PKR </Button>
        </Box>
        <Typography className="pb-5 d-flex text-center justify-content-center align-items-center">
          Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services. <br />
          Copyright © 1996–2025 Booking.com™. All rights reserved.
        </Typography>
        <Box className='container d-flex justify-content-center align-items-center pb-5'>
          <Typography className="text-primary"><img src={Booking} alt="img" /></Typography>
          <Typography className="mx-3 text-info"><img src={Priceline} alt="img" /></Typography>
          <Typography><img src={KAYAKImg} alt="img" /></Typography>
          <Typography><img src={Agoda} alt="img" /></Typography>
          <img src={OpenTable} alt="img" />
        </Box>
      </Box>
    </>
  )
}

export default HotelAvailability