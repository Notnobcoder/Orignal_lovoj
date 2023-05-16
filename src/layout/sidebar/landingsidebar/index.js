import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./scss/index.scss";
import man from "../../../assests/images/man.svg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Battery0BarOutlinedIcon from "@mui/icons-material/Battery0BarOutlined";
import { ImGift } from "react-icons/im";
import { FiShoppingCart, FiHelpCircle } from "react-icons/fi";
import { BsBookmarkHeart, BsChatText } from "react-icons/bs";
import { TbBellRinging } from "react-icons/tb";
import {
  HiOutlineCube,
  HiOutlineLockClosed,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

export const LandingSideBar = ({ isHidden, setHidden }) => {
  return (
    <div
      className={`${
        isHidden ? "main-sidebar-landing hidden" : "main-sidebar-landing"
      }`}
    >
      <AiOutlineDoubleLeft
        onClick={() => setHidden(true)}
        className="arrow-left"
      />
      <div className="landing-sidebar__profile">
        <Avatar alt="Remy Sharp" src={man} sx={{ width: 60, height: 60 }} />
        <div className="landing-sidebar__profile--details">
          <p className="name">Jacob</p>
          <div className="location">
            {/* <HiOutlineLocationMarker
              style={{ color: "rgba(1, 114, 182, 1)", fontSize: "16px" }}
            /> */}
            <span className="address">New Dehli, India</span>
          </div>
        </div>
      </div>
      <div className="landing-sidebar__list">
        <div className="landing-sidebar__list--item">
          <Battery0BarOutlinedIcon
            style={{
              fontSize: "20px",
              fontWeight: 200,
              color: "rgba(1, 114, 182, 1)",
            }}
          />
          <span>My Orders</span>
        </div>
        <div className="landing-sidebar__list--item">
          <ImGift
            style={{
              fontSize: "20px",
              fontWeight: 200,
              color: "rgba(1, 114, 182, 1)",
            }}
          />
          <span>My Rewards</span>
        </div>
        <div className="landing-sidebar__list--item">
          <FiShoppingCart
            style={{
              fontSize: "20px",
              fontWeight: 200,
              color: "rgba(1, 114, 182, 1)",
            }}
          />

          <span>My Cart</span>
        </div>
        <div className="landing-sidebar__list--item">
          <BsBookmarkHeart
            style={{
              fontSize: "20px",
              fontWeight: 200,
              color: "rgba(1, 114, 182, 1)",
            }}
          />

          <span>My Wishlist</span>
        </div>
        <div className="landing-sidebar__list--item">
          <FaUserCircle
            style={{
              fontSize: "20px",
              fontWeight: 200,
              color: "rgba(1, 114, 182, 1)",
            }}
          />
          <span>My Account</span>
        </div>
        <div className="landing-sidebar__list--item">
          <TbBellRinging
            style={{
              fontSize: "20px",
              fontWeight: 200,
              color: "rgba(1, 114, 182, 1)",
            }}
          />
          <span>My Notifications</span>
        </div>
        <div className="landing-sidebar__list--item">
          <BsChatText
            style={{
              fontSize: "20px",
              fontWeight: 200,
              color: "rgba(1, 114, 182, 1)",
            }}
          />
          <span>My Chats</span>
        </div>
        <div className="landing-sidebar__list--item">
          <HiOutlineCube
            style={{
              fontSize: "20px",
              fontWeight: 200,
              color: "rgba(1, 114, 182, 1)",
            }}
          />
          <span>Sell on LOVOJ</span>
        </div>
        <div className="landing-sidebar__list--item">
          <RiSettings4Line
            style={{
              fontSize: "20px",
              fontWeight: 200,
              color: "rgba(1, 114, 182, 1)",
            }}
          />
          <span>Settings</span>
        </div>
        <div className="landing-sidebar__list--item">
          <FiHelpCircle
            style={{
              fontSize: "20px",
              fontWeight: 200,
              color: "rgba(1, 114, 182, 1)",
            }}
          />
          <span>Help Center</span>
        </div>
        <div className="landing-sidebar__list--item">
          <HiOutlineLockClosed
            style={{
              fontSize: "20px",
              fontWeight: 200,
              color: "rgba(1, 114, 182, 1)",
            }}
          />
          <span>Privacy policy</span>
        </div>
      </div>
    </div>
  );
};
