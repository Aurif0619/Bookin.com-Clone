import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Navigate, useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("User Data:", data);
        navigate("/dashboard");
    };

    return (
        <Box className="flex-col items-center d-flex justify-center align-items-center min-h-screen p-4">
            <Typography variant="h5" className="text-2xl font-semibold mb-4">
                Sign In
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm space-y-4">
                <TextField
                    {...register('email', { required: 'Email is required' })}
                    className="w-full p-2 border rounded"
                    placeholder="Email"
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                <TextField
                    type="password"
                    {...register('password', { required: 'Password is required' })}
                    className="w-full p-2 border rounded"
                    placeholder="Password"
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                <Button type="submit" className="w-full text-black p-2 rounded">
                    Sign In
                </Button>
            </form>
            <Button
                onClick={() => navigate("/register")}
                variant="outlined"
                className="mt-4 text-primary bg-white fw-bold border-white">
                Create Account
            </Button>
        </Box>
    );
};

export default SignIn;
