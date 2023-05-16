import React, { useState } from "react";
import mainlogo from "../../assests/images/Logo1.png";
import { Button } from "../../components";
import { NavLink } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import { MobileHeader, SideBar, WebSidebar } from "../index";
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

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isHidden, setHidden] = useState(true);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="main-header-front  mx-auto ">
      <div className="mobheader">
        <MobileHeader />
      </div>
      <div className="flex justify-between flex-wrap items-center web-page-header pt-1">
        <div className="flex items-center gap-3">
          <div className="bar-box-hamburger" onClick={() => setHidden(false)}>
            <div className="bar-box__line--1"></div>
            <div className="bar-box__line--2"></div>
            <div className="bar-box__line--3"></div>
          </div>
          <WebSidebar isHidden={isHidden} setHidden={setHidden} />
          <NavLink to={"/"}>
          </NavLink>
        </div>
        <div className="main-pagelinks flex items-center gap-3">
          <div className="login-signup flex justify-center items-center gap-2 ">
            <NavLink to={"/signin"}>
              <Button value={"Login /"} />
            </NavLink>
            &nbsp;
            <NavLink to={"/signup"} className="-ml-4">
              <Button value={"Sign Up"} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
