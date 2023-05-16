import React, { useState, useRef } from "react";
import "./scss/index.scss";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import { ContrastMobile } from "../index";

import { Button, FilterBtn, InputField } from "../../../../components";
// import { SimpleAccordion } from "../../../../components/accordian";
import { FilterData } from "./FilterData";
import { Fabric } from "./fabric";
import { StyleContrast } from "./styleContrast";
import filterimg from "../../../../assests/images/filtersign.png";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import { Divider } from "@mui/material";

let initialVlaue = ["Fabric", "Style", "Contrast", "Cart"];
// const CompRender = ["Filter", "Fabric", "Style", "Contrast"];
export const BottomToTopCustomize = ({
  handleNext,
  steps,
  activeStep,
  handleBack,
  setIncreaseNumber,
  increaseNumber,
  setNewValue,
  newValue,
  allFabs,
  styleJson,
  splitStyleName,
  FabricChange,
  CheckStyles,
  AddFabImage,
  selectedFabric
}) => {
  const focusRef = useRef();
  const sheetRef = useRef();
  const [open, setOpen] = useState(true);
  // let [newValue, setNewValue] = useState("");
  let [chnagebutton, setChangeButton] = useState(true);
  // let [increaseNumber, setIncreaseNumber] = useState(0);
  console.log("Line 33" + newValue);

  return (
    <div className="bottomtop-customize">
      <BottomSheet
        open={open}
        blocking={false}
        // skipInitialTransition
        ref={sheetRef}
        initialFocusRef={focusRef}
        defaultSnap={({ maxHeight }) => maxHeight / 9}
        snapPoints={({ maxHeight }) => [
          maxHeight / 1.4,
          // maxHeight * 0.5,
          maxHeight * 0.12,
        ]}
        className="bottom-sheet-cutomize z-50"
      >
        <div className="main-customize">
          {/* showing filter when we are on fabric */}
          {open && (
            <div className="head">
              {activeStep === 0 ? (
                <>
                  <div className="filter-btn-top-bottom">
                    {/* <img src={filter} alt="Filter" className="active" /> */}
                    {chnagebutton ? (
                      <div
                        onClick={() => {
                          // Full typing for the arguments available in snapTo, yay!!
                          setChangeButton(!chnagebutton);
                          setNewValue("Filter");

                          sheetRef.current.snapTo(({ maxHeight }) => maxHeight);
                        }}
                      >
                        <img
                          src={filterimg}
                          alt="filterimg"
                          width={"75px"}
                          height="75px"
                        />
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          setChangeButton(!chnagebutton);
                          setNewValue("");
                          sheetRef.current.snapTo(
                            ({ maxHeight }) => maxHeight * 0.18
                          );
                        }}
                      >
                        {/* <FilterBtn /> */}
                        <img src={filterimg} alt="filterimg" width={"75px"} />
                      </div>
                    )}

                    {/* <div
                    onClick={() => {
                      // Full typing for the arguments available in snapTo, yay!!
                      setChangeButton(!chnagebutton);
                      sheetRef.current.snapTo(({ maxHeight }) => maxHeight);
                    }}
                  >
                    <FilterBtn />
                </div> */}
                  </div>
                </>
              ) : (
                <button
                  className="next-btn"
                  onClick={() => {
                    handleBack();
                    setIncreaseNumber(--increaseNumber);
                    setNewValue(steps[increaseNumber]);
                  }}
                  disabled={activeStep < 0 || activeStep === steps.length}
                >
                  Back
                </button>
              )}
              <div className="link-list flex items-center gap-2">
                {/* {initialVlaue.map((value, id) => { */}
                {/* return (<div key={id}> */}
                <span
                  onClick={() => {
                    setNewValue(steps[increaseNumber]);
                    setChangeButton(!chnagebutton);
                    sheetRef.current.snapTo(({ maxHeight }) => maxHeight);
                  }}
                >
                  {/* {value} */}
                  {steps[increaseNumber]}
                </span>
              </div>
              {/* // ); */}
              {/* // })} */}
              {/* </div> */}
              <button
                className="next-btn"
                onClick={() => {
                  setIncreaseNumber(++increaseNumber);
                  handleNext();
                  // setChangeButton(!chnagebutton);
                  setNewValue(steps[increaseNumber]);
                }}
                disabled={activeStep < 0 || activeStep === steps.length}
              >
                Next
              </button>

              <div>
                {chnagebutton ? (
                  <div
                    onClick={() => {
                      setChangeButton(!chnagebutton);
                      setNewValue(steps[increaseNumber]);

                      sheetRef.current.snapTo(({ maxHeight }) => maxHeight);
                    }}
                    className="next-btn"

                  >
                    <ArrowUpwardIcon />
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      setChangeButton(!chnagebutton);
                      setNewValue("");
                      sheetRef.current.snapTo(
                        ({ maxHeight }) => maxHeight * 0.18
                      );

                      // sheetRef.current.snapTo(({ maxHeight }) => maxHeight);
                    }}
                    className="next-btn"

                  >
                    <ArrowDownwardIcon />
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="body">
            {/* <SimpleAccordion /> */}
            {/* {CompRender} */}
            {newValue === "Filter" ? (
              <FilterData />
            ) : newValue === "Fabric" ? (
              <Fabric
                setChangeButton={setChangeButton}
                chnagebutton={chnagebutton}
                setNewValue={setNewValue}
                sheetRef={sheetRef}
                allFabs = { allFabs }
                FabricChange = { FabricChange }
                AddFabImage = { AddFabImage }
                selectedFabric = { selectedFabric }
              />
            ) : newValue === "Style" ? (
              <StyleContrast
                setChangeButton={setChangeButton}
                chnagebutton={chnagebutton}
                setNewValue={setNewValue}
                sheetRef={sheetRef}
                styleJson = { styleJson }
                splitStyleName = { splitStyleName }
                CheckStyles = { CheckStyles }
              />
            ) : newValue === "Contrast" ? (
              <ContrastMobile setNewValue={setNewValue} styleJson = { styleJson } allFabs = { allFabs } splitStyleName = { splitStyleName }/>
            ) : null}

            {/* <Divider /> */}
          </div>
          {/* <Divider style={{ marginTop: "20px" }} /> */}
          {/* <div className="buttons">
            <Divider />
            <Button
              bgColor="white"
              color="#202020"
              border="1px solid rgba(0, 0, 0, 0.1)"
              btnClass="button"
              value="Clear"
            />
            <Button
              bgColor="rgba(0, 114, 181, 1)"
              color="#ffff"
              value="Show Results"
              btnClass="button"
              // size="16px"
              flexs={"1"}
              onClick={() => {
                setChangeButton(!chnagebutton);
                sheetRef.current.snapTo(({ maxHeight }) => maxHeight * 0.18);
              }}
            />
          </div> */}
        </div>
      </BottomSheet>
    </div>
  );
};
