import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./scss/index.scss";
import tailorlogo from "../../../assests/images/customize/tailorlogo.png";
import man from "../../../assests/images/man.svg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Battery0BarOutlinedIcon from "@mui/icons-material/Battery0BarOutlined";
import HomeIcon from "@mui/icons-material/Home";
import { ImGift } from "react-icons/im";
import { FiShoppingCart, FiHelpCircle } from "react-icons/fi";
import { BsBookmarkHeart, BsChatText } from "react-icons/bs";
import { TbBellRinging } from "react-icons/tb";
import { HiOutlineLockClosed } from "react-icons/hi";
import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
// import LinkIcon from "@mui/icons-material/Link";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import List from "@mui/material/List";
import ManIcon from "@mui/icons-material/Man";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import WomanIcon from "@mui/icons-material/Woman";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { NavLink } from "react-router-dom";

const initialState = [
  { id: 1, workType: "Shirt" },
  { id: 2, workType: "Shoe Body" },
  { id: 3, workType: "Trouser" },
  { id: 4, workType: "Jackets" },
];
const womenState = [
  { id: 1, workType: "Dress" },
  { id: 2, workType: "Chudier" },
];
export const CustomizeSideBar = ({ isHidden, setHidden, maleJson, femaleJson, setStyle, ChangeMale, ChangeFemale, ChangeSelection,tailorValue }) => {
  const [quicklinkopen, setQucikLinks] = useState(false);
  const [open, setOpen] = useState(false);
  const [eyeopen, setEyeOpen] = useState(false);

  const quickLinkClick = () => {
    setQucikLinks(!quicklinkopen);
  };
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div
      className={`${
        isHidden ? "main-sidebar-customize hidden" : "main-sidebar-customize"
      }`}
    >
      <AiOutlineDoubleLeft
        onClick={() => setHidden(true)}
        className="arrow-left"
      />
      <div className="customize-sidebar__profile">
        <img src={tailorValue.img} alt="tailorlogo" width={"150px"} />
        <div className="link">
          <a href="/">LOVOJ.com/{ tailorValue.storeNumber }</a>
        </div>
      </div>
      <div className="main-collapse">
        <h1 className="py-2 pl-2 text-2xl ">Product</h1>
        <div className={"main-filter-list customizs-collpase"}>
          <ListItem button onClick={ () => {quickLinkClick(); ChangeMale(true, maleJson)}} className="inboxes pr-3">
            <ListItemIcon>
              <ManIcon />
            </ListItemIcon>
            <ListItemText primary="Gents" className="font-black"/>
            {quicklinkopen ? (
              <RemoveCircleOutlineIcon />
            ) : (
              <AddCircleOutlineIcon />
            )}
          </ListItem>
          <Collapse in={quicklinkopen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {maleJson && maleJson.length > 0 && maleJson.map((value, id) => {
                return (<>
                  { !value.skip ? (
                    <div className="filter--item py-2 flex justify-between" key={value.id} onClick = {() => {setStyle(false, id, value.name)}}>
                    {/* <input type="checkbox" name="" id="" /> */}
                    <label>{value.name}</label>
                    <div onClick={() => {setEyeOpen(!eyeopen); }}>
                      {eyeopen ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </div> 
                  </div> 
                  ) : (
                    <></>
                  ) }
                </>)
              })}
            </List>
          </Collapse>
        </div>
        <div className={"main-filter-list customizs-collpase"}>
          <ListItem button onClick={ () => {handleClick(); ChangeMale(false, femaleJson)}} className="inboxes pr-3">
            <ListItemIcon>
              <WomanIcon />
            </ListItemIcon>
            <ListItemText primary="Ladies" className="font-black" />
            {open ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              { femaleJson && femaleJson.length > 0 && femaleJson.map((value, id) => {
                return (
                  // <div className="filter__list">
                  <div
                    className="filter--item py-2 flex justify-between"
                    key={value.id}
                    onClick = {() => {setStyle(true, id, value.name)}}
                  >
                    {/* <input type="checkbox" name="" id="" /> */}
                    <label>{value.name}</label>
                    <div onClick={() => {setEyeOpen(!eyeopen); }}>
                      {eyeopen ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </div>
                  </div>
                  // </div>
                );
              })}
            </List>
          </Collapse>
        </div>
      </div>

      <div className="landing-sidebar__profile">
        <Avatar alt="Remy Sharp" src={tailorValue.img} sx={{ width: 60, height: 60 }} />
        <div className="landing-sidebar__profile--details">
          <p className="name">{ tailorValue.storeName  }</p>
          <div className="location">
            {/* <HiOutlineLocationMarker
              style={{ color: "rgba(1, 114, 182, 1)", fontSize: "16px" }}
            /> */}
            <span className="address">{ tailorValue.city + ", " + tailorValue.country }</span>
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
        <NavLink to={"addtowishlist"}>
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
        </NavLink>
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
