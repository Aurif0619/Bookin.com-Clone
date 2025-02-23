import React from "react";
import Img404 from "../../assets/404.png";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const PageNotFound = () => {
  return (
    <Box className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <Box className="flex justify-center items-center mb-4 mt-5 pt-5" sx={{ height: "auto" }}>
        <img className="mt-5 pt-3"
          src={Img404} alt="404 Not Found"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>  
      <Typography variant="h3" sx={{ fontWeight: "bold", color: " gray.800" }}>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ color: "gray.600", mb: 4, maxWidth: "lg" }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </Typography>
      <Button component={Link}
        to="/" variant="contained"
        sx={{ mt: 2, px: 4, py: 2, borderRadius: "999px", fontWeight: "bold" }}>
        Go Back Home
      </Button>
    </Box>
  );
};

export default PageNotFound;
