import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import { styled, alpha } from "@mui/material/styles";
import { SpeicalCategory } from "./speical-category";
import { Button } from "../../components";
import { NavLink, Outlet } from "react-router-dom";
import map from "../../assests/images/map.svg";
import category from "../../assests/images/category.svg";
import filter from "../../assests/images/GroupFilter.svg";
import crosssign from "../../assests/images/crosssign.svg";
import { Filters } from "../../layout";

import "./scss/index.scss";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
const initailData = [
  "Tailor/Designer",
  " Fabric Manufracturer",
  "Sticting factory",
  " Accessories Wholeseller",
  "Stylish",
];

export const MainSection = () => {
  const [isHidden, setHidden] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  var body = document.body,
    html = document.documentElement;

  var height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  console.log(height);
  return (
    <>
      {/* <Filter /> */}
      {/* <div className="relative w-full"> */}
      <Filters isHidden={isHidden} setHidden={setHidden} />
      {/* </div> */}
      <div className="main-section py-4">
        <div className="header-section">
          <div className="desginer-quantity">
            <a id="bottom"></a>
            <h1>36</h1>
            <span>Designers</span>
          </div>
          <div className="button-section">
            {/*  neumorphism  button */}
            <div className="map-dash flex justify-center items-center">
              <NavLink to={"map"}>
                <img src={map} alt="map" />
              </NavLink>
              <NavLink to={"girdview"}>
                <img src={category} alt="category" />{" "}
              </NavLink>
            </div>
            <a href="#filter">
              <div
                className="filter-btn flex justify-center items-center cursor-pointer"
                onClick={() => setHidden(false)}
              >
                <img src={filter} alt="Filter" className="active" />
                <div className="">Filter</div>
              </div>
            </a>
          </div>
        </div>
        <div className="listitems py-3 flex  justify-start gap-x-3 ">
          {/* <div>helo</div>    */}
          <div>
            <Button
              value={"Shirt"}
              icon={crosssign}
              flex="flex"
              alignItems={"center"}
              flexDirection="row-reverse"
            />
          </div>
          <div>
            <Button
              value={"Kurti"}
              icon={crosssign}
              flex="flex"
              alignItems={"center"}
              flexDirection="row-reverse"
            />
          </div>
        </div>
        {/* <Maps /> */}
        {/* <MainCard /> */}
        <Outlet />
        <SpeicalCategory />
      </div>
    </>
  );
};
