import React, { useState } from 'react';
import { Button, TextField, Typography, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, Email, Person } from '@mui/icons-material';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailPattern.test(value));
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setPasswordError(value.length < 6); // Example: Minimum length of 6 characters
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    // Handle form submission here
  };

  return (
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', width: '100%', maxWidth: '300px' }}>
        <Typography variant="h5" gutterBottom>Sign-Up</Typography>
        <TextField
          id="outlined-username"
          label="Username"
          variant="outlined"
          color="success"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person fontSize="small" />
              </InputAdornment>
            ),
          }}
        /><br /><br />
        <TextField
          id="outlined-email"
          label="Email"
          variant="outlined"
          color="success"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          error={emailError}
          helperText={emailError ? "Invalid email address" : ""}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email fontSize="small" />
              </InputAdornment>
            ),
          }}
        /><br /><br />
        <TextField
          id="outlined-password"
          label="Password"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          color="success"
          fullWidth
          value={password}
          onChange={handlePasswordChange}
          error={passwordError}
          helperText={passwordError ? "Password must be at least 6 characters" : ""}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} onMouseDown={(e) => e.preventDefault()}>
                  {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        /><br /><br />
        <Button variant="contained" fullWidth onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default Signup;
