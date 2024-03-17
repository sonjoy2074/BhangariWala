import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
// Import your logo image here (replace with your logo path)
import YourLogo from '../../assets/images/logo/bhangariwala.png';
const Footer = () => {
    return (
      <Box sx={{ backgroundColor: 'background.paper', display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, mt: 'auto' }}>
        {/* Company Logo and Description */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={YourLogo} alt="Your Company Logo" style={{ width: 50, height: 50, marginRight: 10 }} />
          <Typography variant="body1" color="text.primary">
            Your Company Name - Short Description
          </Typography>
        </Box>
  
        {/* Social Media Links */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: 'fit-content' }}>
          <IconButton href="https://www.facebook.com/" target="_blank" rel="noreferrer" sx={{ color: 'text.primary' }}>
            <FacebookIcon />
          </IconButton>
          <IconButton href="https://twitter.com/" target="_blank" rel="noreferrer" sx={{ color: 'text.primary' }}>
            <TwitterIcon />
          </IconButton>
          <IconButton href="mailto:youremail@example.com" target="_blank" rel="noreferrer" sx={{ color: 'text.primary' }}>
            <EmailIcon />
          </IconButton>
        </Box>
  
        {/* Copyright Information */}
        <Typography variant="body2" color="text.secondary" align="center">
          © 2024 My Website | Built with React & Material-UI
          <Link href="#" underline="none" sx={{ color: 'text.primary' }}>
            Terms & Conditions
          </Link>
        </Typography>
      </Box>
    );
  };
  export default Footer;