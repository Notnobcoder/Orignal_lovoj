import React from "react";
import "./scss/index.scss";
import { NavLink } from "react-router-dom";
import mainlogo from "../../../assests/images/Logo.png";
import ShoppingCart from "../../../assests/images/shopping-cart.svg";

// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar } from "@mui/material";
// import { FiShoppingCart} from "react-icons/fi";

export const Landingheader = ({ setHidden }) => {
  return (
    <div className="main-header-landing">
      <div className="bar-box-landing" onClick={() => setHidden(false)}>
        <div className="bar-box-landing__line--1">s</div>
        <div className="bar-box-landing__line--2"></div>
        <div className="bar-box-landing__line--3"></div>
      </div>
      <NavLink to={"/"}>
        <img className="main-header-landing__logo" src={mainlogo} />
      </NavLink>
      <div className="main-header__sideitemlanding">
        <p>Help</p>
        <div className="main-header-landing__sideitem--subitems">
          {/* <FiShoppingCart style={{marginRight:"15px",color:"gray"}} /> */}
          <img src={ShoppingCart} alt="shppingCart" />
          <Avatar
            sx={{
              bgcolor: "#51CE94",
              width: "20px",
              height: "20px",
              fontSize: "12px",
            }}
          >
            05
          </Avatar>
        </div>
      </div>
    </div>
  );
};
