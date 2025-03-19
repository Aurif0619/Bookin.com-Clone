import { Box, CardContent, Button, Checkbox, Card, MenuItem, TextField, Toolbar, Typography, Chip, Grid } from '@mui/material';
import KingBedIcon from "@mui/icons-material/KingBed";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AttractionsIcon from "@mui/icons-material/Attractions";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import SwapVertIcon from '@mui/icons-material/SwapVert';
import Gulberg from '../../assets/Gulber.webp';
import HotelIHS from '../../assets/HotelHS1.webp';
import Premium from '../../assets/premium.webp';
import Rose from '../../assets/Rose.webp';
import GoldCrest from '../../assets/Gold crest.webp'
import GiftImg from '../../assets/giftImg.png';
import Luxurious from '../../assets/Luxurious.webp';
import Goldcrest from '../../assets/Luxury appartment.webp';
import LahoreContinent from '../../assets/LahoreContinental.webp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Western from '../../assets/Western.webp';
import Mukhtar from '../../assets/Mukhtar.webp';
import Defence from '../../assets/Defence.webp';
import Premier from '../../assets/Premier Inn.webp';
import Oasis from '../../assets/Oasis.webp';
import HotelHS1 from '../../assets/HotelHS1.webp';
import Luxus from '../../assets/Luxus.webp';
import Agritusia from '../../assets/Agritusiam.webp';
import Apartment from '../../assets/apartment.jpeg';
import HotelAvailiblity from '../../assets/AvailabilityImg1.jpg';
import HotelAvailiblity2 from '../../assets/AvailibilityImg2.jpg';
import HotelAvailiblity3 from '../../assets/AvailibilityImg3.jpg';
import HotelAvaliblity4 from '../../assets/AvailibilityImg4.jpg';
import Boutiqua from '../../assets/BoutiquaGalata.jpg';
import MakkahHotel from '../../assets/MakkahHotel.jpg';
import Milan from '../../assets/Milan.jpg';
import Nawazi from '../../assets/NawaziHotel.jpg';
import Hotel from '../../assets/hotel.jpeg';
import Bed from '../../assets/One.webp';
import Phoenix from '../../assets/phoenix.jpg';
import Premire from '../../assets/Premier Inn.webp';
import RamdaHotel from '../../assets/RamadaHotel.jpg';
import Restore from '../../assets/resort.jpeg';
import RosePetal from '../../assets/RosePetal-1.jpg';
import RosePetal2 from '../../assets/RosePetal-2.jpg';
import Shelton from '../../assets/Shelton.webp';
import SuitImg from '../../assets/suitesImg.jpg';
import Dove from '../../assets/Dove.webp';
import One from '../../assets/One.webp';
import Faletti from '../../assets/Faletti.webp';
import Booking from '../../assets/Booking.png';
import Priceline from '../../assets/Priceline.png';
import KAYAKImg from '../../assets/KAYAK.png';
import Agoda from '../../assets/agoda.png';
import OpenTable from '../../assets/OpenTable.png';
import { useNavigate } from "react-router";

