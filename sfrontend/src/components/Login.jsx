import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Paper, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // reset error
    try {
      const response = await axios.post('http://localhost:8000/api/login/', {
        email,
        password,
      });

      if (response.status === 200) {
        // Save email or token if you implement JWT
        localStorage.setItem('email', email);
        navigate('/userpage'); // redirect on success
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || 'Login failed');
      } else {
        setError('Network error. Please try again.');
      }
      console.error('Login error:', err);
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

            {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              sx={{ marginBottom: 2 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button type="submit" variant="contained" fullWidth sx={{ marginBottom: 2 }}>
              Login
            </Button>

            <Typography variant="body2">
              Don't have an account?{' '}
              <Link to="/signup" style={{ textDecoration: 'none', color: '#1976d2' }}>
                Signup
              </Link>
            </Typography>
          </Box>
        </Paper>
      </div>
    </div>
  );
};

export default Login;


// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { Button, Paper } from '@mui/material';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from './Navbar';
// import Typography from '@mui/material/Typography';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     try {
//       const response = await axios.post('http://localhost:8000/adduser/', {
//         email,
//         password,
//       });

//       if (response.status === 200) {
//         const data = response.data;

//         // Save token and user email in localStorage
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('email', email);

//         setSuccess('Login successful! Redirecting...');
//         setTimeout(() => {
//           navigate('/userpage');
//         }, 1000);
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (error) {
//       if (error.response) {
//         setError(error.response.data.message || 'Invalid credentials');
//       } else {
//         setError('An error occurred. Please try again.');
//       }
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//         <Paper
//           sx={{
//             width: 500,
//             padding: 4,
//             backgroundColor: '#fff',
//             borderRadius: 3,
//             boxShadow: 6,
//             border: '2px solid #1976d2',
//           }}
//         >
//           <Box
//             component="form"
//             onSubmit={handleLogin}
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//           >
//             {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
//             {success && <div style={{ color: 'green', marginBottom: '10px' }}>{success}</div>}

//             <Typography
//               variant="h4"
//               component="h1"
//               sx={{
//                 fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//                 fontWeight: 'bold',
//                 marginBottom: 2,
//                 color: '#1976d2',
//               }}
//             >
//               Login
//             </Typography>

//             <TextField
//               id="emailid"
//               label="Email"
//               variant="outlined"
//               fullWidth
//               sx={{ marginBottom: 2 }}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <TextField
//               id="password"
//               label="Password"
//               variant="outlined"
//               type="password"
//               fullWidth
//               sx={{ marginBottom: 2 }}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />

//             <Button type="submit" variant="contained" sx={{ marginBottom: 2 }}>
//               Login
//             </Button>

//             <div>
//               Don’t have an account?
//               <Button sx={{ alignSelf: 'start' }}>
//                 <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
//                   Signup
//                 </Link>
//               </Button>
//             </div>
//           </Box>
//         </Paper>
//       </div>
//     </div>
//   );
// };

// export default Login;



