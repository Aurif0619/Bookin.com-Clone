import {
    AppBar,
    Box,
    Button,
    CssBaseline,
    Toolbar,
    Typography,
} from "@mui/material";
import React from "react";
import USAFlag from "../../assets/AmericaFlag.png";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

function Navbar() {
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar>
                <Toolbar className="container"
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: "1.5rem",
                        }}
                    >
                        Booking.com
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <Button
                            variant="text"
                            sx={{
                                color: "#fff",
                                fontSize: "1rem",
                                textTransform: "uppercase",
                            }}
                        >
                            PKR
                        </Button>

                        {/* Flag */}
                        <Button
                            sx={{
                                padding: 0,
                                minWidth: "auto",
                            }}
                        >
                            <img className="rounded-5"
                                src={USAFlag}
                                alt="USA Flag"
                                style={{
                                    width: "25px",
                                    height: "25px"
                                }}
                            />
                        </Button>

                        {/* Help Icon */}
                        <Button
                            sx={{
                                color: "#fff",
                                minWidth: "auto",
                            }}
                        >
                            <HelpOutlineIcon />
                        </Button>

                        {/* Register Button */}
                        <Button
                            variant="outlined"
                            className="text-primary bg-white fw-bold border-white"
                            sx={{
                                textTransform: "capitalize",
                                color: "#003580",
                                backgroundColor: "#fff",
                                borderColor: "#fff",
                                "&:hover": {
                                    backgroundColor: "#d9d9d9",
                                },
                            }}
                        >
                            Register
                        </Button>

                        {/* Sign In Button */}
                        <Button
                            variant="outlined"
                            className="text-primary bg-white fw-bold border-white"
                            sx={{
                                textTransform: "capitalize",
                                color: "#003580",
                                backgroundColor: "#fff",
                                borderColor: "#fff",
                                "&:hover": {
                                    backgroundColor: "#d9d9d9",
                                },
                            }}
                        >
                            Sign in
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;
