import React, { useRef, useState } from "react";
import "./scss/index.scss";
import { InputField, Button } from "../../../../components";

// import monogramthread from "../../../../assests/images/customize/contrast/monogramthread.jpg";
import th1 from "../../../../assests/images/customize/contrast/th1.jpg";
import th2 from "../../../../assests/images/customize/contrast/th2.jpg";
import th3 from "../../../../assests/images/customize/contrast/th3.jpg";
import th4 from "../../../../assests/images/customize/contrast/th4.jpg";
import th5 from "../../../../assests/images/customize/contrast/th5.jpg";
import th6 from "../../../../assests/images/customize/contrast/th6.jpg";
import th7 from "../../../../assests/images/customize/contrast/th7.jpg";
import th8 from "../../../../assests/images/customize/contrast/th8.jpg";
import th9 from "../../../../assests/images/customize/contrast/th9.jpg";
import th10 from "../../../../assests/images/customize/contrast/th10.jpg";
import th11 from "../../../../assests/images/customize/contrast/th11.jpg";
import th12 from "../../../../assests/images/customize/contrast/th12.jpg";
import txt1 from "../../../../assests/images/customize/contrast/txt1.png";
import txt2 from "../../../../assests/images/customize/contrast/txt2.png";
import txt3 from "../../../../assests/images/customize/contrast/txt3.png";
import txt4 from "../../../../assests/images/customize/contrast/txt4.png";
import txt5 from "../../../../assests/images/customize/contrast/txt5.png";
import txt6 from "../../../../assests/images/customize/contrast/txt6.png";
import collar1 from "../../../../assests/images/customize/contrast/collar1.png";
import collar2 from "../../../../assests/images/customize/contrast/collar2.png";
import { CustomContrastSidebar } from "../../../../layout";

export const CustomizeContrast = ({ styleJson, allFabs, fabImges, webglref, CheckContrastStyles }) => {
  const [isHidden, setHidden] = useState(true);
  const [currentSelection, setCurrentSelection] = useState('');
  const splitStyleName = (stylename) => {
    const newArray = stylename.split("_");
    return newArray[newArray.length - 1];
  }
  return (
    <>
      <CustomContrastSidebar isHidden={isHidden} setHidden={setHidden} allFabs = { allFabs } fabImges = { fabImges }  webglref = { webglref } currentSelection = {currentSelection} CheckContrastStyles = { CheckContrastStyles }/>
      {/* <div className="contrast-section"> */}
       
        {/* <div onClick={() => setHidden(false)}>click</div> */}
        <div className="scroll-section py-3">
          <div className="w-full">
            <div className="heading-contrast py-3">
              <h1>Embroidery (+$2)</h1>
            </div>
            <div className="flex gap-3 items-center justify-start form-section">
              <InputField placeholder={"Type your initials"} />
              <Button value={"Clear"} />
            </div>
            <div className="font-section">
              <div className="fonts my-4">
                <label
                  htmlFor="simplefont"
                  className="font-box flex items-center gap-3"
                >
                  <input id="simplefont" type="checkbox" name={"check"} />
                  {/* <label htmlFor="boxes">ABC</label> */}
                  <img src={txt1} alt="txt1" width={"55px"} height="55px" />
                </label>
                <label
                  htmlFor="stylefont"
                  className="font-box flex items-center gap-3"
                >
                  <input id="stylefont" type="checkbox" name={"check"} />
                  {/* <label htmlFor="boxes">ABC</label> */}
                  <img src={txt2} alt="txt2" width={"55px"} height="55px" />
                </label>
                <label
                  htmlFor="fonthree"
                  className="font-box flex items-center gap-3"
                >
                  <input id="fontthree" type="checkbox" name={"check"} />
                  {/* <label htmlFor="boxes">ABC</label> */}
                  <img src={txt3} alt="txt3" width={"55px"} height="55px" />
                </label>
                <label
                  htmlFor="fontfour"
                  className="font-box flex items-center gap-3"
                >
                  <input id="fontfour" type="checkbox" name={"check"} />
                  {/* <label htmlFor="boxes">ABC</label> */}
                  <img src={txt4} alt="txt4" width={"55px"} height="55px" />
                </label>
                <label
                  htmlFor="fontfive"
                  className="font-box flex items-center gap-3"
                >
                  <input id="fontfive" type="checkbox" name={"check"} />
                  {/* <label htmlFor="boxes">ABC</label> */}
                  <img src={txt5} alt="txt5" width={"55px"} height="55px" />
                </label>
                <label
                  htmlFor="fontsix"
                  className="font-box flex items-center gap-3"
                >
                  <input id="fontsix" type="checkbox" name={"check"} />
                  {/* <label htmlFor="boxes">ABC</label> */}
                  <img src={txt6} alt="txt6" width={"55px"} height="55px" />
                </label>
              </div>
            </div>
          
          {/* Monoggram */}
            <div className="monogram-section">
              <div className="image-section">
                <div className="nested-img">
                  <img src={th1} alt="th1" />
                </div>
                <div className="nested-img">
                  <img src={th2} alt="th2" />
                </div>
                <div className="nested-img">
                  <img src={th3} alt="th3" />
                </div>
                <div className="nested-img">
                  <img src={th4} alt="th4" />
                </div>
                <div className="nested-img">
                  <img src={th5} alt="th5" />
                </div>
                <div className="nested-img">
                  <img src={th6} alt="th6" />
                </div>
                <div className="nested-img">
                  <img src={th7} alt="th7" />
                </div>
                <div className="nested-img">
                  <img src={th8} alt="th8" />
                </div>
                <div className="nested-img">
                  <img src={th9} alt="th9" />
                </div>
                <div className="nested-img">
                  <img src={th10} alt="th10" />
                </div>
                <div className="nested-img">
                  <img src={th11} alt="th11" />
                </div>
                <div className="nested-img">
                  <img src={th12} alt="th12" />
                </div>
              </div>
            </div>
          </div>
          {/* colllar */}
          { styleJson && styleJson.submenu.map((style, index) => {
             return( <>
                { style.name !== "Front" ? (
                   <div className="color_cullar">
                    <div className="heading-font">
                      <h2>{ splitStyleName(style.name) }</h2>
                    </div>
                    <div className="collar-imgs my-3" onClick={() => { setCurrentSelection(style.name); console.log(style.name) }}>
                      <div className="collar-specfic flex flex-col" onClick={() => {webglref.current.DefaultFabric(style.name)}}>
                        <div>
                          <img src={ style.submenu === undefined ? "" : style.submenu[0].icon} alt="collar" />
                        </div>
                        <p className="font-bold">By Default</p>
                      </div>
                      <div
                        className="collar-specfic flex flex-col"
                        onClick={() => {setHidden(false); setCurrentSelection(style.name); console.log(style.name)}}
                      >
                        <div>
                          <img src={collar1} alt="collar1" />
                        </div>
                        <p>All (+$7)</p>
                      </div>

                      <div
                        className="collar-specfic flex flex-col"
                        onClick={() => {setHidden(false);setCurrentSelection(style.name); console.log(style.name)}}
                      >
                        <div>
                          <img src={collar2} alt="collar2" />
                        </div>
                        <p>Inner Fabric (+$7)</p>
                      </div>
                    </div>
                   </div>
                ) : (
                  <></>
                ) }
              </>)
          }) }
          
        </div>
      {/* </div> */}
    </>
  );
};
