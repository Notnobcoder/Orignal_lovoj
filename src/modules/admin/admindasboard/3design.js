import React, {useState} from "react";
import RangeSlider from "./rangeslider";
import { Button } from "../../../components";
import appLOVOJ from "../../../assests/images/applouoj.png";
import WebGlContainer from '../../WebglComponent/WebglComponent';
import AdminWebgl from '../../WebglComponent/AdminWebgl';
import AdminFemale from '../../WebglComponent/AdminFemale';
import "./scss/index.scss";

export const ThreeDDesign = ({ handleNext, steps, activeStep, setTileX ,setTileY,setSave, fab }) => {
  const [xVal, setX] = useState(30);
  const [yVal, setY] = useState(30);
  const [AdminRef, setRef] = useState(React.createRef());
  const [isKurti, setKurti] = useState(false);
  const handleThird = () => {
    setSave(true);
    handleNext();
  }
  return (
    <div className="range-3d my-5">
      <div className="data-range">
        <RangeSlider Axis="X" TileChange = { (val) => {setX(val);setTileX(val); AdminRef.current.TileChange(val, "X")}} value = {xVal}/>
        <RangeSlider Axis="Y" TileChange = { (val) => {setY(val);setTileY(val); AdminRef.current.TileChange(val, "Y")}} value = {yVal}/>
        <div className="btn-design">
          <div className="dress-button">
            <Button value="Shirt" type={"submit"} onClick={(e) => {setKurti(false)}}/>
            <Button value="Kurti" type={"submit"} onClick={(e) => {setKurti(true)}}/>
          </div>
          <div className="button-continue-design">
            <Button
              value={
                activeStep === steps.length - 1 ? "Finish" : "Save And Continue"
              }
              onClick={handleThird}
              type="submit"
            />
          </div>
        </div>
      </div>
      <div className="img-design" style={{height:'450px'}}>
        { !isKurti ? (
            <AdminWebgl ref={AdminRef} fabImage = { fab } tilex = { xVal } tiley = { yVal }/>
        ) : (
          <AdminFemale ref={ AdminRef } fabImage = { fab } tilex = { xVal } tiley = { yVal } isAdmin = {true}/>
        ) }
      </div> 
    </div>
  );
};
