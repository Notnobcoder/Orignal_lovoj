import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import "./scss/index.scss";
import shppingcart from "../../../../assests/images/shoppingbag.png";
import { Button } from "../../../../components";
import FabricCard from "./FabricCard";
import WebglContainer from "../ThreeD/WebglContainer";
import { ThreeDDesignMob } from '../threedDesign/threeDDesignMob';
import { BottomToTopCustomize } from '../../index';
import { CustomizeContrast } from '../customizeContarst';
import infroamtionImage from "../../../../assests/images/1.png";
import style from "../../../../assests/images/styles.png";
import contrast from "../../../../assests/images/contrast.png";
import { ThreeDDesign } from "../threedDesign";
import { CustomizeMeasurment } from '../customizemeasurment';
import { CustomizeCart } from '../cutomizeCart';
import { NavLink, useNavigate } from "react-router-dom";
export const CustomizeFabric =  React.forwardRef((props, ref) => {

  const WebglRef = useRef(null);
  const [fabImges, setFabImages] = useState([]);
  const [isUser, setUser] = useState(null);
  const navigate = useNavigate();
  //const [newstyleJson, setStyleJson] = useState([]);
  const [isChecked, setCheck] = useState(false);
  const [selectedFabric, setFabric] = useState('');
  const [selectedFab, setSelectedFab] = useState({});
  const [selectedStyle, setStyle] = useState(false);
  const [selectedStyleType, setStyleType] = useState(false);
  const [condition, setCondition] = useState(false);
  const [checkData, setCheckData] = useState(false);
  const [passData, setPassData] = useState([]);
  const [wishList, setWishList] = useState({});
  const [fabricWish, setFabricWish] = useState([]);
  const [styleWish, setStyleWish] = useState([]);
  const [constrastWish, setContrastWish] = useState([]);
  const FabRef = useRef(null);
  React.useImperativeHandle(ref, () => ({
    ChangeMale,
    ChangeStyle
  }))

  const ChangeStyle = (stylename) => {
    WebglRef.current.ChangeStyleName(stylename)
  }

  const splitStyleName = (stylename) => {
    const newArray = stylename.split("_");
    return newArray[newArray.length - 1];
  }

  const AddFabImage = (imgsrc) => {
    console.log(fabImges);
    setFabImages(currentArray => [...currentArray, imgsrc])
    console.log("fabImges",fabImges);
  }
  
  const ChangeMale = (isMale, jsonType, json) => {
    if (isMale){
      WebglRef.current.MaleVisible(jsonType, json);
    }else{
      WebglRef.current.FemaleVisible(jsonType, json);
    }
  }

  const FabricChange = (fab, fabImage) => {
    let fabric = {};
    fabric.fabricid = fab._id;
    setFabricWish([...fabricWish, fabric]);
    setFabric(fab._id)
    let selectedFab = {};
    selectedFab.fab = fab;
    selectedFab.fabImage = fabImage
    setSelectedFab(selectedFab);
    WebglRef.current.FabricChange(fab, fabImage);
  }

  const CheckStyles = (style, styleparent) => {
    let styles = {};
    styles.parent = styleparent;
    styles.style = style;
    setStyleWish([...styleWish, styles]);
    const newstyleJson ={... props.styleJson};
    console.log(newstyleJson);
    const submenu1=[...newstyleJson.submenu]
    for (var i = 0; i < submenu1.length; i++){
      const sumbmenu2=[...submenu1[i].submenu] 
      if (submenu1[i].name === styleparent){
        submenu1[i].selected = true;
        for (var j = 0; j < sumbmenu2.length; j++){
          if (sumbmenu2[j].name === style){
            sumbmenu2[j].skip = false;
          }
          else{
            sumbmenu2[j].skip = true;
            sumbmenu2[j].selected = true;
          }
          console.log( sumbmenu2[j]);
        }
      }
      submenu1[i].submenu=  sumbmenu2
    }
    newstyleJson.submenu=submenu1;
    props.setStyleJson(null);
    console.log(newstyleJson);
    props.setStyleJson(newstyleJson)
    WebglRef.current.LeftMenuClick(style, styleparent)
  }

  const CheckContrastStyles = (fab, styleparent) => {
    let contrastStyles = {};
    contrastStyles.parent = styleparent;
    contrastStyles.style = style;
    contrastStyles.fabricid = fab.fabid;
    setContrastWish([...constrastWish, contrastStyles]);
    const newstyleJson ={... props.styleJson};
    console.log(newstyleJson);
    const submenu1=[...newstyleJson.submenu]
    for (var i = 0; i < submenu1.length; i++){
      const sumbmenu2=[...submenu1[i].submenu] 
      if (submenu1[i].name === styleparent){
        submenu1[i].fab = fab;
        submenu1[i].isContrastSelected = true;
        // for (var j = 0; j < sumbmenu2.length; j++){
        //   if (sumbmenu2[j].name === style){
        //     sumbmenu2[j].skip = false;
        //   }
        //   else{
        //     sumbmenu2[j].skip = true;
        //     //sumbmenu2[j].selected = true;
        //     sumbmenu2[j].fab = fab;
        //     sumbmenu2[j].fabImage = fabImage;
        //   }
        //   console.log( sumbmenu2[j]);
        // }
      }
      submenu1[i].submenu=  sumbmenu2
    }
    newstyleJson.submenu=submenu1;
    props.setStyleJson(null);
    console.log(newstyleJson);
    props.setStyleJson(newstyleJson)

  }

  const saveWishList = async() => {
    // if (isUser === null){
    //   navigate('/signin')
    // }
    let component = {};
    component.fabricWish = fabricWish;
    component.styleWish = styleWish;
    component.constrastWish = constrastWish;
    await localStorage.setItem('component', JSON.stringify(component));
    console.log(fabricWish, styleWish, constrastWish);
  }

  // useEffect(() => {
  //   setStyleJson(props.styleJson)
  // }, [props.styleJson])

  return (
    <>
      <BottomToTopCustomize
          activeStep = { props.activeStep }
          handleNext = { props.handleNext }
          steps = { props.steps }
          handleBack={ props.handleBack }
          setIncreaseNumber={ props.setIncreaseNumber }
          increaseNumber={ props.increaseNumber }
          setNewValue={ props.setNewValue }
          newValue={ props.newValue }
          allFabs = { props.allFabs }
          styleJson = { props.styleJson }
          splitStyleName = { splitStyleName }
          FabricChange = { FabricChange }
          CheckStyles = { CheckStyles }
          AddFabImage = { AddFabImage }
          selectedFabric = { selectedFabric }
      />
      <div className={ props.activeStep <= 3 ? "custom-fabrics" : "" }>
        <div className="leftComp-customize">
          { props.activeStep === 0 ? (
            <div className="cloths-section">
              { props.allFabs.length > 0 && props.allFabs.map((fab, index) => {
                return <FabricCard fab = { fab } AddFabImage = { AddFabImage } isChecked = { fab._id === selectedFabric ? true : false } FabricChange = { FabricChange }/>
              }) }
            </div>   
          ) : props.activeStep === 1 ? (
            <div className="cloths-section custom-style">
              { props.styleJson && props.styleJson.submenu.map((fab, index) => {
                return (
                  <>
                      { fab.name !== "Front" && fab.name !== "Female" ? (
                        <>
                            <div className="brand-clothes">
                    <h1 className="pl-4">{ fab.name }</h1>
                    <div className="flex gap-3 flex-wrap items-center">
                      { fab?.submenu?.map((_fab, _index) => {
                        return  <div className="nested-cloths" onClick={() => { CheckStyles(_fab.name, fab.name) }}>
                                  {/* <div className="w-full">
                                    <input checked = { !_fab.skip } id="green-checkbox" type="checkbox" className="float-right right-2 w-4 h-4 mt text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                  </div> */}
                                  <img src={ _fab.icon } alt={ splitStyleName(_fab.name) } />
                                  <p className="title">{ splitStyleName(_fab.name) }</p>
                                </div>
                      }) }
                  </div>
                </div>
                        </>
                      ) : (
                        <></>
                      ) }
                  </>
                )
              }) }
            </div>
          ) : props.activeStep === 2 ? (
            <CustomizeContrast styleJson = { props.styleJson } allFabs = { props.allFabs } fabImges = { fabImges } webglref = { WebglRef } CheckContrastStyles = { CheckContrastStyles }/>
          ) : props.activeStep === 3 ? (
            <CustomizeCart selectedFab = { selectedFab } styleJson = { props.styleJson }/>
          ) : props.activeStep === 4 ? (
            <CustomizeMeasurment 
                activeStep = { props.activeStep }
                handleNext = { props.handleNext }
                steps = { props.steps } 
                selectedFab = { selectedFab }
                styleJson = { props.styleJson }/>
          ) : null }
        </div>

        { props.activeStep <= 3 ? (
          <ThreeDDesign
            checkData={ checkData }
            setCheckData = { setCheckData }
            passData = { passData }
            activeStep = { props.activeStep }
            maleJson = { props.maleJson }
            femaleJson = { props.femaleJson }
            WebglRef = { WebglRef }/>
            //<WebglContainer ref={WebglRef} maleJson = { props.maleJson } femaleJson = { props.femaleJson }/>
        ) : (
          <></>
        ) }
        <div className="rightComp-customize">
        {/* Amount section */}
          {props.activeStep === 0 ? (
          <div className="amount-cust-section ">
            <div className="flex items-center gap-4">
              <div className="relative my-3 shopping-div">
                <img src={shppingcart} alt="shppingcart" />
                <p className="amount-shop">2</p>
              </div>
              <div className="actual-amount">
                <h1>$210.00</h1>
              </div>
            </div>
            <div className="infromation-img">
              <img
                src={infroamtionImage}
                alt="infroamtionImage"
                // width={"280px"}
                // height="280px"
              />
            </div>
            <div className="clothename w-full">
              <h1>Fabric</h1>
            </div>

            {/* <div className="clothename">
        <h1>Kurti Pajama</h1>
      </div> */}
            <div className="infromation-cloth">
              <div className="nested-info">
                <p>Fabric:</p>
                <p>Special Cotton</p>
              </div>
              <div className="nested-info">
                <p>Materail:</p>
                <p>Cotton</p>
              </div>
              <div className="nested-info">
                <p>Price:</p>
                <p>$210.00</p>
              </div>
              <div className="nested-info">
                <p>Kurta Color:</p>
                <p>Redish Brwon</p>
              </div>
              <div className="nested-info">
                <p>Kurta Color:</p>
                <p>Redish Brwon</p>
              </div>
              <div className="nested-info">
                <p>Kurta Color:</p>
                <p>Redish Brwon</p>
              </div>
              <div className="nested-info">
                <p>Kurta Color:</p>
                <p>Redish Brwon</p>
              </div>
              <div className="nested-info">
                <p>Kurta Color:</p>
                <p>Redish Brwon</p>
              </div>
              <div className="nested-info">
                <p>Kurta Color:</p>
                <p>Redish Brwon</p>
              </div>
              {/* <div className="nested-info">
          <p>Color:</p>
          <p>Lorem Cotton</p>
        </div> */}
            </div>
            {/* Button */}
            <div
              className="h-14 bg-black text-white rounded-lg text-2xl w-3/6 flex justify-center items-center"
              onClick={props.activeStep === props.steps.length ? "" : props.handleNext}>
              <Button value={"Next"} />
            </div>
          </div>
          ) : props.activeStep === 1 ? (
          <div className="amount-cust-section">
            {/* <div className="relative my-3 shopping-div">
              <img src={shppingcart} alt="shppingcart" />
              <p className="amount-shop">2</p>
            </div>
            <div className="actual-amount">
              <h1>$210.00</h1>
            </div> */}
            <div className="flex items-center gap-4">
              <div className="relative my-3 shopping-div">
                <img src={shppingcart} alt="shppingcart" />
                <p className="amount-shop">2</p>
              </div>
              <div className="actual-amount">
                <h1>$210.00</h1>
              </div>
            </div>
            <div className="infromation-img">
              <img
                src={style}
                alt="style"
                // width={"280px"}
                // height="280px"
              />
            </div>
            <div className="clothename w-full">
              <h1>{props.stepsname}</h1>
            </div>
            {/* <div className="clothename">
              <h1>{stepsname}</h1>
            </div> */}

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
            <div
              className="h-14 bg-black text-white rounded-lg text-2xl w-3/6 flex justify-center items-center"
              onClick={props.activeStep === props.steps.length ? "" : props.handleNext}
            >
              <Button value={"Next"} />
            </div>
          </div>
          ) : props.activeStep === 2 ? (
          <div className="amount-cust-section">
            {/* <div className="relative my-3 shopping-div">
              <img src={shppingcart} alt="shppingcart" />
              <p className="amount-shop">2</p>
            </div> */}
            <div className="flex items-center gap-4">
              <div className="relative my-3 shopping-div">
                <img src={shppingcart} alt="shppingcart" />
                <p className="amount-shop">2</p>
              </div>
              <div className="actual-amount">
                <h1>$210.00</h1>
              </div>
            </div>
            {/* <div className="actual-amount">
              <h1>$210.00</h1>
            </div> */}

            <div className="infromation-img">
              <img
                src={contrast}
                alt="contrast"
                // width={"280px"}
                // height="280px"
              />
            </div>
            <div className="clothename w-full">
              <h1>{props.stepsname}</h1>
            </div>
            {/* old one */}
            {/* <div className="clothename">
              <h1>{stepsname}</h1>
            </div> */}
            <div className="infromation-cloth">
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
            </div>
            <div
              className="h-14 bg-black my-3 text-white rounded-lg text-2xl w-3/6 flex justify-center items-center"
              onClick={props.activeStep === props.steps.length ? "" : props.handleNext}
            >
              <Button value={"Next"} />
            </div>
          </div>
          ) : props.activeStep === 3 ? (
            <div className="amount-cust-section">
            {/* <div className="relative my-3 shopping-div">
          <img src={shppingcart} alt="shppingcart" />
          <p className="amount-shop">2</p>
        </div> */}
            <div className="flex items-center gap-4">
              <div className="relative my-3 shopping-div">
                <img src={shppingcart} alt="shppingcart" />
                <p className="amount-shop">0</p>
              </div>
              <div className="actual-amount">
                <h1>$210.00</h1>
              </div>
            </div>
            {/* <div className="actual-amount">
          <h1>$210.00</h1>
        </div> */}

            <div className="infromation-img">
              <img
                src={contrast}
                alt="contrast"
                // width={"280px"}
                // height="280px"
              />
            </div>
            <div className="clothename w-full">
              <h1>{props.stepsname}</h1>
            </div>
            {/* old one */}
            {/* <div className="clothename">
          <h1>{stepsname}</h1>
        </div> */}
            <div className="infromation-cloth w-full px-4">
              <div className="nested-info flex justify-between items-center py-1">
                <p>Shopping Bag:</p>
                <p>$847</p>
              </div>
              <div className="nested-info flex justify-between items-center py-1">
                <p>Shipping Charges:</p>
                <p>$0.00</p>
              </div>
              <div className="nested-info flex justify-between items-center py-1">
                <p>GST:</p>
                <p>$53.00</p>
              </div>
              <div className="nested-info flex justify-between items-center py-1">
                <p>Discount:</p>
                <p>$0.00</p>
              </div>
              <div className="total-amount flex  justify-between items-center">
                <p>Total:</p>
                <p className="textRed">$900.00</p>
              </div>
            </div>
            <div className="h-14 bg-black w-4/5 mx-auto text-white rounded-lg text-2xl  flex justify-center items-center">
              <Button value={"Add To WishList"} onClick={ () => { saveWishList() } }/>
              
            </div>
            <div
              className="h-14 bg-black my-3 text-white rounded-lg text-2xl w-3/6 flex justify-center items-center"
              onClick={props.activeStep === props.steps.length ? "" : props.handleNext}
            >
              <Button value={"Next"} />
            </div>
          </div>
          ) : null}
        </div>
      </div>
    </>
  );
});
