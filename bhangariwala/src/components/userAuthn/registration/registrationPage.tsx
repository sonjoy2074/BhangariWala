import React from "react";
import "./registrationPage.css";
import Img1 from "../../../assets/images/log_Reg/img1.gif";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const registrationPage = () => {
  return (
    <section className="refPage">
      <div className="regImg">
        <img src={Img1} alt="" />
      </div>
      <div className="userInfo">
        <div className="uname">
          <input type="text" placeholder="First Name.." />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password"/>
        <input type="password" placeholder="Confirm Password" />
        <input type="text" placeholder="Phone No." />
        <textarea name="location" id="" placeholder="Loctaion"></textarea>
        <LocalizationProvider  dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker label="Date of Birth" className="datepicker"/>
          </DemoContainer>
        </LocalizationProvider>
        <button className="subBtn">Submitt</button>
      </div>
    </section>
  );
};

export default registrationPage;
