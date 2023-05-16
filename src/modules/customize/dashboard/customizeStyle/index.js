import React, { useRef } from "react";
import "./scss/index.scss";
import cloth173 from "../../../../assests/images/cloths/173-textural.jpg";
import appLOVOJ from "../../../../assests/images/threed.jpeg";
import shppingcart from "../../../../assests/images/shoppingbag.png";
import { Button } from "../../../../components";
import Shirt_Collar_Standard from "../../../../assests/images/customize/custStyle/Shirt_Collar_Standard.png";
import Shirt_Cuff_Button_Cut_Corner_Edge from "../../../../assests/images/customize/custStyle/Shirt_Cuff_Button_Cut_Corner_Edge.png";
import Shirt_Elbow_Patch_Long from "../../../../assests/images/customize/custStyle/Shirt_Elbow_Patch_Long.png";
import Shirt_Fit_Slim_Straight from "../../../../assests/images/customize/custStyle/Shirt_Fit_Slim_Straight.png";
import Shirt_Pleat_Plain_Slim_Straight from "../../../../assests/images/customize/custStyle/Shirt_Pleat_Plain_Slim_Straight.png";
import Shirt_Pocket_Left_Slim_Straight from "../../../../assests/images/customize/custStyle/Shirt_Pocket_Left_Slim_Straight.png";
import Shirt_Sleeve_Long from "../../../../assests/images/customize/custStyle/Shirt_Sleeve_Long.png";
import Shirt_Yoke_Normal from "../../../../assests/images/customize/custStyle/Shirt_Yoke_Normal.png";
import WebglContainer from "../ThreeD/WebglContainer";

export const CustomizeStyle = React.forwardRef((props, ref) => {

  const WebglRef = useRef(null);

  const StyleRef = useRef(null);
  React.useImperativeHandle(ref, () => ({
    ChangeMale
  }))
  const ChangeMale = (isMale) => {
    if (isMale){
      WebglRef.current.MaleVisible();
    }else{
      WebglRef.current.FemaleVisible();
    }
  }

  const splitStyleName = (stylename) => {
    const newArray = stylename.split("_");
    return newArray[newArray.length - 1];
  }

  console.log("styleJson",props.styleJson);
  return (
    <div className="custom-style">
      {/* clthos section */}
      <div className="cloths-section">
        <>
            { props.styleJson && props.styleJson.submenu.map((fab, index) => {
              return (
                <div className="brand-clothes">
                  <h1 className="pl-4">{ fab.name }</h1>
                  <div className="flex gap-3 flex-wrap items-center">
                    { fab?.submenu?.map((_fab, _index) => {
                     return <div className="nested-cloths" onClick={() => { WebglRef.current.LeftMenuClick(_fab.name, fab.name) }}>
                        <img src={ _fab.icon } alt={ splitStyleName(_fab.name) } />
                        <p className="title">{ splitStyleName(_fab.name) }</p>
                      </div>
                    }) }
                  
                </div>
              </div>
              )
            }) }
          </>
      </div>
      {/* three D Section */}

      <div className="threeD-section">
        <WebglContainer ref={WebglRef}/>
      </div>
      {/* Amount section */}
      <div className="amount-cust-section">
      <div className="relative my-3 shopping-div">
          <img src={shppingcart} alt="shppingcart" />
          <p className="amount-shop">2</p>
        </div>
        <div className="actual-amount">
          <h1>$210.00</h1>
        </div>
        <div className="clothename">
          <h1>{props.stepsname}</h1>
        </div>
     
        {/* <div className="clothename">
          <h1>Kurta Pajama</h1>
        </div> */}
        <div className="infromation-cloth">
          {/* <div className="nested-info">
            <p>Fabric:</p>
            <p>Special Cotton</p>
          </div> */}
          {props.activeStep === 1 ? (
            <div className="nested-info">
              <p>Collar:</p>
              <p>{props.activeStep === 1 ? "Kent" : ""}</p>
            </div>
          ) : (
            ""
          )}

          {props.activeStep === 2 ? (
            <>
              <div className="nested-info">
                <p>Collar:</p>
                <p>{props.activeStep === 2 ? "" : ""}</p>
              </div>
              <div className="nested-info">
                <p>Fabric Image:</p>
                <p>{props.activeStep === 2 ? "" : ""}</p>
              </div>
              <div className="nested-info">
                <p>Button:</p>
                <p>{props.activeStep === 2 ? "" : ""}</p>
              </div>
              <div className="nested-info">
                <p>Images:</p>
                <p>{props.activeStep === 2 ? "" : ""}</p>
              </div>
              <div className="nested-info">
                <p>Thread:</p>
                <p>{props.activeStep === 2 ? "" : ""}</p>
              </div>
              <div className="nested-info">
                <p>Images:</p>
                <p>{props.activeStep === 2 ? "" : ""}</p>
              </div>
              <div className="nested-info">
                <p>Monogogram:</p>
                <p>{props.activeStep === 2 ? "" : ""}</p>
              </div>
              <div className="nested-info">
                <p>Cuff Images:</p>
                <p>{props.activeStep === 2 ? "" : ""}</p>
              </div>
            </>
          ) : (
            ""
          )}
            {props.activeStep === 1 ? (
            <div className="nested-info">
              <p>Style:</p>
              <p>{props.activeStep === 1 ? "Cotton" : ""}</p>
            </div>
          ) : (
            ""
          )}
         {props.activeStep === 1 ? (
            <div className="nested-info">
              <p>Sleev:</p>
              <p>{props.activeStep === 1 ? "Long" : ""}</p>
            </div>
          ) : (
            ""
          )}
          {props.activeStep === 1 ? (
            <div className="nested-info">
              <p>Pocket:</p>
              <p>{props.activeStep === 1 ? "Yes" : ""}</p>
            </div>
          ) : (
            ""
          )}
        </div>
        {/* Button */}
        <div className="h-14 bg-black text-white rounded-lg text-2xl w-3/6 flex justify-center items-center"
                  onClick={props.activeStep === props.steps.length ? "" : props.handleNext}

        >
          <Button value={"Next"} />
        </div>
      </div>
    </div>
  );
});
