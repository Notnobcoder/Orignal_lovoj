// import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./scss/index.scss";
import { NavLink, useSearchParams } from "react-router-dom";
import { FiHelpCircle } from "react-icons/fi";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import List from "@mui/material/List";
import mainlogo from "../../../../assests/images/mainlogo.svg";
import cancelSign from "../../../../assests/images/corsscut.png";
import LinkIcon from "@mui/icons-material/Link";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import GroupIcon from "@mui/icons-material/Group";

import BusinessIcon from "@mui/icons-material/Business";

const initialState = [
  { id: 1, workType: "New " },
  { id: 2, workType: "Eco/Organic" },
  { id: 3, workType: "Limited" },
];
const material = [
  { id: 1, workType: "Cotton " },
  { id: 2, workType: "Cotton Blend" },
  { id: 3, workType: "Linen" },
  { id: 4, workType: "Tencel" },
];
const pattern = [
  { id: 1, workType: "Plain" },
  { id: 2, workType: "Striped" },
  { id: 3, workType: "Checked" },
  { id: 4, workType: "Floral" },
  { id: 5, workType: "Houndstooth" },
  { id: 6, workType: "Pasisity" },
  { id: 7, workType: "Micropattern" },
  { id: 8, workType: "Dotted" },
  { id: 9, workType: "Animal Print" },
  { id: 10, workType: "Herringbone" },
];

const FabricTypes = [
  { id: 1, workType: "Oxford" },
  { id: 2, workType: "Poplin" },
  { id: 3, workType: "Denim" },
  { id: 4, workType: "Chambray" },
  { id: 5, workType: "Flannel" },
  { id: 6, workType: "Seersucker" },
  { id: 7, workType: "Twill" },
  { id: 8, workType: "Herrigbone" },
  { id: 9, workType: "Fil A Fil" },
  { id: 10, workType: "PinPoint" },
  { id: 11, workType: "Filcoupe" },
  { id: 12, workType: "Dobby" },
  { id: 13, workType: "Printed" },
  { id: 14, workType: "Jacqured" },
  { id: 15, workType: "Rustic" },
];
const characterticsarry = [
  { id: 1, workType: "2-ply " },
  { id: 2, workType: "Easy Iron" },
  { id: 3, workType: "Non-Iron" },
  { id: 4, workType: "Oeko" },
  { id: 5, workType: "Stretchy" },
  { id: 5, workType: "Water Resistant" },
];
const seasonarry = [
  { id: 1, workType: "Summer" },
  { id: 2, workType: "Year Round" },
  { id: 3, workType: "Winter" },
];
export const FilterCustomizate = ({ isFilter, setFilter }) => {
  const [open, setOpen] = useState(false);
  const [quicklinkopen, setQucikLinks] = useState(false);
  const [addresses, setAddress] = useState(false);
  const [fabric, setFabrics] = useState(false);
  const [charactertics, setCharactertics] = useState(false);
  const [season, setSeason] = useState(false);

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
      className={`${
        isFilter ? "filterCust-sidebar hidden" : "filterCust-sidebar"
      } z-50`}
    >
      <div className="arrow-left" onClick={() => setFilter(true)}>
        <img src={cancelSign} alt="cancelSign" />
      </div>
      {/* <AiOutlineDoubleLeft onClick={() => setFilter(true)} /> */}
      <div className="flex flex-col heading-filter">
        {/* <NavLink to={"/"}> */}
        {/* <img src={mainlogo} alt="LOVOJ" /> */}
        <h1 className="text-3xl font-bold ">Filter Fabric</h1>
        <p className="">(172 Fabrics)</p>
        {/* </NavLink> */}
      </div>
      <div className="text-right px-5 text-red-600 cursor-pointer">
        Clear All
      </div>
      <div className="main-sidebar__list">
        <div className={"main-filter-list"}>
          <ListItem button onClick={quickLinkClick} className="inboxes">
            <ListItemText primary="Category" className="font-black" />
            {quicklinkopen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={quicklinkopen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {initialState.map((value, id) => {
                return (
                  // <div className="filter__list">
                  <div className="filter--item" key={value.id}>
                    <input type="checkbox" name="" id={value.workType} />
                    <label htmlFor={value.workType}>{value.workType}</label>
                  </div>
                  // </div>
                );
              })}
            </List>
          </Collapse>
        </div>
        <hr />
        <div className={"main-filter-list"}>
          <ListItem button onClick={addressClick} className="inboxes">
            <ListItemText primary="Material" className="font-black" />
            {addresses ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={addresses} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {material.map((value, id) => {
                return (
                  // <div className="filter__list">
                  <div className="filter--item" key={value.id}>
                    <input type="checkbox" name="" id={value.workType} />
                    <label htmlFor={value.workType}>{value.workType}</label>
                  </div>
                  // </div>
                );
              })}
            </List>
          </Collapse>
        </div>
        <hr />
        <div className={"main-filter-list"}>
          <ListItem button onClick={handleClick} className="inboxes">
            <ListItemText primary="Pattern" className="font-black" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {pattern.map((value, id) => {
                return (
                  // <div className="filter__list">
                  <div className="filter--item" key={value.id}>
                    <input type="checkbox" name="" id={value.workType} />
                    <label htmlFor={value.workType}>{value.workType}</label>
                  </div>
                  // </div>
                );
              })}
            </List>
          </Collapse>
        </div>
        <hr />
        <div className={"main-filter-list"}>
          <ListItem
            button
            onClick={() => setFabrics(!fabric)}
            className="inboxes"
          >
            <ListItemText primary="Fabric Types" className="font-black" />
            {fabric ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={fabric} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {FabricTypes.map((value, id) => {
                return (
                  // <div className="filter__list">
                  <div className="filter--item" key={value.id}>
                    <input type="checkbox" name="" id={value.workType} />
                    <label htmlFor={value.workType} >{value.workType}</label>
                  </div>
                  // </div>
                );
              })}
            </List>
          </Collapse>
        </div>
        <hr />
        <div className={"main-filter-list"}>
          <ListItem
            button
            onClick={() => setCharactertics(!charactertics)}
            className="inboxes"
          >
            <ListItemText primary="Characteristics" className="font-black" />
            {charactertics ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={charactertics} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {characterticsarry.map((value, id) => {
                return (
                  // <div className="filter__list">
                  <div className="filter--item" key={value.id}>
                    <input type="checkbox" name="" id={value.workType} />
                    <label htmlFor={value.workType}>{value.workType}</label>
                  </div>
                  // </div>
                );
              })}
            </List>
          </Collapse>
        </div>
        <hr />
        <div className={"main-filter-list"}>
          <ListItem
            button
            onClick={() => setSeason(!season)}
            className="inboxes"
          >
            <ListItemText primary="Season" className="font-black" />
            {season ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={season} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {seasonarry.map((value, id) => {
                return (
                  // <div className="filter__list">
                  <div className="filter--item" key={value.id}>
                    <input type="checkbox" name="" id={value.workType} />
                    <label htmlFor={value.workType}>{value.workType}</label>
                  </div>
                  // </div>
                );
              })}
            </List>
          </Collapse>
        </div>
      </div>
    </div>
  );
};
