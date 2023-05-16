import React, { useState } from "react";
import "./scss/index.scss";
import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
import { Button } from "../../../../components";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import texture2 from "../../../../assests/images/cloths/173-texture2.jpg";
import texture3 from "../../../../assests/images/cloths/173-texture3.jpg";
import shirtcloth from "../../../../assests/images/cloths/173-textural.jpg";
import Shirt_Collar_Standard from "../../../../assests/images/customize/custStyle/Shirt_Collar_Standard.png";
import Shirt_Cuff_Button_Cut_Corner_Edge from "../../../../assests/images/customize/custStyle/Shirt_Cuff_Button_Cut_Corner_Edge.png";
import Shirt_Elbow_Patch_Long from "../../../../assests/images/customize/custStyle/Shirt_Elbow_Patch_Long.png";
import collar from "../../../../assests/images/customize/contrast/collar.png";
import cuff from "../../../../assests/images/customize/contrast/cuff.jpg";
import packet1 from "../../../../assests/images/customize/contrast/PLACKET/packet1.png";
import elbow1 from "../../../../assests/images/customize/contrast/ELBOW PATCH/elbow1.png";
import measumeter from "../../../../assests/images/customize/measurment/measumeter.png";
import telephone from "../../../../assests/images/customize/measurment/telephone.png";
import seacrhperson from "../../../../assests/images/customize/measurment/seacrhperson.png";
import shirtmeasurment from "../../../../assests/images/customize/measurment/shirtmeasurment.png";
import robot from "../../../../assests/images/customize/measurment/robot.png";
import girldress from "../../../../assests/images/customize/measurment/girldress.png";
import { ListData } from "./listData";

const dropDown = [
  {
    id: 0,
    img: shirtcloth,
    heading: "Cotton",
    fabric: "Fabric",
    fabricName: "Cotton-Viscose",
    Price: "Price",
    fabricPrice: "$89.00",
    fabricmongram: "Monogram",
    MonogramPrive: "$86.00",
  },
  {
    id: 1,
    img: texture2,
    heading: "Cotton",
    fabric: "Fabric",
    fabricName: "Cotton-Viscose",
    Price: "Price",
    fabricPrice: "$89.00",
    fabricmongram: "Monogram",
    MonogramPrive: "$86.00",
  },
  {
    id: 2,
    img: texture3,
    heading: "Cotton",
    fabric: "Fabric",
    fabricName: "Cotton-Viscose",
    Price: "Price",
    fabricPrice: "$89.00",
    fabricmongram: "Monogram",
    MonogramPrive: "$86.00",
  },
];

const dropDownStyle = [
  {
    id: 0,
    img: Shirt_Collar_Standard,
    heading: "Cotton",
    fabric: "Fabric",
    fabricName: "Cotton-Viscose",
    Price: "Price",
    fabricPrice: "$210.00",
    fabricmongram: "Monogram",
    MonogramPrive: "$150.00",
  },
  {
    id: 1,
    img: Shirt_Cuff_Button_Cut_Corner_Edge,
    heading: "Cotton",
    fabric: "Fabric",
    fabricName: "Cotton-Viscose",
    Price: "Price",
    fabricPrice: "$210.00",
    fabricmongram: "Monogram",
    MonogramPrive: "$150.00",
  },
  {
    id: 2,
    img: Shirt_Elbow_Patch_Long,
    heading: "Cotton",
    fabric: "Fabric",
    fabricName: "Cotton-Viscose",
    Price: "Price",
    fabricPrice: "$210.00",
    fabricmongram: "Monogram",
    MonogramPrive: "$150.00",
  },
];

const dropDownContrast = [
  {
    id: 0,
    img: collar,
    heading: "Cotton",
    fabric: "Fabric",
    fabricName: "Cotton-Viscose",
    Price: "Price",
    fabricPrice: "$210.00",
    fabricmongram: "Monogram",
    MonogramPrive: "$150.00",
  },
  {
    id: 1,
    img: cuff,
    heading: "Cotton",
    fabric: "Fabric",
    fabricName: "Cotton-Viscose",
    Price: "Price",
    fabricPrice: "$210.00",
    fabricmongram: "Monogram",
    MonogramPrive: "$150.00",
  },
  {
    id: 2,
    img: packet1,
    heading: "Cotton",
    fabric: "Fabric",
    fabricName: "Cotton-Viscose",
    Price: "Price",
    fabricPrice: "$210.00",
    fabricmongram: "Monogram",
    MonogramPrive: "$150.00",
  },
  {
    id: 3,
    img: elbow1,
    heading: "Cotton",
    fabric: "Fabric",
    fabricName: "Cotton-Viscose",
    Price: "Price",
    fabricPrice: "$210.00",
    fabricmongram: "Monogram",
    MonogramPrive: "$150.00",
  },
];

