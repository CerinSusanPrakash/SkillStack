import React, { useState } from 'react';
import { TextField, Box, Paper, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

const Signup = () => {
  const [form, setForm] = useState({
    userName: '',
    userEmailId: '',
    userPhoneNumber: '',
    userPassword: '',
    userAddress: ''
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
      const data= {
    name: form.userName,         
    emailid: form.userEmailId,   
    phone_no: form.userPhoneNumber, 
    password: form.userPassword, 
    address: form.userAddress    
  };

    try {
      await axios.post("http://localhost:8000/adduser/", {
        name: form.userName,
        emailid: form.userEmailId,
        phone_no: form.userPhoneNumber,
        password: form.userPassword,
        address: form.userAddress
      });
      alert("User registered successfully!");
      console.log("Sending data to backend:", data);
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Registration failed!");
    }
  }

  return (
    <div>
      <Navbar />
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Paper sx={{ width: 500, padding: 4, borderRadius: 3, boxShadow: 6, border: '2px solid #1976d2' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            
            <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
              Sign Up
            </Typography>

            <TextField name="userName" label="Name" value={form.userName} onChange={handleChange} fullWidth />
            <TextField name="userEmailId" label="Email" value={form.userEmailId} onChange={handleChange} fullWidth />
            <TextField name="userPhoneNumber" label="Phone Number" value={form.userPhoneNumber} onChange={handleChange} fullWidth />
            <TextField name="userPassword" label="Password" type="password" value={form.userPassword} onChange={handleChange} fullWidth />
            <TextField name="userAddress" label="Address" value={form.userAddress} onChange={handleChange} multiline fullWidth sx={{ textarea: { minHeight: '60px' } }} />

            <Button variant='contained' sx={{ mt: 2 }} onClick={handleSubmit} fullWidth>
              Sign Up
            </Button>
          </Box>
          <br />
          Already have an account?
          <Button sx={{ alignSelf: 'start' }}>
              <Link to='/login' style={{ textDecoration: 'none', color: 'inherit' }}> Login</Link>
            </Button>
        </Paper>
      </Box>
    </div>
  );
}

export default Signup;
