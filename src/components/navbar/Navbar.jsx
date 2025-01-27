import React from "react";
import { AppBar, Box, Button, Toolbar, Typography, IconButton, Drawer, useMediaQuery } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import USAFlag from "../../assets/AmericaFlag.png";

function Navbar() {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const isMobile = useMediaQuery("(max-width:768px)");
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <>
            <AppBar sx={{ boxShadow: "none", background: "#003B95" }}>
                <Toolbar className="container d-flex justify-content-between align-items-center" >
                    <Typography
                        variant="h6"
                        sx={{
                            color: "#fff", fontWeight: "bold",
                            fontSize: "1.5rem", flexGrow: isMobile ? 1 : "unset",
                        }}>
                        Booking.com
                    </Typography>

                    {!isMobile ? (
                        <Box sx={{ display: "flex", alignItems: "center" }} className="gap-2">
                            <Button variant="text" className="text-white">
                                PKR
                            </Button>
                            <Button>
                                <img
                                    className="rounded-5"
                                    src={USAFlag}
                                    alt="USA Flag"
                                    style={{ width: "25px", height: "25px" }}
                                />
                            </Button>
                            <Button sx={{ color: "#fff", minWidth: "auto" }}>
                                <HelpOutlineIcon />
                            </Button>
                            <Button
                                variant="outlined"
                                className="text-white"
                                sx={{ textTransform: "capitalize" }}
                            >
                                List your property
                            </Button>
                            <Button
                                variant="outlined"
                                className="text-primary bg-white fw-bold border-white"
                                sx={{ textTransform: "capitalize" }}
                            >
                                Register
                            </Button>
                            <Button
                                variant="outlined"
                                className="text-primary bg-white fw-bold border-white"
                                sx={{ textTransform: "capitalize" }}
                            >
                                Sign in
                            </Button>
                        </Box>
                    ) : (
                        <IconButton onClick={toggleDrawer} sx={{ color: "#fff" }}>
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                <Box className='pt-2'
                    sx={{
                        width: 250,
                        backgroundColor: "#003B95",
                        height: "100%",
                        flexDirection: "column",
                    }}
                >
                    <Button sx={{ color: "#fff", marginBottom: "10px" }}>PKR</Button>
                    <Button sx={{ color: "#fff", marginBottom: "10px" }}>
                        <Box
                            component="img"
                            src={USAFlag}
                            alt="USA Flag"
                            sx={{ width: 25, height: 25 }}
                        />
                    </Button>
                    <Button sx={{ color: "#fff", marginBottom: "10px" }}>
                        <HelpOutlineIcon sx={{ color: "#fff" }} />
                    </Button>
                    <Button sx={{ color: "#fff", marginBottom: "10px" }}>List your property</Button>
                    <Button sx={{ color: "#fff", marginBottom: "10px" }}>Register</Button>
                    <Button sx={{ color: "#fff", marginBottom: "10px" }}>Sign in</Button>
                </Box>
            </Drawer>
        </>
    );
}

export default Navbar;
