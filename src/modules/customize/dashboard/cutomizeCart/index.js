import React, { useEffect, useState } from "react";
import "./scss/index.scss";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
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

export const CustomizeCart = ({ selectedFab, styleJson }) => {
  const [fabricCart, setFabricsCart] = useState(false);
  const [styleCart, setStyleCart] = useState(false);
  const [contrastCart, setcontrastCart] = useState(false);
  const [MeaurmentCart, setMeaurmentCart] = useState(false);

  useEffect(() => {
    console.log(styleJson);
  }, [])

  const BuffertoImage = (arr) => {
    if (arr){
      return arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
      
    }else{
        return '';
    }
  }

  return (
    <div className="customizecart-section">
      <div className="heading-cart">
        <h1>Infromation</h1>
      </div>
      <div className="list_dropdown ">
        <div className={"main-cart-list my-3 mb-6"}>
          <ListItem
            button
            onClick={() => setFabricsCart(!fabricCart)}
            className="inboxes"
          >
            <ListItemText primary="Fabric" className="font-black" />
            {fabricCart ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <div className="checking">
            { selectedFab.fab !== undefined ? (
                            <Collapse
                            in={fabricCart}
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
              
            {/* {dropDown.map((value) => {
              
            })} */}
          </div>
        </div>

        <div className={"main-cart-list my-3 mb-6"}>
          <ListItem
            button
            onClick={() => setStyleCart(!styleCart)}
            className="inboxes"
          >
            <ListItemText primary="Style" className="font-black text-2xl" />
            {styleCart ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <div className="checking">
            {styleJson.submenu.map((value, index) => {
             return( <>
                { value.selected && value.submenu.map((_style, _index) => {
                  return (<>
                    { _style.selected ? (
                      <Collapse
                      in={styleCart}
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
            onClick={() => setcontrastCart(!contrastCart)}
            className="inboxes"
          >
            <ListItemText primary="Contrast" className="font-black text-2xl" />
            {contrastCart ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <div className="checking">
            {styleJson.submenu.map((value, index) => {
             return <>
                { value.isContrastSelected ? (
                  <>
                    <Collapse
                      in={contrastCart}
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
            onClick={() => setMeaurmentCart(!MeaurmentCart)}
            className="inboxes"
          >
            <ListItemText
              primary="Measurments"
              className="font-black text-2xl"
            />
            {MeaurmentCart ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
        </div>
      </div>
    </div>
  );
};

