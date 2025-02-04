import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react'
import { Form, useForm } from 'react-hook-form';

const Register = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  });

  const onSubmit = (data) => {
    console.log('Register Data:', data);
  };

  return (
    <>
      <Box className="flex flex-col items-center justify-center min-h-screen p-4">
        <Typography variant='body2' className="text-2xl font-semibold mb-4">Register</Typography>
        <Form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm space-y-4">
          <TextField {...register('name', { required: 'Name is required' })}
            className="w-full p-2 border rounded"
            placeholder="Name" />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <TextField {...register('email', { required: 'Email is required' })}
            className="w-full p-2 border rounded"
            placeholder="Email" />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          <TextField type="password" {...register('password', { required: 'Password is required' })}
            className="w-full p-2 border rounded"
            placeholder="Password" />
          {errors.password && <Typography variant='body2' className="text-red-500">{errors.password.message}</Typography>}
          <Button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Register</Button>
        </Form>
      </Box>
    </>
  )
}

export default Register;