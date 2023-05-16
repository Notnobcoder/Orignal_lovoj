import React from "react";
import "./scss/index.scss";
import { NavLink } from "react-router-dom";
import { Header, Footer } from "../../layout";
import { InputField, Button } from "../../components";
import { BottomToTop } from "../index";
import shirt from "../../assests/images/shirt.svg";
import kurti from "../../assests/images/kurti.svg";
import dressshirt from "../../assests/images/image6.png";
import whatsappImage from "../../assests/images/whatsapp.svg";
import { MainSection } from "./main-section";
import useSound from "use-sound";
import mp3File from "../../assests/video/ClickAudio.wav";

const sideScroll = (element, speed, distance, step) => {
  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    element.scrollLeft += step;
    scrollAmount += Math.abs(step);
    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
    }
  }, speed);
};

export const Dashboard = () => {
  const moveTop = () => {
    console.log(window.location.pathname);
    console.log(document.getElementById("bottom"));
    if (window.location.pathname) {
      let createa = document.createElement("a");
      createa.href = "#bottom";
      createa.style.cursor = "default";
      createa.click();
    }
  };
  const [play] = useSound(mp3File);
  const handleIncrease = () => {
    play();
  };

  const contentWrapper = React.useRef(null);

  return (
    <div>
      <Header />
      <div className="whatapp-chat">
        <img src={whatsappImage} alt="whatsappImage" />
      </div>
      <div className="main-dashboard h-auto">
        <div className="nested-dashbaord">
          <div className="heading-portion">
            {/* <h1> */}
            <span> Choose Your</span>{" "}
            <span className="show-heading">Own Styles With Your Designers</span>{" "}
            <span>We love to help people feel great about how they look</span>{" "}
            {/* </h1> */}
          </div>
          {/* cards */}

          <div className="cards" ref={contentWrapper}>
            <div className="nested-card" onClick={handleIncrease}>
              {/* <a href="#bottom" className="link-tag"> */}
              <NavLink
                to={"girdview"}
                onClick={moveTop}
                style={{ cursor: "default" }}
              >
                <div>Design Your</div>
                <div className="prod-name">Shirt</div>
                <img src={shirt} alt="shirt" />
                {/* </a> */}
              </NavLink>
            </div>
            <div className="nested-card" onClick={handleIncrease}>
              {/* <a href="#bottom" className="link-tag"> */}
              <NavLink
                to={"girdview"}
                onClick={moveTop}
                style={{ cursor: "default" }}
              >
                <div>Design Your</div>
                <div className="prod-name">Kurti</div>
                <img src={kurti} alt="kurti" />
              </NavLink>
              {/* </a> */}
            </div>
            <div className="nested-card" onClick={handleIncrease}>
              {/* <a href="#bottom" className="link-tag"> */}
              <NavLink
                to={"girdview"}
                onClick={moveTop}
                style={{ cursor: "default" }}
              >
                <div>Appointment with</div>
                <div className="prod-name">Accessories</div>
                <img src={dressshirt} alt="shirt" />
              </NavLink>
              {/* </a> */}
            </div>
          </div>
          <div className="left-right-btn">
            <button
              className="left-btn"
              onClick={() => {
                sideScroll(contentWrapper.current, 25, 250, -30);
              }}
            >
              <i className="fa-solid fa-arrow-left" />
            </button>
            <button
              onClick={() => {
                sideScroll(contentWrapper.current, 25, 250, 30);
              }}
              className="right-btn"
            >
              <i className="fa-solid fa-arrow-right" />
            </button>
          </div>

          {/* form div */}
          <div className="forms">
            <div className="first">
              <InputField
                placeholder="Location"
                type="text"
                height="60px"
                icons={
                  <i className="fa-solid fa-location-dot absolute top-5 left-3  icons"></i>
                }
              />
            </div>
            <div className="second">
              <InputField
                placeholder="Search Store or Designer Name"
                type="text"
                height="60px"
                width={"100%"}
                icons={
                  <i className="fas fa-search absolute top-5 left-3  icons"></i>
                }
              />
            </div>
          </div>
          {/* <h1>Helloo</h1> */}
          <MainSection />
        </div>
      </div>
      <div className="mainbody-footer">
        <Footer />
      </div>
      <BottomToTop />
    </div>
  );
};
