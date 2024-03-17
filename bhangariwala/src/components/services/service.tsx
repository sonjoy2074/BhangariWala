import React from "react";
import "./service.css";
import Img1 from "../../assets/images/services/img1.jpg";
import Img3 from "../../assets/images/services/img3.jpg";
import Img4 from "../../assets/images/services/img4.jpg";
import Img5 from "../../assets/images/services/img5.jpg";
const service = () => {
  return (
    <section className="container">
      <div className="sr-img">
        <h1>Services</h1>
      </div>
      <div className="block">
        <div className="b-img">
          <img src={Img1} alt="" />
        </div>
        <div className="b1-info">
          <h3>Free pickup</h3>
          <p>We offer free pickup service at your doorstap</p>
          <button>Pickup Request</button>
        </div>
      </div>
      <div className="block">
        <div className="b2-info">
          <h3>Accurate Weight</h3>
          <p>We  use certified calivrated weighing scales that gives <br /> complete assurance on accurate weight</p>
          <button>Pickup Request</button>
        </div>
        <div className="b-img">
          <img src={Img3} alt="" />
        </div>
      </div>
      <div className="block">
      <div className="b-img">
          <img src={Img4} alt="" />
        </div>
        <div className="b1-info">
          <h3>Right Value</h3>
          <p>We pay the right value to customers considertin minimal <br /> operational cost doorstap service</p>
          <button>Pickup Request</button>
        </div>
      </div>
      <div className="block">
      <div className="b2-info">
          <h3>Complimentary gift</h3>
          <p>We give Complimentary gift to customers with social massage <br /> on 'Plant Tree to save the Enviroment'</p>
          <button>Pickup Request</button>
        </div>
        <div className="b-img">
          <img src={Img5} alt="" />
        </div>
      </div>
    </section>
  );
};

export default service;
