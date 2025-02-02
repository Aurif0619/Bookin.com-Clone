import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography, IconButton, Drawer, useMediaQuery, Grid } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import USAflag from '../../assets/AmericaFlag.png'
import { useNavigate } from "react-router";

function Navbar() {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const isMobile = useMediaQuery("(max-width:768px)");
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const navigate = useNavigate();
    return (
        <>
            <AppBar sx={{ boxShadow: "none", background: "#003B95" }}>
                <Toolbar className="container d-flex justify-content-between align-items-center">
                    <Typography
                        variant="h6"
                        sx={{
                            color: "#fff", fontWeight: "bold",
                            fontSize: "1.5rem",
                            flexGrow: isMobile ? 1 : "unset",
                        }}> Booking.com
                    </Typography>

                    {!isMobile ? (
                        <Box sx={{ display: "flex", alignItems: "center" }} className="gap-2">
                            <Button variant="text" className="text-white">
                                PKR
                            </Button>
                            <Button> <img className="rounded-5"
                                src={USAflag}
                                alt="USA flag"
                                style={{ width: "25px", height: "25px" }}
                            />
                            </Button>
                            <Button sx={{ color: "#fff", minWidth: "auto" }}>
                                <HelpOutlineIcon />
                            </Button>
                            <Button variant="outlined"
                                className="text-white"
                                sx={{ textTransform: "capitalize" }} > List your property
                            </Button>
                            <Button variant="outlined"
                                className="text-primary bg-white fw-bold border-white"
                                sx={{ textTransform: "capitalize" }}> Register
                            </Button>
                            <Button variant="outlined" className="text-primary bg-white fw-bold border-white"
                                sx={{ textTransform: "capitalize" }}>  Sign in
                            </Button>
                        </Box>
                    ) : (<IconButton onClick={toggleDrawer} sx={{ color: "#fff" }}>
                        <MenuIcon />
                    </IconButton>)}
                </Toolbar>
            </AppBar>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                <Box
                    sx={{
                        width: 250,
                        backgroundColor: "#003B95",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "16px",
                    }}
                >
                    {/* Top Section */}
                    <Box className="d-flex justify-content-center align-items-center gap-3">
                        <Button sx={{ color: "#fff", fontWeight: "bold", fontSize: "14px" }}>PKR</Button>
                        <Button sx={{ color: "#fff" }}>
                            <img
                                className="rounded-5"
                                src={USAflag}
                                alt="USA Flag"
                                style={{ width: "25px", height: "25px" }}
                            />
                        </Button>
                        <Button sx={{ color: "#fff" }}>
                            <HelpOutlineIcon sx={{ color: "#fff" }} />
                        </Button>
                    </Box>

                    <Box className="mt-3 d-flex justify-content-center gap-1">
                        <Button variant="contained" sx={{textTransform: 'none', backgroundColor: "#FFC107", color: "#003B95", fontWeight: "bold" }}>
                            Register
                        </Button>
                        <Button variant="contained" sx={{textTransform: 'none',  backgroundColor: "#FF5722", color: "#fff", fontWeight: "bold" }}>
                            Signin
                        </Button>
                        <Button 
                            onClick={() => navigate("/home-section")}
                            variant="contained"
                            sx={{textTransform: 'none', backgroundColor: "#4CAF50", color: "#fff", fontWeight: "bold" }}>
                            Home
                        </Button>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
}

export default Navbar;