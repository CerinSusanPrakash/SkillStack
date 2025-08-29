import React, { useState } from 'react';
import { TextField, Box, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Typography from '@mui/material/Typography';

const Signup = () => {
  const [form, setForm] = useState({
    userName: '',
    userEmailId: '',
    userPhoneNumber: '',
    userPassword: '',
    userAddress: ''
  });
  
  const [emailError, setEmailError] = useState('');

  function capValue(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function checkEmailUnique() {
    try {
      const response = await axios.post('http://localhost:8000/check-email', { email: form.userEmailId });
      if (response.data.exists) {
        setEmailError('Email is already in use');
        return false;
      } else {
        setEmailError('');
        return true;
      }
    } catch (error) {
      console.error('Error checking email uniqueness:', error);
      setEmailError('Error checking email. Please try again later.');
      return false;
    }
  }

  async function valueAdd() {
    const isUnique = await checkEmailUnique();
    if (isUnique) {
      axios.post('http://localhost:8000/adduser', form)
        .then((res) => {
          alert('User registered successfully');
        })
        .catch((err) => {
          console.error('Error adding user:', err);
          alert('Error adding user. Please try again later.');
        });
    } else {
      alert('Please use a different email.');
    }
  }

  return (
    <div>
      <Navbar/>
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Paper 
        sx={{ 
            width: 500, 
            padding: 4, 
            backgroundColor: '#fff', 
            borderRadius: 3,
            boxShadow: 6,
            border: '2px solid #1976d2',  
        }}
        >
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2
            }}
          >
            <Button variant="outlined" sx={{ alignSelf: 'start' }}>
              <Link to={'/login'} style={{ textDecoration: 'none', color: 'inherit' }}>Back</Link>
            </Button>

            <Typography
                variant="h4"               
                component="h1"
                sx={{
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                fontWeight: 'bold',
                marginBottom: 2,
                color: '#1976d2',         
                }}
            >
                Sign Up
            </Typography>

            <TextField 
              id="name" 
              name="userName" 
              label="Name" 
              variant="outlined" 
              onChange={capValue} 
              value={form.userName} 
              fullWidth
            />
            <TextField 
              id="emailid" 
              name="userEmailId" 
              label="Email id" 
              variant="outlined" 
              onChange={capValue} 
              value={form.userEmailId} 
              onBlur={checkEmailUnique} 
              helperText={emailError} 
              error={!!emailError} 
              fullWidth
            />
            <TextField 
              id="phoneno" 
              name="userPhoneNumber" 
              label="Phone Number" 
              variant="outlined" 
              onChange={capValue} 
              value={form.userPhoneNumber} 
              fullWidth
            />
            <TextField 
              id="password" 
              name="userPassword" 
              label="Password" 
              variant="outlined" 
              onChange={capValue} 
              value={form.userPassword} 
              type="password" 
              fullWidth
            />
            <TextField 
              id="address" 
              name="userAddress" 
              label="Address" 
              variant="outlined" 
              onChange={capValue} 
              value={form.userAddress} 
              multiline
              fullWidth
              sx={{ textarea: { minHeight: '60px' } }}
            />
            <Button 
              variant='contained' 
              sx={{ marginTop: 2 }}
              onClick={valueAdd}
              disabled={!!emailError || !form.userName || !form.userEmailId || !form.userPhoneNumber || !form.userPassword || !form.userAddress}
              fullWidth
            >
              Sign Up
            </Button>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}

export default Signup;