import React from "react";
import "./scss/index.scss";
import appLOVOJ from "../../../../assests/images/threed.jpeg";
import share from "../../../../assests/images/share.png"

export const ThreeDDesignMob = () => {
  return (
    <div className="threeD-sectionMob w-full relative">
      <img src={appLOVOJ} alt="appLOVOJ" className="w-full h-full" style={{height: "80vh"}} />
      <img src={share} alt="share.png"  className="absolute top-3 right-3 w-11 h-11 bg-white p-3 rounded-xl" />
       <div className="price absolute text-right text-2xl top-3 left-3 w-11 h-11 text-red-600">
             $210.00
       </div>
    </div>
  );
};
