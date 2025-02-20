import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Snackbar, Alert, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { name: "", email: "", password: "" },
  });
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const onSubmit = (data) => {
    console.log("Register Data:", data);
    
    localStorage.setItem("user", JSON.stringify(data));

    const accessToken = "dummyAccessToken";
    localStorage.setItem("accessToken", accessToken);

    setSnackbarMessage("Registration Successful! Redirecting to Sign In...");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);

    setTimeout(() => navigate("/sign-in"), 2000);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        padding: "20px",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "#1e293b", marginBottom: "20px" }}
      >
        Register
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "white",
          padding: "24px",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          {...register("name", { required: "Name is required" })}
          error={!!errors.name}
          helperText={errors.name?.message}
          sx={{ marginBottom: "16px" }}
        />

        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
          sx={{ marginBottom: "16px" }}
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          variant="outlined"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Password must be at least 6 characters" },
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
          sx={{ marginBottom: "24px" }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#3b82f6",
            color: "white",
            padding: "10px",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#2563eb" },
          }}
        >
          Register
        </Button>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={snackbarSeverity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Register;