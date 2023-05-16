import React, { useEffect } from "react";
import "./scss/index.scss";
import logo from "../../../../assests/images/Logo1.png";
import cloth173 from "../../../../assests/images/cloths/173-textural.jpg";
import texture2 from "../../../../assests/images/cloths/173-texture2.jpg";
import texture3 from "../../../../assests/images/cloths/173-texture3.jpg";
import texture4 from "../../../../assests/images/cloths/173-texture4.jpg";
import texture5 from "../../../../assests/images/cloths/173-texture5.jpg";
import texture6 from "../../../../assests/images/cloths/173-texture6.jpeg";
import texture7 from "../../../../assests/images/cloths/173-texture7.jpeg";
import texture8 from "../../../../assests/images/cloths/173-texture8.jpeg";
import texture9 from "../../../../assests/images/cloths/173-texture9.jpeg";
import texture10 from "../../../../assests/images/cloths/173-texture10.jpeg";
import texture11 from "../../../../assests/images/cloths/173-texture11.jpeg";
import texture12 from "../../../../assests/images/cloths/173-texture12.jpeg";
import texture13 from "../../../../assests/images/cloths/173-texture13.jpeg";
import texture14 from "../../../../assests/images/cloths/173-texture14.jpeg";
import texture15 from "../../../../assests/images/cloths/173-texture15.jpeg";
import texture16 from "../../../../assests/images/cloths/173-texture16.jpeg";
import texture17 from "../../../../assests/images/cloths/173-texture17.jpeg";
import texture18 from "../../../../assests/images/cloths/173-texture18.jpeg";
import texture19 from "../../../../assests/images/cloths/173-texture19.jpeg";
import texture20 from "../../../../assests/images/cloths/173-texture20.jpeg";
import { AiOutlineDoubleLeft } from "react-icons/ai";

export const CustomContrastSidebar = ({ isHidden, setHidden, allFabs, fabImges, webglref,currentSelection, CheckContrastStyles }) => {
  useEffect(() => {
    console.log(fabImges);
  }, [])
  return (
    <div className={`${isHidden ? "contrast-sidebar-customize hidden" : "contrast-sidebar-customize"}`}>
      <div className="flex justify-between items-center w-full p-4">
        <div>
          <img src={logo} alt="logo" width={"100px"} />
        </div>
        <div>
        <AiOutlineDoubleLeft
          onClick={() => setHidden(true)}
          className="arrow-right"
        />
        </div>
      </div>
      {/* index */}
      <div className="cloths-section-mob">
        { fabImges && fabImges.map((fab, index) => {
          return <div className="nested-cloths" onClick={ () =>  {webglref.current.ContrastFabricChange(fab, currentSelection); CheckContrastStyles(fab, currentSelection)} }>
                    <img src={fab.src} alt="cloth173" />
                 </div>
        }) }
        
      </div>
    </div>
  );
};
