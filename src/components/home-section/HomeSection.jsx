import { Box, Button, Toolbar, Typography, useTheme } from "@mui/material";
import React from "react";

const HomeSection = () => {
  const theme = useTheme(); 

  return (
    <>
      <Box 
        component="main"
        sx={{ p: 3, backgroundColor: theme.palette.primary.main, color: "#fff" }}
      >
        <Toolbar />
        <Box classNam='container'>

        <Box>
          <Box>
            <Button>

            </Button>
          </Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
          fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
          molestias libero. Reiciendis similique exercitationem consequatur, nobis
          placeat illo laudantium! Enim perferendis nulla soluta magni error,
          provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
          iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
        </Box>
        </Box>
      </Box>
      <Box className="bg-info">
        <Box className="d-flex"></Box>
      </Box>
    </>
  );
};

export default HomeSection;
