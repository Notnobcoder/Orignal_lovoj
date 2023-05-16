// import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./scss/index.scss";
import { NavLink, useSearchParams } from "react-router-dom";
import { FiHelpCircle } from "react-icons/fi";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import List from "@mui/material/List";
import mainlogo from "../../assests/images/Logo1.png";
import LinkIcon from "@mui/icons-material/Link";
import ListItem from "@mui/material/ListItem";
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

const initialState = [
  { id: 1, workType: "Tailor & Designer", link: "/account-registration" },
  { id: 2, workType: "Fabric", link: "/account-registration" },
  { id: 3, workType: "Sticting Factory", link: "/account-registration" },
  { id: 4, workType: "Accessories", link: "/account-registration" },
];
const pageLinks = [
  {
    id: 1,
    pageName: "About Us",
    links: "/about-us",
  },
  {
    id: 2,
    pageName: "Product",
    links: "/",
  },
  {
   id:3,
   pageName:"Media & Press",
   links: "/media-press" 
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
    pageName: "Help Center",
    links: "/help-center",
  },
];

export const WebSidebar = ({ isHidden, setHidden }) => {
  const [open, setOpen] = useState(false);
  const [quicklinkopen, setQucikLinks] = useState(true);
  const [addresses, setAddress] = useState(false);
  // const []=useState()

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
    <div
      className={`${isHidden ? "main-sidebar hidden" : "main-sidebar"} z-50`}
    >
      <AiOutlineDoubleLeft
        onClick={() => setHidden(true)}
        className="arrow-left"
      />
      <div className="main-sidebar__profile">
        <NavLink to={"/"}>
        <img src={mainlogo} alt="louoj" />
        </NavLink>
      </div>
      <div className="main-sidebar__list">
        {/* <div className="main-sidebar__list--item">
          <FiHelpCircle
            style={{
              fontSize: "20px",
              fontWeight: 200,
              color: "rgba(1, 114, 182, 1)",
            }}
          />
          <span>Help Center</span>
        </div> */}
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
                    <ListItem button >
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



        {/* </List> */}

        <div className="links-sidebar mt-10">
          <div className="social-links-sidebar my-2 flex flex-row justify-start items-center">
            <a href={"https://www.facebook.com/LOVOJ.Tech/"} target="_blank">
              <img src={Facebook} alt="facebook" loading="lazy" />
            </a>
            <img src={Twitter} alt="facebook" loading="lazy" />
            <img src={Instagram} alt="facebook" loading="lazy" />
            <a href="https://www.linkedin.com/company/LOVOJ/">
              <img src={LinkedIn} alt="facebook" loading="lazy" />
            </a>
            <a href="https://www.youtube.com/channel/UCCNjlvchiuD1mDRqsTlWZqQ">
              <img src={Youtube} alt="facebook" loading="lazy" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
