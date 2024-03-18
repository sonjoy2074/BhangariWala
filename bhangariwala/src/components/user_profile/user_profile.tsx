import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { DataGrid } from '@mui/x-data-grid';
import './userProfile.css'; 


const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'Sabbir Hossain',
    email: 'Sabbir@example.com',
    mobile: '017********',
    gender: 'Male',
    address: 'Dhaka,Bangladesh',
  });

  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log('User data updated:', user);
    setEditMode(false); 
  };

  const steps = ['Order Details', 'Payment', 'Confirmation'];
  const columns = [
    { field: 'id', headerName: 'Order ID', width: 150 },
    { field: 'productName', headerName: 'Product Name', width: 200 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'amount', headerName: 'Amount', width: 150 },
  ];

  const rows = [
    { id: 1, productName: 'Product A', date: '2024-03-15', amount: '$100' },
    { id: 2, productName: 'Product B', date: '2024-03-12', amount: '$150' },
    { id: 3, productName: 'Product C', date: '2024-03-10', amount: '$80' },
    { id: 4, productName: 'Product A', date: '2024-03-15', amount: '$100' },
    { id: 5, productName: 'Product B', date: '2024-03-12', amount: '$150' },
    { id: 6, productName: 'Product C', date: '2024-03-10', amount: '$80' },
    { id: 7, productName: 'Product A', date: '2024-03-15', amount: '$100' },
    { id: 8, productName: 'Product B', date: '2024-03-12', amount: '$150' },
    { id: 9, productName: 'Product C', date: '2024-03-10', amount: '$80' },
  ];


  return (
    <div className="profile-container">
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column',mt:5}}>

        <Box sx={{ flex: '30%', marginRight: '20px' }}>
          <img src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710720000&semt=sph" alt="Profile Image" style={{ width: '250px', height: '250px', borderRadius: '50%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} />
          <Button variant="outlined" onClick={toggleEditMode} sx={{ mt: 2, mr: 2, color: '#FFFFFF', backgroundColor: editMode ? '#FF5722' : '#4CAF50', '&:hover': { backgroundColor: editMode ? '#D84315' : '#66BB6A' } }}>{editMode ? 'Cancel' : 'Edit Profile'}</Button>
        </Box>
      </Box>

      <Box sx={{ flex: '70%', mr: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          User Information
        </Typography>
        <Box sx={{ borderBottom: '2px solid #4CAF50', marginBottom: '20px' }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={user.name}
            onChange={handleChange}
            fullWidth
            InputProps={{ 
              style: { color: editMode ? '#000000' : '#000000' },
              readOnly: !editMode
            }}
          />
          <TextField
            label="Email Address"
            variant="outlined"
            name="email"
            value={user.email}
            onChange={handleChange}
            fullWidth
            InputProps={{ 
              style: { color: editMode ? '#000000' : '#000000' },
              readOnly: !editMode
            }}
          />
          <TextField
            label="Mobile Number"
            variant="outlined"
            name="mobile"
            value={user.mobile}
            onChange={handleChange}
            fullWidth
            InputProps={{ 
              style: { color: editMode ? '#000000' : '#000000' },
              readOnly: !editMode
            }}
          />
          <TextField
            label="Gender"
            variant="outlined"
            name="gender"
            value={user.gender}
            onChange={handleChange}
            fullWidth
            InputProps={{ 
              style: { color: editMode ? '#000000' : '#000000' },
              readOnly: !editMode
            }}
          />
          <TextField
            label="Address"
            variant="outlined"
            name="address"
            value={user.address}
            onChange={handleChange}
            fullWidth
            InputProps={{ 
              style: { color: editMode ? '#000000' : '#000000' },
              readOnly: !editMode
            }}
          />
          {editMode && (
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          )}
        </Box>
        
        <Box  sx={{ mt: 10 }} >
        <Typography variant="h4" align="center" gutterBottom>
          Current Order Details
        </Typography>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Box sx={{ mt: 10 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Previous Orders
          </Typography>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              checkboxSelection
            />
          </div>
        </Box>
      </Box>
      
     
    </div>
  );
};

export default UserProfile;
