import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router";


const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Register Data:", data);
    navigate("/sign-in");
  };

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f3f4f6", padding: "20px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#1e293b",
          marginBottom: "20px",
        }}
      >
        Register
      </Typography>

      {/* Form */}
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
        {/* Name Field */}
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          {...register("name", { required: "Name is required" })}
          error={!!errors.name}
          helperText={errors.name?.message}
          sx={{ marginBottom: "16px" }}
        />

        {/* Email Field */}
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: 6,
              message: "Invalid email address",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
          sx={{ marginBottom: "16px" }}
        />

        {/* Password Field */}
        <TextField
          fullWidth
          type="password"
          label="Password"
          variant="outlined"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
          sx={{ marginBottom: "24px" }}
        />

        {/* Register Button */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#3b82f6",
            color: "white",
            padding: "10px",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#2563eb",
            },
          }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default Register;