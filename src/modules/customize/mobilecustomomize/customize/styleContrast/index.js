import React from "react";
import "./scss/index.scss";
import Shirt_Collar_Standard from "../../../../../assests/images/customize/custStyle/Shirt_Collar_Standard.png";
import Shirt_Cuff_Button_Cut_Corner_Edge from "../../../../../assests/images/customize/custStyle/Shirt_Cuff_Button_Cut_Corner_Edge.png";
import Shirt_Elbow_Patch_Long from "../../../../../assests/images/customize/custStyle/Shirt_Elbow_Patch_Long.png";
import Shirt_Fit_Slim_Straight from "../../../../../assests/images/customize/custStyle/Shirt_Fit_Slim_Straight.png";
import Shirt_Pleat_Plain_Slim_Straight from "../../../../../assests/images/customize/custStyle/Shirt_Pleat_Plain_Slim_Straight.png";
import Shirt_Pocket_Left_Slim_Straight from "../../../../../assests/images/customize/custStyle/Shirt_Pocket_Left_Slim_Straight.png";
import Shirt_Sleeve_Long from "../../../../../assests/images/customize/custStyle/Shirt_Sleeve_Long.png";
import Shirt_Yoke_Normal from "../../../../../assests/images/customize/custStyle/Shirt_Yoke_Normal.png";

export const StyleContrast = ({
  sheetRef,
  setNewValue,
  chnagebutton,
  setChangeButton,
  styleJson,
  splitStyleName,
  CheckStyles
}) => {
  return (
    <div>
      <div className="cloths-section-stylcont">
        { styleJson && styleJson.submenu.map((fab, index) => {
         return <div className="brand-clothes">
          <h1 className="pl-4">{ fab.name }</h1>
          <div className="flex gap-3 flex-wrap items-center justify-center">
            { fab.submenu && fab.submenu.map((_fab, _index) => {
                return  <div className="nested-cloths"
                          onClick={() => {
                          setChangeButton(!chnagebutton);
                          sheetRef.current.snapTo(({ maxHeight }) => maxHeight * 0.18);
                          setNewValue("");
                          CheckStyles(_fab.name, fab.name)}}>
                          <img src={_fab.icon} alt={ splitStyleName(_fab.name) } />
                          <p className="title">{ splitStyleName(_fab.name) }</p>
                        </div> 
              }) }
          </div>
        </div>  
        }) }
        {/* <div className="brand-clothes">
          <h1 className="pl-4">Collar</h1>
          <div className="flex gap-3 flex-wrap items-center justify-center">
            <div
              className="nested-cloths"
              onClick={() => {
                setChangeButton(!chnagebutton);
                sheetRef.current.snapTo(({ maxHeight }) => maxHeight * 0.18);
                setNewValue("");
              }}
            >
              <img src={Shirt_Collar_Standard} alt="Shirt_Collar_Standard" />
              <p className="title">Cotton</p>
              <p className="price">210.00$</p>
            </div>
            <div className="nested-cloths">
              <img
                src={Shirt_Collar_Standard}
                alt="Shirt_Collar_Standard"
                onClick={() => {
                  setChangeButton(!chnagebutton);
                  sheetRef.current.snapTo(({ maxHeight }) => maxHeight * 0.18);
                  setNewValue("");
                }}
              />
              <p className="title">Cotton</p>
              <p className="price">210.00$</p>
            </div>
            <div
              className="nested-cloths"
              onClick={() => {
                setChangeButton(!chnagebutton);
                sheetRef.current.snapTo(({ maxHeight }) => maxHeight * 0.18);
                setNewValue("");
              }}
            >
              <img src={Shirt_Collar_Standard} alt="Shirt_Collar_Standard" />
              <p className="title">Cotton</p>
              <p className="price">210.00$</p>
            </div>
            <div
              className="nested-cloths"
              onClick={() => {
                setChangeButton(!chnagebutton);
                sheetRef.current.snapTo(({ maxHeight }) => maxHeight * 0.18);
                setNewValue("");
              }}
            >
              <img src={Shirt_Collar_Standard} alt="Shirt_Collar_Standard" />
              <p className="title">Cotton</p>
              <p className="price">210.00$</p>
            </div>
            <div
              className="nested-cloths"
              onClick={() => {
                setChangeButton(!chnagebutton);
                sheetRef.current.snapTo(({ maxHeight }) => maxHeight * 0.18);
                setNewValue("");
              }}
            >
              <img src={Shirt_Collar_Standard} alt="Shirt_Collar_Standard" />
              <p className="title">Cotton</p>
              <p className="price">210.00$</p>
            </div>
            <div
              className="nested-cloths"
              onClick={() => {
                setChangeButton(!chnagebutton);
                sheetRef.current.snapTo(({ maxHeight }) => maxHeight * 0.18);
                setNewValue("");
              }}
            >
              <img src={Shirt_Collar_Standard} alt="Shirt_Collar_Standard" />
              <p className="title">Cotton</p>
              <p className="price">210.00$</p>
            </div>
            <div
              className="nested-cloths"
              onClick={() => {
                setChangeButton(!chnagebutton);
                sheetRef.current.snapTo(({ maxHeight }) => maxHeight * 0.18);
                setNewValue("");
              }}
            >
              <img src={Shirt_Collar_Standard} alt="Shirt_Collar_Standard" />
              <p className="title">Cotton</p>
              <p className="price">210.00$</p>
            </div>
            <div
              className="nested-cloths"
              onClick={() => {
                setChangeButton(!chnagebutton);
                sheetRef.current.snapTo(({ maxHeight }) => maxHeight * 0.18);
                setNewValue("");
              }}
            >
              <img src={Shirt_Collar_Standard} alt="Shirt_Collar_Standard" />
              <p className="title">Cotton</p>
              <p className="price">210.00$</p>
            </div>
            <div
              className="nested-cloths"
              onClick={() => {
                setChangeButton(!chnagebutton);
                sheetRef.current.snapTo(({ maxHeight }) => maxHeight * 0.18);
                setNewValue("");
              }}
            >
              <img src={Shirt_Collar_Standard} alt="Shirt_Collar_Standard" />
              <p className="title">Cotton</p>
              <p className="price">210.00$</p>
            </div>
            <div
              className="nested-cloths"
              onClick={() => {
                setChangeButton(!chnagebutton);
                sheetRef.current.snapTo(({ maxHeight }) => maxHeight * 0.18);
                setNewValue("");
              }}
            >
              <img src={Shirt_Collar_Standard} alt="Shirt_Collar_Standard" />
              <p className="title">Cotton</p>
              <p className="price">210.00$</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
