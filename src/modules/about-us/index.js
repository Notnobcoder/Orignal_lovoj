import React, { useEffect } from "react";
import "./scss/index.scss";
import appLOVOJ from "../../assests/images/applouoj.png";
import arrowSign from "../../assests/images/arrowSign.png";
import lemonlogo from "../../assests/images/lemonlogo.png";
import startups from "../../assests/images/startups.jpg";
import stpilogo from "../../assests/images/stpilogo.jpg";
import wiseguym from "../../assests/images/wiseguym.png";
import seedreed from "../../assests/images/microsoft.png";
import globalaccelator from "../../assests/images/globalaccelator.png";
import videoAbout from "../../assests/video/Media2.mp4";

import { GoLightBulb } from "react-icons/go";
import { IoBusinessOutline } from "react-icons/io5";
// import {MdOutlineAttachMoney} from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { AiOutlineMobile } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { Header, Footer } from "../../layout";

// import Aos from "aos";
// import "aos/dist/aos.css";

export const AboutUs = () => {
//   useEffect(() =>{
//     Aos.init({    
//      duration: 1400,easing: 'ease-in-sine', once: true
//     }) 
//  })
  return (
    <div>
      <Header />
      {/* content */}
      <div className="about-section h-auto">
        <div className="nested-about">
          <div className="header-section">
            <div className="child-nested-one">
              <h1>About Us</h1>
              <p>
                LOVOJ is World's 1st Bespoke Fashion Aggregator and SaaS for
                Fashion Industry. For the first time end-consumers can shop
                custom-made tailored clothing online from any
                designer/tailor/boutiques of their own choice replacing
                traditional mass produced readymade clothing. For the first time
                Buyer, Tailor and Fabric Supplier are brought together in one
                ecosystem.
              </p>
            </div>
            <div className="app-logo">
              {/* <img src={appLOVOJ} alt="appLOVOJ" /> */}
              <video
                src={videoAbout}
                typeof="video/mp4"
                autoPlay
                muted
                loop
                style={{ borderRadius: "8px", height: "710px", border: '2px solid black' }}
              ></video>
            </div>
          </div>
      </div>

      <Footer />
    </div>
    </div>
  );
};
