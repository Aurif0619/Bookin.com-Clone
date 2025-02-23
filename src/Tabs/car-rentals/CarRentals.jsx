import { Box, Button, Toolbar, Accordion, AccordionSummary, AccordionDetails, CardMedia, Typography, TextField, MenuItem, Card, Grid, Checkbox } from "@mui/material";
import KingBedIcon from "@mui/icons-material/KingBed";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ElSegundo from '../../assets/El Segundo.jpg';
import SanDiego from '../../assets/San Dayo.jpg';
import Calgary from '../../assets/Calgaary.jpg';
import Coolangatta from '../../assets/coolangata.jpg';
import Jamaica from '../../assets/jamia.jpg';
import Milan from '../../assets/Milan.jpg';
import Pheonix from '../../assets/phoenix.jpg';
import Madrid from '../../assets/Madrid.jpg';
import Rome from '../../assets/Rome.jpg';
import KAYAKImg from '../../assets/KAYAK.png';
import Agoda from '../../assets/agoda.png';
import Booking from '../../assets/Booking.png';
import Priceline from '../../assets/Priceline.png';

const CarRental = () => {
  const Btns = [
    { id: 1, name: "Flights", path: "/flights", icon: <FlightTakeoffIcon /> },
    { id: 2, name: "Car rentals", path: "/car-rentals", icon: <DirectionsCarIcon className="d-none d-sm-block" /> },
    { id: 3, name: "Attraction", icon: <AttractionsIcon /> },
    { id: 4, name: "Airport taxis", icon: <LocalTaxiIcon /> }
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
    { name: "Extent login" },
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
  const questions = [
    {
      question: "Why should I book a car rental in Pakistan with Booking.com?",
      answer: "Booking.com offers reliable and affordable car rental services with extensive customer support."
    },
    {
      question: "What do I need to rent a car?",
      answer: "You need a valid driver's license, an ID, and a credit card."
    },
    {
      question: "Am I old enough to rent a car?",
      answer: "The minimum age to rent a car is usually 21, but it varies by provider."
    },
    {
      question: "Can I book a rental car for someone else?",
      answer: "Yes, as long as you provide their valid ID and driver's license."
    },
    {
      question: "Any tips for picking the right car?",
      answer: "Choose a car that fits your trip's needs, considering size, fuel efficiency, and budget."
    },
    {
      question: "Are all fees included in the rental price?",
      answer: "The rental price typically includes basic fees, but check for extras like insurance or taxes."
    },
  ];

  const destinations = [
    {
      city: "El Segundo", locations: 103,
      price: "PKR 14,659.43", image: ElSegundo,
    },
    {
      city: "San Diego", locations: 87,
      price: "PKR 12,853.49", image: SanDiego,
    },
    {
      city: "Calgary", locations: 42,
      price: "PKR 13,516.40", image: Calgary,
    },
    {
      city: "Coolangatta", locations: 24,
      price: "PKR 14,444.16", image: Coolangatta,
    },
    {
      city: "Phoenix", locations: 79,
      price: "PKR 15,875.94", image: Pheonix,
    },
    {
      city: "Jamaica", locations: 83,
      price: "PKR 19,202.83", image: Jamaica,
    },
    {
      city: "Madrid", locations: 102,
      price: "PKR 13,145.76", image: Madrid,
    },
    {
      city: "Milan", locations: 122,
      price: "PKR 13,521.83", image: Milan,
    },
    {
      city: "Rome", locations: 157, price:
        "PKR 13,235.17", image: Rome
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <Box component="main" className="text-white"
        sx={{ p: 2, background: "#003B95", height: "62vh", }}>
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

      <Box>
        <Box
          marginTop={{ xs: 0, md: -4 }}
          className="rounded-3 p-1 d-flex gap-1 container justify-content-between align-items-center"
          sx={{
            flexWrap: "wrap",
            backgroundColor: "orange",
            border: "2px solid orange",
            borderRadius: "8px",
            padding: "10px",
            rowGap: "2px",
          }}>
          {[
            { placeholder: "Pick-up location", icon: <KingBedIcon sx={{ mr: 1 }} />, width: { xs: "100%", md: "20%" } },
            { placeholder: "Pick-up date", icon: <CalendarMonthIcon sx={{ mr: 1 }} />, width: { xs: "48%", md: "14%" } },
            { placeholder: "Time", icon: <AccessTimeIcon sx={{ mr: 1 }} />, width: { xs: "48%", md: "14%" } },
            { placeholder: "Drop-off date", icon: <CalendarMonthIcon sx={{ mr: 1 }} />, width: { xs: "48%", md: "14%" } },
            { placeholder: "Time", icon: <AccessTimeIcon sx={{ mr: 1 }} />, width: { xs: "48%", md: "14%" } },].map((field, index) => (
            <TextField
              key={index}
              placeholder={field.placeholder}
              sx={{
                width: field.width,
                backgroundColor: "white",
                borderRadius: "8px",
              }}
              InputProps={{
                startAdornment: field.icon,
              }}
            />
          ))}
          <TextField
            select
            sx={{
              width: { xs: "100%", md: "12%" },
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
          {/* Search Button */}
          <Button
            className="text-white"
            variant="contained"
            sx={{
              backgroundColor: "#003B95",
              width: { xs: "100%", md: "100px" },
              height: "56px",
              textTransform: "none",
              borderRadius: "8px",
            }}>
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
              <Box>
                <img width={100} src={GiftImg} alt="Img" /></Box>
            </Box>
          </Card>
          <Box className='my-3 d-non d-md-block'>
            <Checkbox />Drop car off at different location
            <Checkbox />Driver aged 30 – 65?
          </Box>
        </Box>
        <Box className="bg-body-tertiary py-4">
          <Box className="container">
            <Box className="d-flex justify-content-between gap-3 flex-wrap">
              {CustomerSupport.map((item, index) => (
                <Box
                  key={index}
                  className="d-flex align-items-center p-3 py-5"
                  sx={{
                    backgroundColor: "#ffffff", borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    minWidth: "280px", flex: "1 1 30%",
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
                        borderRadius: "50%",
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

        <Box className="bg-body-tertiary py-4">
          <Box className="container">
            <Typography variant="h5" fontWeight="bold" className="mb-4" sx={{ color: "#00008B" }}>
              Frequently asked questions
            </Typography>
            <Box className="row g-3">
              {questions.map((item, index) => (
                <Box className="col-md-6" key={index}>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}-content`}
                      id={`panel${index}-header`}>
                      <Typography fontWeight="bold">{item.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{item.answer}</Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box sx={{ width: "90%", margin: "auto", padding: "20px 0" }}>
          <Typography variant="h4" fontWeight="bold">
            Popular car rental destinations
          </Typography>
          <Typography color="gray">
            Explore more options to rent a car for cheap
          </Typography>
          <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
            <Button variant="contained">Cities worldwide</Button>
            <Button variant="outlined">Airports worldwide</Button>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr",
              },
              gap: 2,
              marginTop: 3,
            }}
          >
            {destinations.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "8px",
                  boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={item.image} alt={item.city}
                  style={{ width: "50px", height: "50px", borderRadius: "4px" }}
                />
                <Box>
                  <Typography fontWeight="bold">{item.city}</Typography>
                  <Typography fontSize="14px">
                    {item.locations} car rental locations
                  </Typography>
                  <Typography fontSize="14px">
                    Average price of <b>{item.price}</b> per day
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Typography
            sx={{ marginTop: 3, color: "blue", cursor: "pointer", display: "inline-block" }}
          >
            + Show more
          </Typography>
        </Box>

        <Box className="d-flex justify-content-center">
          <Grid>
            <Box className='d-flex my-2 pt-5'>
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
      <Box sx={{ background: '#F5F5F5' }}>
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
            <Box className='ms-5 d-none d-md-block '>
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
          <Button>
            <img className="rounded-5" src={USAflag}
              alt="USA Flag" style={{ width: "25px", height: "25px" }} />
          </Button>
          <Button variant="text" className="text-black"> PKR </Button>
        </Box>

        <Typography className="pb-5 d-flex text-center justify-content-center align-items-center">
          Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services. <br />
          Copyright © 1996–2025 Booking.com™. All rights reserved.
        </Typography>
        <Box className='container d-flex justify-content-center align-items-center pb-5'>
          <Typography className="text-primary"><img src={Booking} alt="img"/></Typography>
          <Typography className="mx-3 text-info"><img src={Priceline} alt="img" /></Typography>
          <Typography><img src={KAYAKImg} alt="img" /></Typography>
          <Typography><img src={Agoda} alt="img" /></Typography>
          <img src={OpenTable} alt="img" />
        </Box>
      </Box>
    </>
  );
};

export default CarRental;
