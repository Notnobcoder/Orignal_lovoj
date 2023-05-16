import React, { useRef, useEffect } from "react";
import "./scss/index.scss";
import mainlogo from "../../../../assests/images/Logo1.png";
import map from "../../../../assests/images/map.svg";
import category from "../../../../assests/images/category.svg";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar } from "@mui/material";
// import { useEffect } from "react";
// import { FiShoppingCart} from "react-icons/fi";

export const PrivateHeader = ({ setHidden }) => {
  //  document.getElementById()
  // const getRef=useRef(null)
  // useEffect(() =>{
  //   console.log(getRef.current.click);
  //   var w = window.innerWidth;
  //    console.log(w);

  // },[])
  // function onCLikcUFnc(e){
  //   console.log(e);
  // }
  // console.log(window.screen.width);
  // window.onresize = myFunction;
  // function myFunction() {
  //   // console.log("Runugn");
  //   if (window.screen.width <= 530) {
  //     console.log("Runugn");
  //     let getLinks = document.getElementById("gridVeiw");
  //     console.log(getLinks);
  //     getLinks.click();
  //   }
  // }

  return (
    <div className="main-header">
      <div className="bar-box" onClick={() => setHidden(false)}>
        <div className="bar-box__line--1">s</div>
        <div className="bar-box__line--2"></div>
        <div className="bar-box__line--3"></div>
      </div>
      <NavLink to={"/"}>
        <img className="h-20" src={mainlogo} />
      </NavLink>
      {/* <div className="main-header__sideitem">
        </div> */}
      <div className="map-dash-header flex justify-center items-center">
        {/* <div className="btn1"> */}
        <NavLink to={"map"}>
          <img src={map} alt="map" />
        </NavLink>
        {/* </div> */}
        {/* <div className="btn2"> */}
        <NavLink to={"girdview"} id="gridVeiw">
          <img src={category} alt="category" />{" "}
        </NavLink>
      </div>
    </div>
  );
};
