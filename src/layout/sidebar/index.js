import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./scss/index.scss";
import { Button } from "../../components";
import { NavLink } from "react-router-dom";
import { FiHelpCircle } from "react-icons/fi";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import List from "@mui/material/List";
import indianFlag from "../../assests/images/indianflag.svg";
import LinkIcon from "@mui/icons-material/Link";
import ListItem from "@mui/material/ListItem";
import man from "../../assests/images/man.svg";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import GroupIcon from "@mui/icons-material/Group";
import Facebook from "../../assests/images/mini-facebook.svg";
import Instagram from "../../assests/images/Instagram.svg";
import Twitter from "../../assests/images/Twitter.svg";
import LinkedIn from "../../assests/images/LinkedIn.svg";
import Youtube from "../../assests/images/YouTube.svg";
import BusinessIcon from "@mui/icons-material/Business";
import singaproeflag from "../../assests/images/singapore.png";

const initialState = [
  { id: 1, workType: "Tailor & Designer", link: "/account-registration" },
  { id: 2, workType: "Fabric", link: "/account-registration" },
  { id: 3, workType: "Sticting Factory", link: "/account-registration" },
  { id: 4, workType: "Accessories", link: "/account-registration" },
];

const pageLinks = [
  {
    id: 1,
    pageName: " Us",
    links: "/about-us",
  },
  {
    id: 2,
    pageName: "Product",
    links: "/",
  },
  {
    id: 3,
    pageName: "Media & Press",
    links: "/",
  },
  {
    id: 4,
    pageName: "Our Team",
    links: "/our-team",
  },
  {
    id: 5,
    pageName: "Contact Us",
    links: "/contact-us",
  },
  {
    id: 6,
    pageName: "Jobs",
    links: "/jobs",
  },
  {
    id: 7,
    pageName: " Center",
    links: "/help-center",
  },
];

export const SideBar = ({ isHidden, setHidden }) => {
  const [open, setOpen] = useState(false);
  const [quicklinkopen, setQucikLinks] = useState(true);
  const [addresses, setAddress] = useState(false);

  const quickLinkClick = () => {
    setQucikLinks(!quicklinkopen);
  };
  const addressClick = () => {
    setAddress(!addresses);
  };
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className={`${isHidden ? "main-sidebar hidden" : "main-sidebar"}`}>
      <AiOutlineDoubleLeft
        onClick={() => setHidden(true)}
        className="arrow-left"
      />
      <div className="main-sidebar__profile">
        <Avatar alt="Remy Sharp" src={man} sx={{ width: 60, height: 60 }} />
        <div className="main-sidebar__profile--details">
          <p className="name">Jacob</p>
          <div className="location">
            <span className="address">New Delhi, India</span>
          </div>
        </div>
      </div>
      <div className="main-sidebar__list">
        {/* Quick Links */}
        <div className={"main-sidebar__list--items"}>
          <ListItem button onClick={quickLinkClick} className="inboxes">
            <ListItemIcon style={{ paddingLeft: "-12px" }}>
              <LinkIcon />
            </ListItemIcon>
            <ListItemText primary="Quick Links" className="font-black" />
            {quicklinkopen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={quicklinkopen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {pageLinks.map((value) => {
                return (
                  <NavLink to={value.links} key={value.id}>
                    <ListItem button>
                      <ListItemText
                        className={"ml-6"}
                        primary={value.pageName}
                      />
                    </ListItem>
                  </NavLink>
                );
              })}
            </List>
          </Collapse>
        </div>

        <div className={"main-sidebar__list--items"}>
          <ListItem button onClick={handleClick} className="inboxes">
            <ListItemIcon style={{ paddingLeft: "-12px" }}>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Be our Partner" className="font-black" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {initialState.map((value, id) => {
                return (
                  <NavLink
                    to={`${value.link}/${value.workType}`}
                    key={value.id}
                  >
                    <ListItem button>
                      <ListItemText
                        className={"ml-6"}
                        primary={value.workType}
                      />
                    </ListItem>
                  </NavLink>
                );
              })}
            </List>
          </Collapse>
        </div>

        {/* Address */}
        <div className={"main-sidebar__list--items"}>
          <ListItem button onClick={addressClick} className="inboxes">
            <ListItemIcon style={{ paddingLeft: "-12px" }}>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary="Address" className="font-black" />
            {addresses ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={addresses} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem className="li-address">
                <img
                  src={indianFlag}
                  alt="indianflag"
                  width={"35px"}
                  height="35px"
                  className="mt-1 mr-1"
                />

                <p>
                  {" "}
                  Plot# 787/1353/3761, Lane No-01, Sampur, Bhubaneswar, India
                </p>
              </ListItem>
              <ListItem className="li-address">
                <img
                  src={singaproeflag}
                  alt="singaporeflag"
                  width={"35px"}
                  height="35px"
                  className="mt-1 mr-1"
                />

                <p> 20 Cecil Street, #05-03 Plus, Singapore-049705</p>
              </ListItem>
            </List>
          </Collapse>
        </div>

        {/* </List> */}
        <div className="login-signup-header flex justify-center items-center gap-2 ">
          <NavLink to={"/signin"}>
            <Button value={"Login /"} />
          </NavLink>
          &nbsp;
          <NavLink to={"/signup"} className="-ml-4">
            <Button value={"Sign Up"} />
          </NavLink>
        </div>
        <div className="links-sidebar mt-10">
          <div className="social-links-sidebar my-2 flex flex-row justify-start items-center">
            <a
              href={"https://www.facebook.com/lovoj.marketplace"}
              target="_blank"
            >
              <img src={Facebook} alt="facebook" loading="lazy" />
            </a>
            <img src={Twitter} alt="facebook" loading="lazy" />
            <img src={Instagram} alt="facebook" loading="lazy" />
            <a href="https://www.linkedin.com/company/lovoj">
              <img src={LinkedIn} alt="facebook" loading="lazy" />
            </a>
            <a href="">
              <img src={Youtube} alt="facebook" loading="lazy" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
