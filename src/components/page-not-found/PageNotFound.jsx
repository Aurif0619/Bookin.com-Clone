import React from "react";
import Img404 from "../../assets/404.png";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <Box className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
        <img src={Img404} alt="404 Not Found" className="w-64 h-64 mb-6" />
        <Box variant='body2' className="text-4xl font-semibold text-gray-800">Oops! Page Not Found</Box>
        <p className="text-gray-600 mt-2">The page you are looking for does not exist.</p>
        <Link
          to="/"
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </Box>
    </> 
  );
};

export default PageNotFound;