const cardsMeasurment = [
  {
    id: 0,
    img: measumeter,
    desc: "Take Your Measurment by Yourself",
    linkDesc: "Read More",
  },
  {
    id: 1,
    img: telephone,
    desc: "Contact Someone to come to your Place",
    linkDesc: "Read More",
  },
  {
    id: 2,
    img: seacrhperson,
    desc: "Find nearest Tailor Shop for Measurements",
    linkDesc: "Read More",
  },
  {
    id: 3,
    img: robot,
    desc: "Take Measurements by AI",
    linkDesc: "Read More",
  },
  {
    id: 4,
    img: shirtmeasurment,
    desc: "Send Your Best Fittings For Measurements",
    linkDesc: "Read More",
  },
  {
    id: 5,
    img: girldress,
    desc: "Choose Express Way",
    linkDesc: "Read More",
  },
];

export const CustomizeMeasurment = ({ handleNext, steps, activeStep, selectedFab, styleJson }) => {
  const [fabricMeasurment, setFabricsMeasurment] = useState(false);
  const [stylemeasurment, setStyleMeasurment] = useState(false);
  const [contrastmeasurment, setcontrastMeasurment] = useState(false);
  const [CardMeaurment, setCardMeaurment] = useState(false);
  const [changeComp, setChangeComp] = useState(true);

  const BuffertoImage = (arr) => {
    if (arr){
      return arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
      
    }else{
        return '';
    }
  }

  return (
    <>
      {changeComp ? (
        <>
          <div className="customizeMeasurment-setion">
            <div className="customizemeasurement-section">
              <div className="heading-cart">
                <h1>Infromation</h1>
              </div>
              <div className="list_dropdown ">
                <div className={"main-cart-list my-3 mb-6"}>
                  <ListItem
                    button
                    onClick={() => setFabricsMeasurment(!fabricMeasurment)}
                    className="inboxes"
                  >
                    <ListItemText primary="Fabric" className="font-black" />
                    {fabricMeasurment ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <div className="checking">
                  { selectedFab.fab !== undefined ? (
                            <Collapse
                            in={fabricMeasurment}
                            timeout="auto"
                            unmountOnExit
                            className="content-divcart"
                            key={0}
                          >
                            <List component="div" disablePadding>
                              <div className="desc-shopping w-full">
                                <div className="img-shirt">
                                  <img src={ BuffertoImage(selectedFab.fabImage) } alt="shirtcloth" />
                                </div>
                                <div className="desc-about flex flex-col justify-between">
                                  <div>
                                    <h1>HI</h1>
                                  </div>
                                  <div className="nested-desc flex gap-4 items-center">
                                    {/* <h1></h1> */}
                                    <p>HI</p>
                                    <p>HH</p>
                                  </div>
                                  <div className="nested-desc flex gap-4 items-center">
                                    {/* <h1></h1> */}
                                    <p>HH</p>
                                    <p>HH</p>
                                  </div>
                                  <div className="nested-desc flex gap-4 items-center">
                                    {/* <h1></h1> */}
                                    <p>HH</p>
                                    <p>HH</p>
                                  </div>
          
                                  {/* <div>
                              <h2>Hello</h2>
                            </div> */}
                                </div>
                              </div>
                            </List>
                        </Collapse>
          
            ) : (
              <></>
            ) }
                  </div>
                </div>

                <div className={"main-cart-list my-3 mb-6"}>
                  <ListItem
                    button
                    onClick={() => setStyleMeasurment(!stylemeasurment)}
                    className="inboxes"
                  >
                    <ListItemText
                      primary="Style"
                      className="font-black text-2xl"
                    />
                    {stylemeasurment ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <div className="checking">
                  {styleJson.submenu.map((value, index) => {
             return( <>
                { value.selected && value.submenu.map((_style, _index) => {
                  return (<>
                    { _style.selected ? (
                      <Collapse
                      in={stylemeasurment}
                      timeout="auto"
                      unmountOnExit
                      className="content-divcart"
                      key={_style.name}
                    >
                      <List component="div" disablePadding>
                        <div className="desc-shopping w-full">
                          <div className="img-shirt">
                            <img src={_style.icon} alt="shirtcloth" />
                          </div>
                          <div className="desc-about flex flex-col justify-between">
                            <div>
                              <h1>{_style.name}</h1>
                            </div>
                            <div className="nested-desc flex gap-4 items-center">
                              {/* <h1></h1> */}
                              <p>{_style.name}:</p>
                              <p>{_style.name}</p>
                            </div>
                            <div className="nested-desc flex gap-4 items-center">
                              {/* <h1></h1> */}
                              <p>{_style.name}:</p>
                              <p>{_style.name}</p>
                            </div>
                            <div className="nested-desc flex gap-4 items-center">
                              {/* <h1></h1> */}
                              <p>{_style.name}:</p>
                              <p>{_style.name}</p>
                            </div>
    
                            {/* <div>
                        <h2>Hello</h2>
                      </div> */}
                          </div>
                        </div>
                      </List>
                    </Collapse>
                    ) : (
                      <></>
                    ) }
                  </>)
                }) }
              </> )
            })}
                  </div>
                </div>
                {/* Contrast */}
                <div className={"main-cart-list my-3 mb-6"}>
                  <ListItem
                    button
                    onClick={() => setcontrastMeasurment(!contrastmeasurment)}
                    className="inboxes"
                  >
                    <ListItemText
                      primary="Contrast"
                      className="font-black text-2xl"
                    />
                    {contrastmeasurment ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <div className="checking">
                  {styleJson.submenu.map((value, index) => {
             return <>
                { value.isContrastSelected ? (
                  <>
                    <Collapse
                      in={contrastmeasurment}
                      timeout="auto"
                      unmountOnExit
                      className="content-divcart"
                      key={value.id}
                    >
                      <List component="div" disablePadding>
                        <div className="desc-shopping w-full">
                          <div className="img-shirt">
                            <img src={value.submenu[0].icon} alt="shirtcloth" />
                          </div>
                          <div className="desc-about flex flex-col justify-between">
                            <div>
                              <h1>{value.name}</h1>
                            </div>
                            <div className="nested-desc flex gap-4 items-center">
                              {/* <h1></h1> */}
                              <p>JJ</p>
                              <p>HH</p>
                            </div>
                            <div className="nested-desc flex gap-4 items-center">
                              {/* <h1></h1> */}
                              <p>HH</p>
                              <p>HH</p>
                            </div>
                            <div className="nested-desc flex gap-4 items-center">
                              {/* <h1></h1> */}
                              <p>HH</p>
                              <p>HH</p>
                            </div>

                            {/* <div>
                        <h2>Hello</h2>
                      </div> */}
                          </div>
                        </div>
                      </List>
                    </Collapse>
                  </>
                ) : (
                  <></>
                ) }
              </>
            })}
                  </div>
                </div>

                {/* Meaurment */}
                <div className={"main-cart-list my-3 mb-6"}>
                  <ListItem
                    button
                    onClick={() => setCardMeaurment(!CardMeaurment)}
                    className="inboxes"
                  >
                    <ListItemText
                      primary="Measurments"
                      className="font-black text-2xl"
                    />
                    {CardMeaurment ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                </div>
              </div>
            </div>

            {/* second Right section*/}
            <div className="sectionMeasurment-two">
              {/* <h1>Hello</h1> */}
              <div className="heading-cart">
                <h1>Choose Measurement Way</h1>
              </div>
              <div className="cards-measurment">
                {cardsMeasurment.map((value) => {
                  return (
                    <div
                      className="nested-card"
                      key={value.id}
                      // onClick={<ListData />}
                      onClick={() => setChangeComp(false)}
                    >
                      <img src={value.img} alt="measumeter" />
                      <p>{value.desc}</p>
                      <a href="#">{value.linkDesc}</a>
                    </div>
                  );
                })}

                {/* <div className="nested-card">
            <img src={measumeter} alt="measumeter" />
            <p>Take Your Measurment by Yourself</p>
            <a href="#">Read More</a>
          </div>
          <div className="nested-card">
            <img src={measumeter} alt="measumeter" />
            <p>Take Your Measurment by Yourself</p>
            <a href="#">Read More</a>
          </div> */}
              </div>
              <div
                className="h-14 bg-black text-white rounded-lg text-xl w-48 ml-auto my-2 flex justify-end items-center"
                onClick={activeStep === steps.length ? "" : handleNext}
              >
                <Button value={"Next"} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <ListData setChangeComp={setChangeComp} />
      )}
    </>
  );
};
