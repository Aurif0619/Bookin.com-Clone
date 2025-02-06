import { Box, Button, Toolbar, Typography, TextField, MenuItem, Card, Grid, CardContent, CardMedia, Chip, ListItem, List } from "@mui/material";
import React, { useState } from "react";
import KingBedIcon from "@mui/icons-material/KingBed";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AddIcon from '@mui/icons-material/Add';
import AttractionsIcon from "@mui/icons-material/Attractions";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GiftImg from '../../assets/giftImg.png';
import USAflag from '../../assets/AmericaFlag.png'
import OpenTable from '../../assets/OpenTable.png';
import ContactSupport from '../../assets/contact.png';
import Cancellation from '../../assets/cancellation.png';
import Reviews from '../../assets/reviews.png';
import { useNavigate } from "react-router";

const HomeSection = () => {
  const Btns = [
    { id: 1, name: "Flights", path: "/flights", icon: <FlightTakeoffIcon /> },
    { id: 2, name: "Car rentals", path: "/car-rentals", icon: <DirectionsCarIcon className="d-none d-sm-block" /> },
    { id: 3, name: "Attraction", icon: <AttractionsIcon /> },
    { id: 4, name: "Airport taxis", icon: <LocalTaxiIcon /> }
  ];


  const FooterBtns = [
    { id: 1, name: "International cities" },
    { id: 2, name: "Regions" },
    { id: 3, name: "Countries" },
    { id: 4, name: "Place to stay" },
  ]

  const IslamabadItems = [
    { id: 1, name: "Islamabad hotels" },
    { id: 2, name: "Rawalpindi hotels" },
    { id: 3, name: "Peshawar hotels" },
    { id: 4, name: "Hunza Valley hotels" },
    { id: 5, name: "Bahria Town hotels" }
  ]

  const LahoreItems = [
    { id: 1, name: "Lahore hotels" },
    { id: 2, name: "Multan hotels" },
    { id: 3, name: "Skardu hotels" },
    { id: 4, name: "Hyderabad hotels" },
    { id: 5, name: "Ayubia hotels" },
  ]
  const KarachiItems = [
    { id: 1, name: "Karachi hotels" },
    { id: 2, name: "Faisalabad hotels" },
    { id: 3, name: "Gujrānwāla hotels" },
    { id: 4, name: "Malam Jabba hotels" },
    { id: 5, name: "Bahawalpur hotels" }
  ]
  const MurreeItems = [
    { id: 1, name: "Murree hotels" },
    { id: 2, name: "Kalām hotels" },
    { id: 3, name: "Swat hotels" },
    { id: 4, name: "Muzaffarabad hotels" },
    { id: 5, name: " Sialkot hotels" },
  ]

  const NathiaItems = [
    { id: 1, name: "Nathia Gali hotels" },
    { id: 2, name: "Naran hotels" },
    { id: 3, name: "Abbottabad hotels" },
    { id: 4, name: "Bhurban hotels" },
    { id: 5, name: "Mingora hotels" },
  ]

  const categories = [
    "Countries", "Regions", "Cities", "Districts", "Airports", "Hotels",
    "Places of interest", "Vacation Homes", "Apartments", "Resorts",
    "Villas", "Hostels", "B&Bs", "Guest Houses", "Unique places to stay",
    "All destinations", "All flight destinations", "All car rental locations",
    "All vacation destinations", "Guides", "Discover", "Reviews", "Discover monthly stays"
  ];


  const Support = [
    { name: "Coronavirus (COVID-19) FAQs" },
    { name: "Manage your trips" },
    { name: "Contact Customer Service" },
    { name: "Hunza Valley hotels" },
    { name: "Safety Resource Center" }
  ]

  const Discover = [
    { name: "Genius loyalty program" },
    { name: "Seasonal and holiday deals" },
    { name: "Travel articles" },
    { name: "Booking.com for Business" },
    { name: "Traveller Review Awards" },
    { name: "Car rental" },
    { name: "Flight finder" },
    { name: "Restaurant reservations" },
    { name: "Booking.com for Travel Agents" }
  ]

  const Terms = [
    { name: "Privacy & cookies" },
    { name: "Terms & conditions" },
    { name: "Partner dispute" },
    { name: "Modern Slavery Statement" },
    { name: "Human Rights Statement" }
  ]

  const Partners = [
    { name: "Extranet login" },
    { name: "Partner help" },
    { name: "List your property" },
    { name: "Become an affiliate" },
  ]

  const About = [
    { name: "About Booking.com" },
    { name: "How We Work" },
    { name: "Sustainability" },
    { name: "Press center" },
    { name: "Careers" },
    { name: "Investor relations" },
    { name: "Corporate contact" },
  ]

  const CustomerSupport = [
    {
      title: "We’re here for you", Image: ContactSupport,
      description: "Customer support in over 30 languages",
    },
    {
      title: "Free cancellation", Image: Cancellation,
      description: "Up to 48 hours before pick-up for most bookings",
    },
    {
      title: "5 million+ reviews", Image: Reviews,
      description: "By real, verified customers",
    },
  ];

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const navigate = useNavigate();
  return (
    <>
      <Box component="main" className="text-white"
        sx={{ p: 2, background: "#003B95", height: "62vh", }}>
        <Toolbar />
        <Box className="container"
          sx={{ flexWrap: "wrap", justifyContent: { xs: "center", md: "flex-start" }, }}>
          <Button className="border-white text-white rounded-5 gap-2 py-2"
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

          <Box sx={{ background: "#003B95", padding: "20px 0" }} className='mt-5'>
            <Typography
              variant="h1" className="text-white fs-1 fw-bold"
              sx={{ fontSize: { xs: "1.5rem", md: "2.5rem" } }}>
              Car rentals for any kind of trip
            </Typography>
            <Typography variant="h5" className="text-white"
              sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, mt: 1 }}
            >
              Great cars at great prices from the biggest rental companies
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box >
        <Box
          marginTop={-4}
          className="rounded-3 p-1 d-flex gap-1 container justify-content-between align-items-center"
          sx={{
            flexWrap: "wrap",
            backgroundColor: "orange",
            border: "2px solid orange",
            borderRadius: "8px",
          }} >
          <TextField
            placeholder="Pick-up location"
            sx={{
              flex: 1,
              width: "calc(20%)",
              backgroundColor: "white",
              borderRadius: "8px",
            }}
            InputProps={{
              startAdornment: <KingBedIcon sx={{ mr: 1 }} />,
            }}
          />
          <TextField
            placeholder="Pick-up date"
            sx={{
              width: "calc(12%)",
              backgroundColor: "white",
              borderRadius: "8px",
            }}
            InputProps={{
              startAdornment: <CalendarMonthIcon sx={{ mr: 1 }} />,
            }}
          />

          <TextField
            placeholder="Time"
            sx={{
              width: "calc(12%)",
              backgroundColor: "white",
              borderRadius: "8px",
            }}
            InputProps={{
              startAdornment: <AccessTimeIcon sx={{ mr: 1 }} />,
            }}
          />

          <TextField
            placeholder="Drop-off date" sx={{
              width: "calc(12%)", backgroundColor: "white",
              borderRadius: "8px",
            }}
            InputProps={{
              startAdornment: <CalendarMonthIcon sx={{ mr: 1 }} />,
            }}
          />
          <TextField
            placeholder="Time"
            sx={{
              width: "calc(12%)",
              backgroundColor: "white",
              borderRadius: "8px",
            }}
            InputProps={{
              startAdornment: <AccessTimeIcon sx={{ mr: 1 }} />,
            }}
          />

          <TextField
            select
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            sx={{
              width: "calc(12%)",
              backgroundColor: "white",
              borderRadius: "8px",
            }}
            InputProps={{
              startAdornment: <PersonOutlineIcon sx={{ mr: 1 }} />,
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
              width: "100px",
              height: "56px",
              textTransform: "none",
              borderRadius: "8px",
            }}
          >
            Search
          </Button>
        </Box>
        <Box sx={{ paddingBottom: "50px" }} className='mt-4 container'>
          <Typography className="text-black my-4 fw-bolder fs-2" variant="body2">
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
                <Button variant="outlined"
                  sx={{ textTransform: "none" }}
                  className="mt-3 ms-2"
                > Register
                </Button>
              </Box>
              <Box><img width={100} src={GiftImg} alt="Img" /></Box>
            </Box>
          </Card>
        </Box>
        <Box className="bg-body-tertiary py-4">
          <Box className="container">
            <Box className="d-flex justify-content-between gap-3 flex-wrap">
              {CustomerSupport.map((item, index) => (
                <Box
                  key={index}
                  className="d-flex align-items-center p-3"
                  sx={{
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    minWidth: "280px", // Ensure proper width on smaller screens
                    flex: "1 1 30%",  // Allow wrapping with even spacing
                  }}
                >
                  <Box sx={{ marginRight: "16px" }}>
                    <CardMedia
                      component="img"
                      image={item.Image}
                      alt={item.title}
                      sx={{
                        width: "50px",
                        height: "50px",
                        objectFit: "contain",
                        borderRadius: "50%", // Circle for the image
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography fontWeight="bold" fontSize="16px" sx={{ marginBottom: "4px" }}>
                      {item.title}
                    </Typography>
                    <Typography fontSize="14px" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box className="d-flex justify-content-center">
          <Grid>
            <Grid container spacing={3} className="my-4">
              <Grid item xs={6} sm={6} md={2.4}>
                <Box>
                  {IslamabadItems.map((item, index) => (
                    <Typography key={index} className="py-1 ms-3">
                      {item.name}
                    </Typography>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={6} sm={6} md={2.4}>
                <Box>
                  {LahoreItems.map((item, index) => (
                    <Typography key={index} className="py-1">
                      {item.name} </Typography>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={6} sm={6} md={2.4}>
                <Box>
                  {KarachiItems.map((item, index) => (
                    <Typography key={index} className="py-1 ms">
                      {item.name} </Typography>))}
                </Box>
              </Grid>

              <Grid item xs={6} sm={6} md={2.4}>
                <Box>
                  {MurreeItems.map((item, index) => (
                    <Typography key={index} className="py-1">
                      {item.name} </Typography>))}
                </Box>
              </Grid>

              <Grid item xs={6} sm={6} md={2.4}>
                <Box className='d-none d-md-block'>
                  {NathiaItems.map((item, index) => (
                    <Typography key={index} className="py-1">
                      {item.name}
                    </Typography>
                  ))}
                </Box>
              </Grid>
              <Button variant="text" sx={{ textTransform: 'none' }}> <AddIcon /> Show More </Button>
            </Grid>
            <Box className='d-flex'>
              <Grid sx={12} sm={6} md={3} lg={8}>
                <Box className='d-none d-md-block'>
                  <Typography className="container me-4 text-dark"
                    sx={{
                      px: 2,
                      textTransform: 'none',
                      whiteSpace: "nowrap",
                    }} >
                    Countries . Regions . Cities . Districts Airports . Hotels . Places of interest .  Vacation Homes . Apartments . Resorts .
                    Villas . Hostels .  B&Bs . Guest Houses . Unique places to stay . <br /> All destinations . All flight destinations . All car rental locations . All vacation destinations . Guides . Discover .  Reviews .
                    Discover monthly stays
                  </Typography>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ background: '#F5F5F5' }} container>
        <Grid container spacing={3} className="my-4">
          <Grid item xs={6} sm={6} md={2.4}>
            <Box className='ms-3 ps-4'>
              <Typography className="fw-bold ms-5 ps-4" variant="body1">Support</Typography>
              {Support.map((item, index) => (
                <Typography key={index} className="py-1 ms-5 ps-4">
                  {item.name}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={2.4}>
            <Box className='ms-4'>
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
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={2.4}>
            <Box className='ms-5'>
              <Typography variant="body1" className="fw-bold">Partners</Typography>
              {Partners.map((item, index) => (
                <Typography key={index} className="py-1">
                  {item.name}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={2.4}>
            <Box className='d-none d-md-block'>
              <Typography variant="body1" className="fw-bold">About</Typography>
              {About.map((item, index) => (
                <Typography key={index} className="py-1">
                  {item.name}
                </Typography>
              ))}
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
          <Typography className="text-primary"> Booking.com </Typography>
          <Typography className="mx-3 text-info"> Priceline </Typography>
          <Typography> K A Y A K </Typography>
          <img src={OpenTable} alt="Img" />
        </Box>
      </Box>

    </>
  );
};

export default HomeSection;
