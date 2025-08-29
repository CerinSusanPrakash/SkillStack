import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Typography from '@mui/material/Typography';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password,
      });

      const data = response.data;

      if (response.status === 200) {
        localStorage.setItem('email', email);
        navigate('/userpage');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || 'Login failed');
      } else {
        setError('An error occurred. Please try again.');
      }
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
            component="form"
            onSubmit={handleLogin}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >

            {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
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
                Login
            </Typography>
            <TextField
              id="emailid"
              label="Email id"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              sx={{ marginBottom: 2 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ marginBottom: 2 }}
            >
              Login
            </Button>
            <div>
              Do not have an account?{' '}
              <Button style={{ textDecoration: "none", color: "inherit" }}>
                <Link to={'/signup'}>Signup</Link>
              </Button>
            </div>
          </Box>
        </Paper>
      </div>
    </div>
  );
};

export default Login;
