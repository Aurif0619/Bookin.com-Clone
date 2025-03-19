import { Box, Button, Card, CardMedia, Grid, MenuItem, TextField, Toolbar, Typography } from '@mui/material';
import KingBedIcon from "@mui/icons-material/KingBed";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AttractionsIcon from "@mui/icons-material/Attractions";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import ShareIcon from '@mui/icons-material/Share';
import OpenTable from '../../assets/OpenTable.png';
import USAflag from '../../assets/AmericaFlag.png';
import KAYAKImg from '../../assets/KAYAK.png';
import Agoda from '../../assets/agoda.png';
import Booking from '../../assets/Booking.png';
import Priceline from '../../assets/Priceline.png';
import { useLocation, useNavigate } from "react-router";

const HotelAvailibility = () => {
  const Btns = [
    { id: 1, name: "Flight", path: "/flights", icon: <FlightTakeoffIcon /> },
    { id: 2, name: "Car rentals", path: "/car-rentals", icon: <DirectionsCarIcon className="d-none d-sm-block" /> },
    { id: 3, name: "Attraction", icon: <AttractionsIcon /> },
    { id: 4, name: "Airport taxis", icon: <LocalTaxiIcon /> }
  ];

  const Support = [
    { name: "Coronavirus" }, { name: "Manage your trips" },
    { name: "Contact Customer Service" }, { name: "Hunza Valley hotels" },
    { name: "Safety Resource" }
  ];

  const Discover = [
    { name: "Genius loyalty program" }, { name: "Seasonal and holiday deals" },
    { name: "Travel articles" }, { name: "Booking.com for Business" },
    { name: "Traveller Review Awards" }, { name: "Car rental" },
    { name: "Flight finder" }
  ];

  const Terms = [
    { name: "Privacy & cookies" }, { name: "Terms & conditions" },
    { name: "Partner dispute" }, { name: "Modern Slavery Statement" },
    { name: "Human Rights Statement" }
  ];

  const Partners = [
    { name: "Extradite login" }, { name: "Partner help" },
    { name: "List your property" }, { name: "Become an affiliate" },
  ];

  const About = [
    { name: "About Booking.com" }, { name: "How We Work" },
    { name: "Sustainability" }, { name: "Press center" },
    { name: "Careers" }, { name: "Investor relations" },
    { name: "Corporate contact" },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const hotel = location.state?.hotel;

  if (!hotel) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="h6" sx={{ textAlign: 'center', }}>No hotel data found. Please go back and select a hotel.</Typography>
      </Box>
    );
  }

  return (
    <>
      <Box component="main" className="text-white" sx={{ p: 2, background: "#003B95", height: { xs: "auto", md: "35vh" } }}>
        <Toolbar />
        <Box className="container" sx={{ display: 'flex', flexWrap: "wrap", justifyContent: { xs: "center", md: "flex-start" }, gap: 2 }}>
          <Button onClick={() => navigate("/stays")} className="border-white text-white rounded-5 gap-2 py-2"
            variant="outlined" sx={{ textTransform: "none" }}>
            <KingBedIcon className="fs-4" /> Stays
          </Button>
          {Btns.map((btn) => (
            <Button onClick={() => navigate(btn.path)} className="text-white gap-2" key={btn.id}
              sx={{ textTransform: "none" }}>
              {btn.icon} {btn.name}
            </Button>
          ))}
        </Box>
      </Box>

      <Box marginTop={-4}
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
          }}>
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
            {hotel.name} (Hotel) (Pakistan) Deals
          </Typography>
        </Box>

        <Box className="container my-4">
          <Box className="d-flex align-items-center text-center justify-content-between mb-3">
            <Typography variant="h5" className="fw-bold text-primary">
              {hotel.name}
            </Typography>
            <Box >
              <FavoriteBorderIcon />
              <ShareIcon className="mx-4" />
              <Button variant="contained" color="primary">
                Reserve
              </Button>
            </Box>
          </Box>

          <Typography variant="body1" className="text-secondary">
            <LocationOnIcon fontSize="small" /> {hotel.location}
          </Typography>

          <Box sx={{ marginTop: 4, marginBottom: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
              <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                <Card>
                  <CardMedia component="img" height="300" image={hotel.image} alt="Hotel Room" />
                </Card>
              </Box>
              <Card sx={{ width: { xs: '100%', md: '50%' }, padding: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
                  <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                    <CardMedia component="img" height="160" image={hotel.image2} alt="Room Image" />
                  </Box>
                  <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                    <CardMedia component="img" height="160" image={hotel.image3} alt="Room Image" />
                  </Box>
                </Box>
                <Typography variant="body2" sx={{ paddingX: 1, paddingY: 2 }}>
                  {hotel.description}
                </Typography>
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* footer section */}
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
            <Box className='d-none d-md-block'>
              <Typography variant="body1" className="fw-bold ms-3">Discover</Typography>
              {Discover.map((item, index) => (
                <Typography key={index} className="py-1 ms-3">
                  {item.name}
                </Typography>))}
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
            <Box className='ms-5 d-none d-md-block'>
              <Typography variant="body1" className="fw-bold">About</Typography>
              {About.map((item, index) => (
                <Typography key={index} className="py-1">
                  {item.name}
                </Typography>))}
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ paddingY: 3, marginLeft: 5, paddingLeft: 5 }}>
        <Button>
          <img src={USAflag} alt="Flag"
            style={{ width: '25px', height: '25px', borderRadius: '50%' }}
          />
        </Button>
        <Button variant="text" sx={{ color: 'black' }}> PKR </Button>
      </Box>

      <Typography sx={{ paddingBottom: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services. <br />
        Copyright © 1996–2025 Booking.com™. All rights reserved.
      </Typography>

      <Grid item sx={12}>
        <Box className='d-flex justify-content-center align-items-center pb-5' sx={{ flexWrap: 'wrap', gap: 2 }}>
          <img src={Booking} alt="img" />
          <Typography className="mx-3"><img src={Priceline} alt="img" /></Typography>
          <img src={KAYAKImg} alt="img" />
          <Typography className="mx-2"><img src={Agoda} alt="img" /></Typography>
          <img src={OpenTable} alt="img" />
        </Box>
      </Grid>
    </>
  );
};

export default HotelAvailibility;