const HotelDetail = () => {
  const navigate = useNavigate();
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
  { name: 'Search result' }]

  const hotelData = [
    {
      id: 1,
      name: 'Gulberg Inn Hotel Lahore',
      image: Gulberg,
      image2: Apartment,
      image3: HotelIHS,
      rating: 8.1,
      location: 'Gulberg, Lahore • 7.4 km from downtown',
      deal: 'Early 2025 Deal',
      roomType: 'Deluxe Double Room • 1 queen bed',
      breakfast: true,
      cancellation: 'Free cancellation • No prepayment needed',
      oldPrice: 'PKR 23,973',
      newPrice: 'PKR 17,980',
      taxes: '+ PKR 2,877 taxes and fees',
      description: 'Located 3.8 miles from Shah Faisal Mosque, Shelton Ambassador offers 4-star accommodations in Islamabad and features a terrace, a restaurant and a bar. The property is around 6.9 miles from Lake View Park, 13 miles from Ayūb National Park and 24 miles from Taxila Museum. The property provides a 24-hour front desk, airport transportation, room service and free WiFi throughout the property.'
    },
    {
      id: 2,
      name: 'Premium Signature Luxurious',
      image: Premium,
      image2: Western,
      image3: Agritusia,
      rating: 9.2,
      location: 'Karachi • 2.3 km from downtown',
      deal: 'Special Discount',
      roomType: 'Executive Room • 1 king bed',
      breakfast: true,
      cancellation: 'No prepayment needed',
      oldPrice: 'PKR 105,000',
      newPrice: 'PKR 63,000',
      taxes: '+ PKR 4,000 taxes and fees',
      description: 'Located in Islamabad, within 3.4 miles of Shah Faisal Mosque and 5.8 miles of Lake View Park, Roomy Signature Hotel, Islamabad provides accommodations with a restaurant and free WiFi throughout the property as well as free private parking for guests who drive. This 3-star hotel offers room service and a 24-hour front desk. The property has airport transportation, while a car rental service is also available.'
    },
    {
      id: 3,
      name: ' Rose Palace Hotel, Gulberg',
      image: Rose,
      image2: Mukhtar,
      image3: Nawazi,
      rating: 8.8,
      location: 'Islamabad • 5.0 km from downtown',
      deal: 'Seasonal Offer',
      roomType: 'Luxury Suite • 2 queen beds',
      breakfast: true,
      cancellation: 'Free cancellation',
      oldPrice: 'PKR 37,350',
      newPrice: 'PKR 22,410',
      taxes: '+ PKR 3,586 taxes and fees',
      description: 'OWN IT - 2 Bedroom Apartment offers accommodations in Islamabad, 17 miles from Shah Faisal Mosque and 6.9 miles from Taxila Museum. Both free Wifi and parking on-site are available at the apartment free of charge. Ayūb National Park is 16 miles away and Lake View Park is 20 miles from the apartment.'
    },
    {
      id: 4,
      name: 'Hotel Grand Pakeeza',
      image: GoldCrest,
      image2: Hotel,
      image3: Shelton,
      rating: 8.3,
      location: 'Mall Road, Lahore • 10.2 km from downtown',
      deal: 'Limited Time Offer',
      roomType: 'Deluxe Room • 1 double bed',
      breakfast: true,
      cancellation: 'Free cancellation',
      oldPrice: 'PKR 18,500',
      newPrice: 'PKR 10,347',
      taxes: '+ PKR 1,656 taxes and fees',
      description: 'OWN IT - 2 Bedroom Apartment offers accommodations in Islamabad, 17 miles from Shah Faisal Mosque and 6.9 miles from Taxila Museum. Both free Wifi and parking on-site are available at the apartment free of charge. Ayūb National Park is 16 miles away and Lake View Park is 20 miles from the apartment.'
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
        { label: "Lahore", count: 4 },
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
      ],
    },
    {
      category: "Property Accessibility",
      options: [
        { label: "Toilet with grab rails", count: 34 },
        { label: "Raised toilet", count: 36 },
        { label: "Lowered sink", count: 31 },
        { label: "Bathroom emergency cord", count: 21 },
        { label: "Visual aids (Braille)", count: 21 },
        { label: "Visual aids (tactile signs)", count: 20 },
        { label: "Auditory guidance", count: 28 }
      ],
    },
    {
      category: "Property Accessibility",
      options: [
        { label: "Toilet with grab rails", count: 34 },
        { label: "Raised toilet", count: 36 },
        { label: "Lowered sink", count: 31 },
        { label: "Bathroom emergency cord", count: 21 },
        { label: "Visual aids (Braille)", count: 21 },
        { label: "Visual aids (tactile signs)", count: 20 },
        { label: "Auditory guidance", count: 28 }
      ],
    },
    {
      category: "Room Accessibility",
      options: [
        { label: "T Entire unit located", count: 96 },
        { label: "Upper floors accessible", count: 152 },
        { label: "Entire unit wheelchair", count: 140 },
        { label: "Toilet with grab rails", count: 34 },
        { label: "Visual aids (Braille)", count: 21 },
        { label: "Adapted bath", count: 32 },
        { label: "Roll-in shower", count: 44 },
        { label: "Walk-in shower", count: 80 },
        { label: "Raised toilet", count: 48 },
        { label: "Lower sink", count: 42 },
        { label: "Emergency cord in bathroom", count: 33 },
        { label: "Shower chair", count: 26 }
      ],
    },
    {
      category: "Popular Filters",
      options: [
        { label: "4 stars", count: 93 },
        { label: "Resorts", count: 1 },
        { label: "Hotels", count: 247 },
        { label: "Vacation Homes", count: 31 },
        { label: "Wonderful: 9+", count: 147 },
        { label: "Free Wifi", count: 632 },
        { label: "Sea view", count: 3 },
        { label: "Villas", count: 14 },
        { label: "Apartments", count: 425 },
        { label: "Guesthouses", count: 48 },
        { label: "Less than 1 km", count: 17 },
        { label: "Hot tub", count: 47 },
        { label: "Private pool", count: 59 },
        { label: "Air conditioning", count: 765 },
        { label: "Swimming pool", count: 78 },
      ],
    },
    {
      category: "Facilities",
      options: [
        { label: "Parking", "count": 585 },
        { label: "Restaurant", "count": 127 },
        { label: "Pet friendly", "count": 171 },
        { label: "Room service", "count": 261 },
        { label: "24-hour front desk", "count": 244 }
      ]
    },
    {
      category: "Room Features",
      options: [
        { label: "Air conditioning", "count": 432 },
        { label: "Balcony", "count": 212 },
        { label: "Mini fridge", "count": 189 },
        { label: "Ocean view", "count": 97 },
        { label: "Free Wi-Fi", "count": 620 }
      ]
    },
    {
      category: "Activities",
      options: [
        { label: "Swimming pool", "count": 380 },
        { label: "Gym", "count": 245 },
        { label: "Spa", "count": 156 },
        { label: "Kids play area", "count": 112 },
        { label: "Nightclub", "count": 87 }
      ]
    },
    {
      category: "Accessibility",
      options: [
        { label: "Wheelchair accessible", count: 154 },
        { label: "Elevator", count: 321 },
        { label: "Braille signage", count: 75 },
        { label: "Accessible bathroom", count: 190 },
        { label: "Hearing assistance", count: 63 }
      ]
    }, {
      category: "Business Services",
      options: [
        { label: "Meeting rooms", count: 67 },
        { label: "Conference hall", count: 45 },
        { label: "Printing services", count: 88 },
        { label: "High-speed internet", count: 320 },
        { label: "Video conferencing", count: 52 }
      ]
    },
    {
      category: "Transportation",
      options: [
        { label: "Airport shuttle", count: 143 },
        { label: "Car rental", count: 87 },
        { label: "Bicycle rental", count: 67 },
        { label: "Public transport access", count: 180 },
        { label: "Valet parking", count: 125 }
      ]
    },
    {
      category: "Wellness & Health",
      options: [
        { label: "Yoga classes", count: 98 },
        { label: "Meditation center", count: 55 },
        { label: "Sauna", count: 78 },
        { label: "Massage therapy", count: 120 },
        { label: "Car rental", count: 120 },
      ]
    }
  ];
  const FooterBtn = [
    { name: 'Mobile version' },
    { name: 'Your account' },
    { name: 'Make changes online to your booking' },
    { name: 'Customer Service Help' },
    { name: 'Become an affiliate' },
    { name: 'Booking.com for Business' }
  ]


  const SecondHotelData = [
    {
      id: 1,
      name: 'Luxurious One-Bedroom Gold Crest',
      rating: 8.0,
      image: Luxurious,
      image2: HotelAvailiblity,
      image3: HotelAvailiblity2,
      location: 'Gulberg, Lahore • 7.4 km from downtown',
      deal: 'Early 2025 Deal',
      roomType: 'Deluxe Double Room • 1 queen bed',
      breakfast: true,
      cancellation: 'Free cancellation • No prepayment needed',
      oldPrice: 'PKR 25,000',
      newPrice: 'PKR 17,980',
      taxes: '+ PKR 2,877 taxes and fees',
      description: 'Located 3.8 miles from Shah Faisal Mosque, Shelton Ambassador offers 4-star accommodations in Islamabad and features a terrace, a restaurant and a bar. The property is around 6.9 miles from Lake View Park, 13 miles from Ayūb National Park and 24 miles from Taxila Museum. The property provides a 24-hour front desk, airport transportation, room service and free WiFi throughout the property.'
    },
    {
      id: 2,
      name: 'Dove Inn Hotel ',
      rating: 9.2,
      image: Dove,
      image2: HotelAvailiblity3,
      image3: HotelAvaliblity4,
      location: 'Karachi • 2.3 km from downtown',
      deal: 'Special Discount',
      roomType: 'Executive Room • 1 king bed',
      breakfast: true,
      cancellation: 'No prepayment needed',
      oldPrice: 'PKR 105,000',
      newPrice: 'PKR 77,000',
      taxes: '+ PKR 4,000 taxes and fees',
      description: 'Each unit is fitted with a terrace offering mountain views, a cable flat-screen TV, a dining area, a well-fitted kitchen and a private bathroom with bidet, free toiletries and slippers. A fridge, a dishwasher and oven are also offered, as well as a coffee machine.'
    },
    {
      id: 3,
      name: 'Goldcrest Luxury Apartments',
      image: Goldcrest,
      image2: Boutiqua,
      image3: MakkahHotel,
      rating: 8.3,
      location: 'Islamabad • 5.0 km from downtown',
      deal: 'Seasonal Offer',
      roomType: 'Luxury Suite • 2 queen beds',
      breakfast: true,
      cancellation: 'Free cancellation',
      oldPrice: 'PKR 37,350',
      newPrice: 'PKR 32,410',
      taxes: '+ PKR 3,586 taxes and fees',
      description: 'The hotel will provide guests with air-conditioned rooms with a desk, an electric tea pot, a minibar, a safety deposit box, a flat-screen TV and a shared bathroom with a shower. Guest rooms include a closet.'
    },
    {
      id: 4,
      name: 'Lahore Continental Hotel',
      image: LahoreContinent,
      image2: Milan,
      image3: Bed,
      rating: 8.1,
      location: 'Islamabad • 5.0 km from downtown',
      deal: 'Seasonal Offer',
      roomType: 'Luxury Suite • 2 queen beds',
      breakfast: true,
      cancellation: 'Free cancellation',
      oldPrice: 'PKR 40,350',
      newPrice: 'PKR 32,410',
      taxes: '+ PKR 3,586 taxes and fees',
      description: 'Located in Islamabad, 5.6 miles from Shah Faisal Mosque, Comfort Family Villa features views of the garden. Each room at the 5-star hotel has mountain views, and guests can enjoy access to a garden and to a terrace. The property provides a 24-hour front desk, airport transportation, room service and free WiFi.'
    },
    {
      id: 5,
      name: 'Best Western Premier Hotel Gulberg',
      image: Western,
      image2: Phoenix,
      image3: Premire,
      rating: 8.8,
      location: 'Islamabad • 5.0 km from downtown',
      deal: 'Seasonal Offer',
      roomType: 'Luxury Suite • 2 queen beds',
      breakfast: true,
      cancellation: 'Free cancellation',
      oldPrice: 'PKR 40,350',
      newPrice: 'PKR 32,410',
      taxes: '+ PKR 3,586 taxes and fees',
      description: 'The motel will provide guests with air-conditioned rooms offering a desk, a coffee machine, a fridge, a dishwasher, a safety deposit box, a flat-screen TV, a terrace and a private bathroom with a bidet. The rooms include an electric tea pot, while selected rooms also feature a balcony and others also feature city views. All rooms in Clifton Royal Family Guest House are equipped with free toiletries and an iPad.'
    },
    {
      id: 6,
      name: 'Mukhtar Homes Bahria Town Lahore',
      image: Mukhtar,
      image2: Premium,
      image3: RamdaHotel,
      rating: 8.5,
      location: 'Islamabad • 5.0 km from downtown',
      deal: 'Seasonal Offer',
      roomType: 'Luxury Suite • 2 queen beds',
      breakfast: true,
      cancellation: 'Free cancellation',
      oldPrice: 'PKR 40,350',
      newPrice: 'PKR 32,410',
      taxes: '+ PKR 3,586 taxes and fees',
      description: 'Bahria Enclave islamabad offers accommodations in Islamabad, 15 miles from Shah Faisal Mosque and 13 miles from Lake View Park. Both free Wifi and parking on-site are available at the apartment free of charge. Islamabad Golf Club is 8.7 miles away and Jinnah Convention Centre is 9.1 miles from the apartment.'
    },
    {
      id: 7,
      name: 'Defence Raya Golf & Country Club',
      image: Defence,
      image2: Restore,
      image3: Rose,
      rating: 7.2,
      location: 'Islamabad • 5.0 km from downtown',
      deal: 'Seasonal Offer',
      roomType: 'Luxury Suite • 2 queen beds',
      breakfast: true,
      cancellation: 'Free cancellation',
      oldPrice: 'PKR 43,000',
      newPrice: 'PKR 38,000',
      taxes: '+ PKR 3,586 taxes and fees',
      description: 'Ideally set in the G-6 Sector district of Islamabad, Reina Boutique Hotel - G6 is located 4 miles from Shah Faisal Mosque, 5.6 miles from Lake View Park and 14 miles from Ayūb National Park. The property is around 24 miles from Taxila Museum, a 17-minute walk from Pakistan National Council of Arts and 1.9 miles from Pakistan Sports Complex. The property has a 24-hour front desk, airport transportation, room service and free WiFi.'
    },
    {
      id: 8,
      name: 'Premier Inn Express Gulberg',
      image: Premier,
      image2: RosePetal,
      image3: RosePetal2,
      rating: 7.8,
      location: 'Islamabad • 5.0 km from downtown',
      deal: 'Seasonal Offer',
      roomType: 'Luxury Suite • 2 queen beds',
      breakfast: true,
      cancellation: 'Free cancellation',
      oldPrice: 'PKR 43,000',
      newPrice: 'PKR 38,000',
      taxes: '+ PKR 3,586 taxes and fees',
      description: 'Genius discounts at this property are subject to booking dates, stay dates, and other available deals Located 14 miles from Shah Faisal Mosque, Jungle Retreat Resort offers a garden, and air-conditioned accommodations with a balcony and free WiFi.'
    },
    {
      id: 9,
      name: 'The Oasis Hotel',
      image: Oasis,
      image2: Shelton,
      image3: Western,
      rating: 8.2,
      location: 'Islamabad • 5.0 km from downtown',
      deal: 'Seasonal Offer',
      roomType: 'Luxury Suite • 2 queen beds',
      breakfast: true,
      cancellation: 'Free cancellation',
      oldPrice: 'PKR 40,000',
      newPrice: 'PKR 38,000',
      taxes: '+ PKR 3,586 taxes and fees',
      description: 'Offering a garden and barbecue facilities, Blue Moon Residency Jinnah Super in Islamabad is close to Safa Gold Mall and Saidpur Village. This bed and breakfast features free private parking and a shared kitchen. The bed and breakfast offers city views, a sun terrace, a 24-hour front desk, and free Wifi is available throughout the property.'
    },
    {
      id: 11,
      name: 'Luxus Grand Hotel',
      image: Luxus,
      image2: SuitImg,
      image3: Mukhtar,
      rating: 8.2,
      location: 'Islamabad • 5.0 km from downtown',
      deal: 'Seasonal Offer',
      roomType: 'Luxury Suite • 2 queen beds',
      breakfast: true,
      cancellation: 'Free cancellation',
      oldPrice: 'PKR 45,000',
      newPrice: 'PKR 37,100',
      taxes: '+ PKR 3,586 taxes and fees',
      description: 'Offering air-conditioned rooms in the E-11 Sector district of Islamabad, Luxury Guest House in E11 by Urban Homes is 4.8 miles from Shah Faisal Mosque. This guest house provides free private parking and a shared kitchen. The guest house features mountain views, a picnic area, a 24-hour front desk, and free Wifi is available throughout the property.'
    },
    {
      id: 12,
      name: 'Shelton Rezidor Hotel Gulberg Lahore',
      image: Shelton,
      image2: Rose,
      image3: Dove,
      rating: 8.2,
      location: 'Islamabad • 5.0 km from downtown',
      deal: 'Seasonal Offer',
      roomType: 'Luxury Suite • 2 queen beds',
      breakfast: true,
      cancellation: 'Free cancellation',
      oldPrice: 'PKR 54,000',
      newPrice: 'PKR 50,100',
      taxes: '+ PKR 3,586 taxes and fees',
      description: 'At the guest house, every unit includes a wardrobe. A terrace, a satellite flat-screen TV with streaming services, an air conditioning, and a heating are offered in all units. At the guest house, units include a private bathroom with slippers and free toiletries.'
    },
    {
      id: 13,
      name: 'Hotel One The Mall, Lahore',
      image: One,
      image2: Defence,
      image3: MakkahHotel,
      rating: 6.2,
      location: 'Islamabad • 5.0 km from downtown',
      deal: 'Seasonal Offer',
      roomType: 'Luxury Suite • 2 queen beds',
      breakfast: true,
      cancellation: 'Free cancellation',
      oldPrice: 'PKR 40,000',
      newPrice: 'PKR 35,100',
      taxes: '+ PKR 3,586 taxes and fees',
      description: 'Offering city views, Decent Lodge Guest House in Islamabad features accommodations, a garden, and a terrace. There is a private entrance at the guest house for the convenience of those who stay. The guest house also offers free Wifi and free private parking.'
    },
    {
      id: 14,
      name: 'Hotel HS1 ',
      image: HotelHS1,
      image2: RamdaHotel,
      image3: Western,
      rating: 5.2,
      deal: 'Seasonal Offer',
      roomType: 'Luxury Suite • 2 queen beds',
      breakfast: true,
      cancellation: 'Free cancellation',
      oldPrice: 'PKR 40,000',
      newPrice: 'PKR 35,100',
      taxes: '+ PKR 3,586 taxes and fees',
      description: 'The Life Style Lodges opp Centaurus Mall is a recently renovated guest house in Islamabad near Safa Gold Mall. The guest house, set in a building dating back to 2013, is 2.1 miles from Shah Faisal Mosque and 7.4 miles from Lake View Park. There is an outdoor fireplace and guests can access free Wifi and free private parking.'
    },
    {
      id: 15,
      name: 'Faletti Express- Shimla Hill',
      image: Faletti,
      image2: RosePetal2,
      image3: Gulberg,
      rating: 5.6,
      deal: 'Seasonal Offer',
      roomType: 'Luxury Suite • 2 queen beds',
      breakfast: true,
      cancellation: 'Free cancellation',
      oldPrice: 'PKR 46,000',
      newPrice: 'PKR 35,100',
      taxes: '+ PKR 3,586 taxes and fees',
      description: 'Shah Faisal Mosque in Islamabad, Hayat Grand Guest House provides accommodations with access to a steam room. A hot tub and a car rental service are available for guests. There is a sun terrace and guests can access free Wifi and free private parking.'
    }
  ]

  const countries = [
    { name: "Countries" }, { name: "Regions" },
    { name: "Cities" }, { name: "Districts" },
    { name: "Airports" }, { name: "Hotels" },
    { name: "Places of interest" }
  ]

  const Homes = [
    { name: "Homes" }, { name: "Apartments" },
    { name: "Resorts" }, { name: "Villas" },
    { name: "Hotels" }, { name: "B&Bs" },
    { name: "Guest Houses" }
  ]

  const Unique = [
    { name: "Unique places to stay" }, { name: "Reviews" },
    { name: "Discover monthly stays" }, { name: "Travel articles" },
    { name: "Seasonal and holiday deals" }, { name: "Traveller Review Awards" }
  ]

  const Car = [
    { name: "Car rental" }, { name: "Flight finder" },
    { name: "Restaurant reservations" }, { name: "Booking.com for Travel Agents" },
  ]

  const Coronavirus = [
    { name: "Coronavirus (COVID-19) FAQs" }, { name: "About Booking.com" },
    { name: "Customer Service Help" }, { name: "Partner help" },
    { name: "Careers" }, { name: "Sustainability" },
    { name: "Press Center" }, { name: "Safety Resource Center" },
    { name: "Investor relations" }, { name: "Terms & Conditions" },
    { name: "Partner dispute" }, { name: "How We Work" },
    { name: "Privacy & cookie statement" }, { name: "Modern Slavery Statement" },
    { name: "Human Rights Statement" }, { name: "Corporate contact" },
    { name: "Content guidelines and reporting" }
  ]

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

      <Box className='container mb-3'>
        <Box className='my-2'>
          {CityBtn.map((btn) => <Button sx={{ textTransform: 'none' }} className='text-dark'
            varian="text">{btn.name}{btn.icon}</Button>
          )}
        </Box>
        <Box
          sx={{
            display: 'flex', gap: '10px',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          }}>
          <Box
            sx={{
              width: { xs: "100%", md: "30%", },
              border: "1px solid #ddd",
              padding: "15px", borderRadius: "10px",
              backgroundColor: "#f9f9f9",
            }}>
            {filters.map((filter, index) => (
              <Box key={index}>
                <Typography className='my-2'
                  variant="subtitle1"
                  sx={{ fontWeight: "bold" }} >
                  {filter.category}:
                </Typography>
                {filter.options.map((option, idx) => (
                  <Box key={idx}
                    sx={{
                      display: "flex", alignItems: "center",
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
              </Box>
            ))}
          </Box>
          <Box>
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
              <Box>
                <Typography variant="h5" className="text-black fw-bold" sx={{ marginBottom: '20px' }}>
                  Lahore: 611 properties found
                </Typography>
                <Button variant='outlined' className='text-dark fs-6' sx={{ textTransform: 'none' }}>
                  <SwapVertIcon className='fs-5 me-1'/> Sort by: Our top picks <KeyboardArrowUpIcon />
                </Button>
              </Box>
              <Box>
                <Button className='rounded-5 px-2 gap-2' sx={{ background: "#ddd" }}>
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
                }}>
                <Box
                  sx={{
                    width: { xs: '100%', sm: '30%' },
                    position: 'relative',
                  }}>
                  <img src={hotel.image} alt={Image}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  {hotel.breakfast && (
                    <Chip label="Breakfast included"
                      sx={{
                        position: 'absolute',
                        top: '10px', left: '10px',
                        backgroundColor: '#28a745', color: '#fff',
                        fontWeight: 'bold',
                      }}
                    />
                  )}
                  <FavoriteBorderIcon
                    sx={{
                      position: 'absolute',
                      top: '10px', right: '10px',
                      backgroundColor: '#fff',
                      borderRadius: '50%', padding: '5px',
                      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
                      color: '#0071c2',
                    }} />
                </Box>

                <CardContent
                  sx={{
                    flex: 1,
                    padding: '20px', display: 'flex',
                    flexDirection: 'column', gap: '10px',
                  }}>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {hotel.name}
                    </Typography>
                    <Typography className='px-2 py-1 rounded-1'
                      variant="body2"
                      sx={{
                        fontSize: '14px',
                        fontWeight: 'bold', color: '#fff',
                        background: '#003B95'
                      }}> {hotel.rating}
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
                  <Box display="flex" alignItems="center"
                    justifyContent="space-between" mt="auto">
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{
                          textDecoration: 'line-through',
                          fontSize: '14px', color: '#888',
                        }}>
                        {hotel.oldPrice}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 'bold', color: '#0071c2' }}>
                        {hotel.newPrice}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {hotel.taxes}
                      </Typography>
                    </Box>
                    <Button
                      onClick={() => navigate("/hotel-availibility", { state: { hotel } })}
                      variant="contained"
                      sx={{
                        backgroundColor: "#0071c2",
                        color: "#fff", textTransform: "none",
                        fontWeight: "bold",
                      }}>
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
                    className="mt-3 text-white ms-2">
                    Register
                  </Button>
                </Box>
                <Box>
                  <img width={100} src={GiftImg} alt="Img" />
                </Box>
              </Box>
            </Card>
            <Box>
              {SecondHotelData.map((hotel) => (
                <Card className="mt-3"
                  key={hotel.id}
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    borderRadius: '10px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    overflow: 'hidden',
                    border: '1px solid #ddd',
                    marginBottom: '20px',
                    color: '#0071c2',
                  }} >
                  <Box
                    sx={{
                      width: { xs: '100%', sm: '30%' },
                      position: 'relative',
                    }}>
                    <img src={hotel.image} alt={hotel.name}
                      style={{
                        width: '100%', height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    {hotel.breakfast && (
                      <Chip
                        label="Breakfast included"
                        sx={{
                          position: 'absolute',
                          top: '10px', left: '10px',
                          backgroundColor: '#28a745',
                          color: '#fff', fontWeight: 'bold',
                        }}
                      />
                    )}
                    <FavoriteBorderIcon
                      sx={{
                        position: 'absolute',
                        top: '10px', right: '10px',
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
                      flex: 1, padding: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }} >
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {hotel.name}
                      </Typography>
                      <Typography
                        className="px-3 py-1"
                        variant="body2"
                        sx={{
                          fontSize: '14px', fontWeight: 'bold',
                          color: '#fff',
                          background: '#003B95',
                        }}>
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

                    <Box display="flex" alignItems="center" justifyContent="space-between" mt="auto">
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{
                            textDecoration: 'line-through',
                            fontSize: '14px', color: '#888',
                          }}>
                          {hotel.oldPrice}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0071c2' }}>
                          {hotel.newPrice}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {hotel.taxes}
                        </Typography>
                      </Box>
                      <Button
                        onClick={() => navigate('/hotel-availibility', { state: { hotel } })}
                        variant="contained"
                        sx={{
                          backgroundColor: '#0071c2',
                          color: '#fff',
                          textTransform: 'none',
                          fontWeight: 'bold',
                        }}>
                        See availability
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              ))}
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <Button variant="outlined" sx={{ width: '50%', fontWeight: 'bold', py: 1 }}>
                  Load more results
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* footer */}
      <Box className='my-3' sx={{ background: '#003B95' }}>
        <Box className='d-flex justify-content-center py-2' sx={{ borderBottom: '1px solid #fff' }}>
          <Button variant='outlined' className='fw-bold py-1 text-white'>Load more results</Button>
        </Box>
        <Box className='container'>
          {FooterBtn.map((btn) => <Button sx={{ textTransform: 'none' }} className='text-white'
            varian="text">{btn.name}</Button>
          )}
        </Box>
      </Box>

      <Box sx={{ background: '#F5F5F5' }} container>
        <Grid container spacing={3} className="my-4">
          <Grid item xs={6} sm={6} md={2.4}>
            <Box className='ms-3 ps-4 d-none d-md-block text-primary'>
              {countries.map((item, index) => (
                <Typography key={index} className="py-1 ms-5 ps-4">
                  {item.name}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={2.4}>
            <Box className='ms-4 d-none d-md-block text-primary'>
              {Homes.map((item, index) => (
                <Typography key={index} className="py-1">
                  {item.name}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={2.4}>
            <Box className='ms-3 text-primary'>
              {Unique.map((item, index) => (
                <Typography key={index} className="py-1 ms-4">
                  {item.name}
                </Typography>))}
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={2.4}>
            <Box className='ms-5 text-primary'>
              {Car.map((item, index) => (
                <Typography key={index} className="py-1">
                  {item.name}
                </Typography>))}
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={2.4}>
            <Box className='d-none d-md-block text-primary'>
              {Coronavirus.map((item, index) => (
                <Typography key={index} className="py-1">
                  {item.name}</Typography>))}
            </Box>
          </Grid>
        </Grid>
        <Box className="d-flex flex-column align-items-center text-center">
          <Typography className="container py-3">
            Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.
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
        </Box>
      </Box >
    </>
  )
}

export default HotelDetail;