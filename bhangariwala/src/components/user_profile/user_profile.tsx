import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './userProfile.css'; 

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'Sabbir Hossain',
    email: 'Sabbir@example.com',
    mobile: '017********',
    gender: 'Male',
    address: 'Dhaka,Bangladesh',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log('User data updated:', user);
  };

  return (
    <div className="profile-container">
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Avatar sx={{ width: 100, height: 100 }} />
        <Box sx={{ ml: 2 }}>
          <Typography variant="h5">{user.name}</Typography>
          <Typography variant="body1" color="text.secondary">{user.email}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={user.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Email Address"
          variant="outlined"
          name="email"
          value={user.email}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Mobile Number"
          variant="outlined"
          name="mobile"
          value={user.mobile}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Gender"
          variant="outlined"
          name="gender"
          value={user.gender}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Address"
          variant="outlined"
          name="address"
          value={user.address}
          onChange={handleChange}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Box>
      <br />
      <br />
    </div>
  );
};

export default UserProfile;
