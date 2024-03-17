import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import "./footerPage.css";
import YourLogo from "../../assets/images/logo/bhangariwala.png";
import { height, width } from "@mui/system";
const Footer = () => {
  return (
     <section className="footer">
      <div className="social">
        <div className="com-info">
            <img className="logo1" src={YourLogo} alt="logo"/>
            <h4>BHANGARIWALA</h4>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet! <br /> Lorem ipsum dolor sit amet consectetur amet someting do on this for <br /> save the  world</p>
        <div className="icon">
           <FacebookIcon/>
          <TwitterIcon/>
          <EmailIcon/>
        </div>
       <p>               © 2024 BhangariWala, All right reserved.</p>
      </div>

      <div className="Service" >
        <h3>Service</h3>
        <ul>
          <li>Web Development</li>
          <li>Mobile Development</li>
          <li>Graphic Design</li>
          <li>SEO</li>
        </ul>
      </div>
      <div className="company">
        <h3>Company</h3>
        <ul>
          <li>About</li>
          <li>Team</li>
          <li>Location</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="contect-info">
        <ul>
          <h3>Contact Info</h3>
          <li>123, New York, USA</li>
          <li>
            <Link href="tel:1234567890">+1234567890</Link>
          </li>
        </ul>
      </div>  
     </section>
  );
};
export default Footer;
