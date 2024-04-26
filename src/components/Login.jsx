import React, { useState } from 'react';
import { Button, TextField, Typography, InputAdornment, IconButton } from '@mui/material';
import { Person, Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(e.target.value.length < 6);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    
    <div style={{ backgroundImage: `url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg')`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', maxWidth: '300px', width: '100%' }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography><br></br>
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
        /><br></br><br></br>
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
          style={{ marginBottom: '20px' }}
        />
        <Button variant="contained" fullWidth>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
