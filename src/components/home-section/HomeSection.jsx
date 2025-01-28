import { Box, Button, Toolbar, Typography, TextField, MenuItem, Card, Grid, CardContent, CardMedia, Chip } from "@mui/material";
import React, { useState } from "react";
import KingBedIcon from "@mui/icons-material/KingBed";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import Karachi from '../../assets/Karachi.jpg'
import AttractionsIcon from "@mui/icons-material/Attractions";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WordWide from '../../assets/worldWideImg.jpeg';
import GiftImg from '../../assets/giftImg.png';
import LahoreImg from '../../assets/LahoreBigImg.jpg';
import IslamabadImg from '../../assets/IslamabadBigImg.jpg';
import KarachiImg from '../../assets/KarachiBigImg.jpg';
import MedinaImg from '../../assets/MAKKAH.jpg';
import DubaiImg from '../../assets/Dubai.jpg';
import LosAngelImg from '../../assets/losAngeIlmg.webp';
import LosAngelImg2 from '../../assets/LosAngelImg-2.webp';
import LosAngelImg3 from '../../assets/LosAngelImg-3.webp';
import Hotel from '../../assets/hotel.jpeg';
import Apartment from '../../assets/appartment.jpeg';


const HomeSection = () => {
  const Btns = [
    { id: 1, name: "Flights", icon: <FlightTakeoffIcon /> },
    { id: 2, name: "Car rentals", icon: <DirectionsCarIcon className="d-none d-sm-block" /> },
    { id: 3, name: "Attraction", icon: <AttractionsIcon /> },
    { id: 4, name: "Airport taxis", icon: <LocalTaxiIcon /> },
  ];

  const QuickBtns = [
    { id: 1, name: "Beach", icon: <BeachAccessIcon className="text-dark" /> },
    { id: 2, name: "Outdoors", icon: <DirectionsBikeIcon /> },
    { id: 3, name: "Romance", icon: <FavoriteBorderIcon className="text-dark" /> }
  ]

  const LahoreHotels = [
    { id: '1', image: '../../assets/hotel.jpeg', title: 'Hotel', date: 'Jan 31-Feb 1, 2 adults', available: '229' },
    { id: '2', image: '../../assets/appartment.jpeg', title: 'Apartment', date: 'Jan 31-Feb 1, 2 adults', available: '364' },
    { id: '3', image: '../../assets/resort.jpeg', title: 'Resorts', date: 'Unavailable for your date' },
    { id: '4', image: '../../assets/villas.jpeg', title: 'Villas', date: 'Unavailable for your date', available: '364' },
  ];

  const hotels = [
    {
      id: 1,
      img: '../../assets/studio.jpg',
      title: 'Magnova Studios',
      location: 'Istanbul, Turkey',
      rating: '8.9',
      reviews: '756 reviews',
      offer: 'Early 2025 Deal',
      priceOld: 'PKR 124,425',
      priceNew: 'PKR 53,503',
      nights: '2 nights',
    },
    {
      id: 2,
      img: '/assets/goodwood.jpg',
      title: 'GOODWOOD',
      location: 'Dubai, United Arab Emirates',
      rating: '9.1',
      reviews: '192 reviews',
      offer: 'Early 2025 Deal',
      priceOld: 'PKR 198,154',
      priceNew: 'PKR 126,224',
      nights: '2 nights',
    },
    {
      id: 3,
      img: '/assets/mhotel.jpg',
      title: 'M Hotel Makkah by Millennium',
      location: 'Mecca, Saudi Arabia',
      rating: '7.9',
      reviews: '13,542 reviews',
      offer: 'Free Parking',
      priceOld: 'PKR 35,314',
      priceNew: 'PKR 28,251',
      nights: '2 nights',
    },
    {
      id: 4,
      img: '/assets/ramada.jpg',
      title: 'Ramada Hotel & Suites Sisli',
      location: 'Istanbul, Turkey',
      rating: '8.2',
      reviews: '630 reviews',
      offer: 'Limited-time Deal',
      priceOld: 'PKR 60,427',
      priceNew: 'PKR 36,256',
      nights: '2 nights',
    },
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
      <Box component="main" className="text-white"
        sx={{ p: 3, background: "#003B95", height: "62vh", }}>
        <Toolbar />
        <Box className="container"
          sx={{ flexWrap: "wrap", justifyContent: { xs: "center", md: "flex-start" }, }}>
          <Button className="border-white text-white rounded-5 gap-2 py-2"
            variant="outlined"
            sx={{ textTransform: "none" }}>
            <KingBedIcon className="fs-4" /> Stays
          </Button>
          {Btns.map((btn) => (
            <Button className="text-white gap-2 ms-3"
              key={btn.id}
              sx={{ textTransform: "none" }}  > {btn.icon}
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

        {/* Cities */}
        <Typography>
          Trending Destination
        </Typography>
        <Box sx={{ padding: 2 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Trending destinations
          </Typography>
          {/* Responsive Grid */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 2,
                  overflow: 'hidden',
                  textAlign: 'center',
                }}
              >
                <img src={LahoreImg}
                  alt="Lahore-img"
                  style={{ width: '100%', borderRadius: '8px' }}
                />
                <Typography
                  variant="h6"
                  component="div" className="text-white"
                  sx={{ position: 'absolute', top: 8, left: 8, backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: 1, padding: '4px 8px' }}>
                  Lahore 🇵🇰 </Typography> </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', textAlign: 'center' }}>
                <img src={IslamabadImg} alt="Islamabad-img" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                <Typography variant="h6" sx={{ position: 'absolute', top: 8, left: 8, color: '#fff', backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: 1, padding: '4px 8px', }}  >
                  Islamabad 🇵🇰
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ padding: 2 }} className="d-flex my-3">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 2,
                  overflow: 'hidden',
                  textAlign: 'center',
                }}>
                <img src={KarachiImg} alt="Karachi" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    position: 'absolute',
                    top: 8, left: 8, color: '#fff',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: 1, padding: '4px 8px',
                  }} >
                  Karachi 🇵🇰 </Typography> </Box>
            </Grid>

            {/* Medina */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 2,
                  overflow: 'hidden',
                  textAlign: 'center',
                }}
              >
                <img
                  src={MedinaImg}
                  alt="Medina"
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    position: 'absolute',
                    top: 8,
                    left: 8,
                    color: '#fff',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    borderRadius: 1,
                    padding: '4px 8px',
                  }}
                >
                  Medina 🇸🇦
                </Typography>
              </Box>
            </Grid>


            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 2,
                  overflow: 'hidden',
                  textAlign: 'center',
                }}
              >
                <img
                  src={DubaiImg}
                  alt="Dubai"
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    position: 'absolute',
                    top: 8,
                    left: 8,
                    color: '#fff',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    borderRadius: 1,
                    padding: '4px 8px',
                  }}>
                  Dubai 🇦🇪
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ padding: 4 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography variant="h5" component="h2">
              Get inspiration for your next trip
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'blue', cursor: 'pointer' }}> More
            </Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6}>
              <Card>
                <Box sx={{ position: 'relative' }}>
                  <img src={LosAngelImg} alt="Los Angel" sx={{ width: '100%', height: '100%', borderRadius: '8px' }} />
                  <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <CardContent>
                      <Typography variant="subtitle1" color="white" className="fs-5 fw-bold"> 5 of the best hotels in Los Angeles</Typography>
                      <Typography variant="body2" color="white" className="fw-bold"> From Hollywood to Beverly Hills, discover 5 of the best hotels in Los Angeles for your stay. </Typography>
                    </CardContent>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <img src={LosAngelImg2} alt="Los Angel" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold">
                    The 6 best Orlando hotels for families
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Discover the best Orlando hotels for families for your vacation.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <img src={LosAngelImg3} alt="Los Angel" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold">
                    5 best ski towns around the world
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Discover a winter wonderland in these charming ski destinations.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box className='mt-4'>
            <Typography variant="h5" className="fw-bold">
              Quick and easy trip planner
            </Typography>
            <Typography variant="body-1">
              Pick a vibe and explore the top destinations in Pakistan
            </Typography>
            <Box className='d-flex my-4'>
              <Button variant="outlined" className="d-flex justify-content-center align-items-center outlined rounded-5 text-dark">
                <Typography>
                  <LocationCityIcon />
                </Typography>
                <Typography sx={{ textTransform: "none" }} className="mx-1">  City </Typography>
              </Button>

              {QuickBtns.map((btn) => (
                <Button variant="text" className="gap-2 text-dark ms-3 rounded-5"
                  key={btn.id} sx={{ textTransform: "none" }}  >
                  {btn.icon} {btn.name}
                </Button>
              ))}
            </Box>
          </Box>
          <Box>

            <img src={Karachi} className="w-25 rounded-4" alt="Img" />
            <Typography className="fw-bold"> Karachi </Typography>
            <Typography> 1,030 km from Lahore</Typography>
          </Box>
          {/* Browser Imgs */}
          <Box className='mt-4'>
            <Typography variant="h5" className="fw-bold">
              Browse by property type in Lahore
            </Typography>
            <Box className='d-flex mt-2 justify-content-between'>
              {LahoreHotels.map((hotels) => (
                <Box key={hotels.id}>
                  <img src={Hotel} alt={hotels} />
                  <Typography className="fw-bold">{hotels.title}</Typography>
                  <Typography variant="body2" color="textSecondary">{hotels.date}</Typography>
                  {hotels.available && (
                    <Typography variant="body2" color="textSecondary">Available: {hotels.available}</Typography>
                  )}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Dealing Hotels */}
          <Box sx={{ p: 4 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Deals for the weekend
            </Typography>
            <Grid container spacing={3}>
              {hotels.map((hotel) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={hotel.id}>
                  <Card
                    sx={{
                      borderRadius: 2,
                      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                      overflow: 'hidden',
                    }}
                  >
                    <CardMedia component="img"
                      image={hotel.img}
                      alt={hotel.title}
                      sx={{ height: 200, objectFit: 'cover' }}
                    />
                    <CardContent>
                      <Chip label={hotel.offer}
                        color="success"
                        size="small"
                        sx={{ mb: 1 }}
                      />
                      <Typography variant="h6" fontWeight="bold">
                        {hotel.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {hotel.location}
                      </Typography>
                      <Typography
                        sx={{
                          mt: 1,
                          fontSize: '0.9rem',
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                        }}
                      >
                        <Chip
                          label={hotel.rating}
                          color="primary"
                          size="small"
                          sx={{ fontWeight: 'bold' }}
                        />
                        <span>{hotel.reviews}</span>
                      </Typography>
                      <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                        {hotel.nights}
                      </Typography>
                      <Box sx={{ mt: 2, display: 'flex', alignItems: 'baseline' }}>
                        <Typography
                          variant="body2"
                          sx={{
                            textDecoration: 'line-through',
                            color: 'gray',
                            mr: 1,
                          }}
                        >
                          {hotel.priceOld}
                        </Typography>
                        <Typography variant="h6" fontWeight="bold">
                          {hotel.priceNew}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomeSection;
