import { Box, Button, Toolbar, Typography, TextField, MenuItem, Card, Grid, CardContent, CardMedia, Chip, ListItem, List } from "@mui/material";
import React, { useState } from "react";
import KingBedIcon from "@mui/icons-material/KingBed";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AddIcon from '@mui/icons-material/Add';
import AttractionsIcon from "@mui/icons-material/Attractions";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
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
import Studio from '../../assets/studio.jpg';
import Apartment from '../../assets/apartment.jpeg';
import Resorts from '../../assets/resort.jpeg';
import Villas from '../../assets/villas.jpeg';
import GoodWood from '../../assets/suitesImg.jpg';
import Ramada from '../../assets/RamadaHotel.jpg';
import ChairImg from '../../assets/chairImg.png';
import USAflag from '../../assets/AmericaFlag.png'
import Pakistan from '../../assets/Pakistan.png';
import Makkah from '../../assets/Madina.png';
import Dubai from '../../assets/Dubaiflag.png';
import OpenTable from '../../assets/OpenTable.png';
import { useNavigate } from "react-router";

const Stays = () => {
  const Btns = [
    { id: 1, name: "Flights", path: '/flights', icon: <FlightTakeoffIcon /> },
    { id: 2, name: "Car rentals", path: "/car-rentals", icon: <DirectionsCarIcon className="d-none d-sm-block" /> },
    { id: 3, name: "Attraction", icon: <AttractionsIcon /> },
    { id: 4, name: "Airport taxis", icon: <LocalTaxiIcon /> }
  ];

  const QuickBtns = [
    { id: 1, name: "Beach", icon: <BeachAccessIcon className="text-dark" /> },
    { id: 2, name: "Outdoors", icon: <DirectionsBikeIcon /> },
    { id: 3, name: "Romance", icon: <FavoriteBorderIcon className="text-dark" /> },
    { id: 4, name: "Food", icon: <LunchDiningIcon className="text-dark" /> }
  ]

  const LahoreHotels = [
    { id: '1', Image: Hotel, title: 'Hotel', date: 'Jan 31-Feb 1, 2 adults', available: '229' },
    { id: '2', Image: Apartment, title: 'Apartment', date: 'Jan 31-Feb 1, 2 adults', available: '364' },
    { id: '3', Image: Resorts, title: 'Resorts', date: '...', available: 'Unavailable for your date' },
    { id: '4', Image: Villas, title: 'Villas', date: 'Unavailable for your date', available: '364' },
  ];

  const cityData = [
    { name: "Lahore", image: LahoreImg, distance: "0 km from Lahore" },
    { name: "Karachi", image: KarachiImg, distance: "1,030 km from Lahore" },
    { name: "Islamabad", image: IslamabadImg, distance: "380 km from Lahore" },
    { name: "Dubai", image: DubaiImg, distance: "..." },
    { name: "Madina", image: MedinaImg, distance: "..." },
  ];


  const MakkahHotels = [
    {
      id: 1, Image: Studio, title: 'Magnova Studios',
      location: 'Istanbul, Turkey', rating: '8.9',
      reviews: '756 reviews', offer: 'Early 2025 Deal',
      priceOld: 'PKR 124,425', priceNew: 'PKR 53,503', nights: '2 nights',
    },
    {
      id: 2, Image: GoodWood, title: 'GOODWOOD',
      location: 'Dubai, United Arab Emirates', rating: '9.1',
      reviews: '192 reviews', offer: 'Early 2025 Deal',
      priceOld: 'PKR 198,154', priceNew: 'PKR 126,224', nights: '2 nights',
    },
    {
      id: 3, Image: Hotel, title: 'M Hotel Makkah',
      location: 'Mecca, Saudi Arabia', rating: '7.9',
      reviews: '13,542 reviews', offer: 'Free Parking',
      priceOld: 'PKR 35,314', priceNew: 'PKR 28,251', nights: '2 nights',
    },
    {
      id: 4, Image: Ramada, title: ' Ramada Hotel & Suites',
      location: 'Istanbul, Turkey',
      rating: '8.2', reviews: '630 reviews',
      offer: 'Limited-time Deal', priceOld: 'PKR 60,427',
      priceNew: 'PKR 36,256', nights: '2 nights',
    },
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

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const navigate = useNavigate();
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
              Find your next stay
            </Typography>
            <Typography variant="h5" className="text-white"
              sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, mt: 1 }}
            >
              Search deals on hotels, homes, and much more...
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className='container' >
        <Box marginTop={-4}
          className="rounded-3 p-1 d-flex gap-2 justify-content-between align-items-center"
          sx={{
            flexWrap: "wrap",
            backgroundColor: "orange",
            border: "orange",
          }}
        >
          <TextField
            placeholder="Where are you going?"
            fullWidth sx={{
              flex: 1, minWidth: "200px",
              backgroundColor: "white",
              borderRadius: "5px",
            }}
            InputProps={{
              startAdornment: <KingBedIcon sx={{ mr: 1 }} />,
            }}
          />
          <TextField
            placeholder="Check-in Date"
            fullWidth sx={{
              flex: 1,
              minWidth: "200px",
              backgroundColor: "white",
              borderRadius: "5px",
            }}
            InputProps={{
              startAdornment: <CalendarMonthIcon sx={{ mr: 1 }} />,
            }}
          />
          <TextField select fullWidth
            sx={{
              flex: 1,
              minWidth: "200px",
              backgroundColor: "white",
              borderRadius: "5px",
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
            variant="contained" sx={{
              backgroundColor: "#003B95",
              minWidth: "150px",
              height: "56px",
              textTransform: "none",
            }}> Search </Button>
        </Box>

        <Box className="text-black mt-5 my-2">
          <Typography className="fw-bold" variant="h5">
            Offers
          </Typography>
          <Typography className="my-2">Promotions, deals, and special offers for you</Typography>
        </Box>
        <Card className="py-1 ps-3 mt-2">
          <Box className="d-flex justify-content-between">
            <Box>
              <Typography variant="h5">Save on stays worldwide</Typography>
              <Typography>
                Start your year with an adventure, saving 15% or more with Early
                2025 Deals.
              </Typography>
              <Button variant="contained"
                sx={{ textTransform: "none" }}
                className="mt-3"
              >
                Save 15% or more
              </Button>
            </Box>
            <Box className='d-flex justify-content-center align-items-center me-2'>
              <img width={130} src={WordWide} alt="Img" />
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
                  className="mt-3"  >
                  Sign in
                </Button>
                <Button variant="outlined"
                  sx={{ textTransform: "none" }}
                  className="mt-3 ms-2"> Register
                </Button> </Box>
              <Box><img width={100} src={GiftImg} alt="Img" /></Box>
            </Box>
          </Card>
        </Box>

        <Box>
          <Typography variant="h5" className="fw-medium my-2">
            Trending Destinations
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={6}>
              <Box sx={{
                position: 'relative', borderRadius: 2,
                overflow: 'hidden', textAlign: 'center',
              }}
              >
                <img className="rounded-4"
                  src={LahoreImg} alt="Lahore-img"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
                <Typography
                  variant="h6" component="div"
                  sx={{
                    position: 'absolute',
                    top: 8, left: 8,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    borderRadius: 1,
                    padding: '4px 8px',
                    color: '#fff',
                  }}
                >
                  Lahore <img src={Pakistan} alt="Pakistan" />
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} lg={6}>
              <Box sx={{
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                textAlign: 'center',
              }}
              >
                <img className="rounded-4"
                  src={IslamabadImg}
                  alt="Islamabad-img"
                  style={{
                    width: '100%', height: 'auto',
                    display: 'block',
                  }}
                />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    position: 'absolute',
                    top: 8,
                    left: 8,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    borderRadius: 1,
                    padding: '4px 8px',
                    color: '#fff',
                  }}
                >
                  Islamabad <img src={Pakistan} alt="Pakistan" />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box className="d-flex my-3">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                textAlign: 'center',
              }}>
                <img src={KarachiImg} alt="Karachi" style={{ width: '100%', height: 'auto' }} />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    position: 'absolute',
                    top: 8, left: 8, color: '#fff',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: 1, padding: '4px 8px',
                  }} >
                  Karachi <img src={Pakistan} alt="Pakistan" /></Typography> </Box>
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
                    top: 8, left: 8, color: '#fff',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    borderRadius: 1, padding: '4px 8px',
                  }}>
                  Medina <img src={Makkah} alt="Medina" />
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{
                position: 'relative',
                borderRadius: 2, overflow: 'hidden', textAlign: 'center',
              }}
              >
                <img src={DubaiImg} alt="Dubai" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                <Typography variant="h6" component="div"
                  sx={{
                    position: 'absolute',
                    top: 8, left: 8, color: '#fff',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    borderRadius: 1, padding: '4px 8px',
                  }}>
                  Dubai <img src={Dubai} alt="Dubai" />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Box className="d-md-flex justify-content-between align-items-center" mb={3}>
            <Typography variant="body1" className="fw-bold fs-4">
              Get inspiration for your next trip
            </Typography>
            <Typography variant="body2" sx={{ color: 'blue', cursor: 'pointer' }}>
              More
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6}>
              <Card className='d-none d-md-block'>
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
        </Box>
        <Grid spacing={2} alignItems="center">
          <Grid item xs={12} md={8}>
            <Box className='d-flex' flexWrap="wrap" gap={2}>
              <Button
                variant="outlined"
                className="outlined rounded-5 mt-4 text-dark"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  whiteSpace: "nowrap",
                }}
              >
                <LocationCityIcon />
                <Typography sx={{ textTransform: "none" }}>City</Typography>
              </Button>

              {/* Quick Buttons */}
              {QuickBtns.map((btn) => (
                <Button
                  key={btn.id}
                  variant="text"
                  className="text-dark rounded-5 pt-4"
                  sx={{
                    textTransform: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 1, px: 2,
                  }}
                >
                  {btn.icon} {btn.name}
                </Button>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Heading Section (Explore Pakistan) */}
        <Grid item xs={12} className="mt-3">
          <Typography variant="h4" className="mt-5 fw-bold my-3">
            Explore Pakistan
          </Typography>
        </Grid>
        <Grid container className="justify-content-between">
          {cityData.map((city, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2}
              key={index} sx={{ display: index === 0 ? { xs: "none", sm: "block" } : "block" }}>
              <Box mb={2}>
                <img
                  src={city.image}
                  className="rounded-3"
                  alt={city.name}
                  style={{ width: "100%", maxWidth: "180px", height: "auto" }}
                />
                <Typography className="fw-bold mt-2">{city.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {city.distance}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box className='mt-4'>
          <Typography variant="h5" className="fw-bold my-2 mt-2">
            Browse by property type in Lahore
          </Typography>
          <Grid container spacing={1}>
            {LahoreHotels.map((hotels) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={hotels.id}>
                <Box sx={{
                  borderRadius: 2,
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden", p: 1,
                }}
                >
                  <CardMedia component="img" image={hotels.Image}
                    alt={hotels.title}
                    sx={{ height: 200, objectFit: "cover", borderRadius: "10px" }}
                  />
                  <Box sx={{ p: 2 }}>
                    <Typography variant="h6" fontWeight="bold">
                      {hotels.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {hotels.date}
                    </Typography>
                    {hotels.available && (
                      <Typography variant="body2" color="textSecondary">
                        Available: {hotels.available}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Dealing Hotels */}
        <Box className='mt-5'>
          <Typography variant="h5" fontWeight="bold" className="my-2 py-2">
            Deals for the weekend
          </Typography>
          <Grid container spacing={1}> {MakkahHotels.map((hotel) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={hotel.id}>
              <Card sx={{ borderRadius: 2, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', overflow: 'hidden', }}>
                <CardMedia component="img" image={hotel.Image} alt={hotel.title} sx={{ height: 200, objectFit: 'cover' }} />
                <Chip className="ms-1" label={hotel.offer} color="success" size="small" sx={{ my: 1, }} />
                <Typography variant="h6" fontWeight="bold" className="p-2"> {hotel.title} </Typography>
                <Typography className="p-2" variant="body2" color="textSecondary"> {hotel.location}
                </Typography>
                <Typography className="ps-1" sx={{
                  mt: 1, fontSize: '0.9rem', fontWeight: 'bold', display: 'flex',
                  alignItems: 'center', gap: 1
                }}  >
                  <Chip label={hotel.rating} color="primary" size="small" sx={{ fontWeight: 'bold' }} />
                  <Typography variant="body2">{hotel.reviews}</Typography>
                </Typography>
                <Typography className="ps-2" variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                  {hotel.nights} </Typography>
                <Box sx={{ mt: 2, display: 'flex', alignItems: 'baseline', my: 2 }}>
                  <Typography className="ps-3" variant="body2"
                    sx={{
                      textDecoration: 'line-through',
                      color: 'gray', mr: 1
                    }}>
                    {hotel.priceOld}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    {hotel.priceNew}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
          </Grid>
        </Box>
        <Box sx={{ paddingBottom: "50px" }} className='mt-4 pt-2'>
          <Typography className="text-black" variant="h5">
            Travel more, spend less
          </Typography>
          <Card className="py-2 container mt-3">
            <Box className="d-flex justify-content-between">
              <Box>
                <Typography variant="h5">Sign in, save money</Typography>
                <Typography>
                  Save 10% or more at participating properties – just look for the blue Genius label
                </Typography>
                <Button variant="contained"
                  sx={{ textTransform: "none" }}
                  className="mt-3" >
                  Sign in
                </Button>
                <Button variant="outlined"
                  sx={{ textTransform: "none" }}
                  className="mt-3 ms-2" > Register
                </Button>
              </Box>
              <Box><img width={100} src={GiftImg} alt="Img" /></Box>
            </Box>
          </Card>
        </Box>

        {/* Chair img */}
        <Box className="d-none d-md-block" sx={{ position: "relative", overflow: "hidden" }}>
          <Card
            className="ps-5"
            sx={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between", background: "#F8F9FA",
              position: "relative", overflow: "hidden",
              padding: "20px", height: "auto",
            }} >
            <Box
              sx={{
                backgroundColor: "#007AFF",
                clipPath: "circle(50% at 50% 50%)",
                width: "60%", height: "100%",
                position: "absolute",
                left: "10%", top: "0",
              }}
            />
            <Box
              className="text-white py-5 ms-5 ps-4 d-flex justify-content-center align-content-center"
              sx={{
                position: "relative",
                zIndex: 2, top: 6, left: 220,
                display: "flex", flexDirection: "column",
              }} >
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                Find homes <br /> for your next trip

              </Typography>
              <Button variant="contained" className="text-primary mt-3" sx={{ mt: 1, background: "#fff", textTransform: "none" }}>
                Discover homes
              </Button>
            </Box>

            <Box sx={{ width: "50%" }} className="d-flex justify-content-end flex-end">
              <img src={ChairImg} alt="Chair" style={{ width: "50%" }} />
            </Box>
          </Card>
        </Box>
        {/* Footer */}
        <Box className='mt-3'>
          <Typography variant="h5" className="fw-bold py-2">
            Popular with travelers from Pakistan
          </Typography>
          <Grid item xs={12} md={8}>
            <Box className='d-flex my-2' flexWrap="wrap" gap={2}>
              <Button
                variant="outlined"
                className="outlined rounded-5 text-dark"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  px: 2, textTransform: 'none',
                  whiteSpace: "nowrap",
                }}
              >
                Domestic cities
              </Button>

              {FooterBtns.map((btns) => (
                <Button
                  variant="text"
                  className="text-dark rounded-5"
                  sx={{
                    textTransform: "none",
                    display: "flex", alignItems: "center",
                    gap: 1, px: 2,
                  }}
                >
                  {btns.name}
                </Button>
              ))}
            </Box>
          </Grid>
        </Box>

        {/* Footer items */}
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
                  {item.name}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={2.4}>
            <Box>
              {KarachiItems.map((item, index) => (
                <Typography key={index} className="py-1 ms">
                  {item.name} </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={2.4}>
            <Box>
              {MurreeItems.map((item, index) => (
                <Typography key={index} className="py-1">
                  {item.name} </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={2.4}>
            <Box className='d-none d-md-block'>
              {NathiaItems.map((item, index) => (
                <Typography key={index} className="py-1">
                  {item.name} </Typography>
              ))}
            </Box>
          </Grid>
          <Button variant="text" sx={{ textTransform: 'none' }}> <AddIcon className="" /> Show More </Button>
        </Grid>

        <Box className="d-flex justify-content-center">
          <Grid sx={{}}>
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
                  {item.name}</Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={2.4}>
            <Box className='ms-5'>
              <Typography variant="body1" className="fw-bold">Partners</Typography>
              {Partners.map((item, index) => (
                <Typography key={index} className="py-1">
                  {item.name}  </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={2.4}>
            <Box className='d-none d-md-block'>
              <Typography variant="body1" className="fw-bold">About</Typography>
              {About.map((item, index) => (
                <Typography key={index} className="py-1">
                  {item.name}</Typography>
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
          <img src={OpenTable} alt="TableImg" />
        </Box>
      </Box>
    </>
  );
};

export default Stays;
