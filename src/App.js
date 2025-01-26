import './App.css';
import HomeSection from './components/home-section/HomeSection';
import HotelDetail from './components/hotel-detail/HotelDetail';
import Navbar from './components/navbar/Navbar';
import Register from './components/register/Register';
import SignIn from './components/signIn/SignIn';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import { BrowserRouter, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <HomeSection />
      <Navbar />
      <SignIn />
      <Register />
      <HotelDetail />

      {/* <Router>
        <Home path="/" />
        <NotFound default />
      </Router> */}
    </>
  );
}

export default App;