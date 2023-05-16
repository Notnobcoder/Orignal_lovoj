import React, { useState } from "react";

import mainlogo from "../../../assests/images/Logo.png";
import shoppingbag from "../../../assests/images/shoppingbag.png";
// import { Button } from "../../../components";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { NavLink } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import "./scss/index.scss";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const steps = [
  "Fabric",
  "Style",
  "Contrast",
  "Cart",
  "Measurnments",
  "payment",
  "completed",
];

export const CustomizeHeader = ({
  setHidden,
  activeStep,
  setActiveStep,
  setStepName,
  handleNext,
  handleBack,
  setIncreaseNumber,
  increaseNumber,
  setNewValue,
  newValue,
  steps,
}) => {
  return (
    <div className="header-cutomize  mx-auto">
      {/* <div className="mobheader"><MobileHeader /></div> */}
      <div className="flex justify-between flex-wrap items-center mt-1">
        <div className="flex items-center justify-start gap-3 header-customize">
          {/* <p>Moon Light Tailor</p> */}
          <div className="bar-box-landing" onClick={() => setHidden(false)}>
            <div className="bar-box-landing__line--1">s</div>
            <div className="bar-box-landing__line--2"></div>
            <div className="bar-box-landing__line--3"></div>
          </div>
          <div className="flex items-center gap-3 louoj-logo">
            {/* <p>Bibuthi</p> */}
            <NavLink to={"/"}>
              <img src={mainlogo} alt="mainlogo" className="h-8" />
            </NavLink>
          </div>
          {/* arrow function */}
          {/* <div className="flex items-center gap-2 btn-group">
            <div
              onClick={() => {
                handleBack();
                setIncreaseNumber(--increaseNumber);
                setNewValue(newValue[increaseNumber]);
              }}
            >
              <button
                className="arrow-sign"
                disabled={activeStep === 0 || activeStep < 0}
              >
                <ArrowCircleLeftIcon />
              </button>
            </div>
            <div
              onClick={() => {
                handleNext();
                setIncreaseNumber(++increaseNumber);
                setNewValue(newValue[increaseNumber]);
              }}
            >
              <button
                className="arrow-sign"
                disabled={activeStep < 0 || activeStep === steps.length}
              >
                <ArrowCircleRightIcon />
              </button>
            </div>
          </div> */}
        </div>
        {/* <div> */}
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps} className="steppers">
                  <StepLabel
                    {...labelProps}
                    onClick={() => {
                      setActiveStep(index);
                      setStepName(steps[index]);
                      setNewValue(steps[index]);
                      setIncreaseNumber(index);
                    }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>
        {/* </div> */}
        {/* <div className="flex items-center gap-3 relative shopping">
          <NavLink to={"/"}>
            <img src={shoppingbag} alt="shoppingbag" />
            <p className="amount-shop">2</p>

          </NavLink>
        </div> */}
      </div>
    </div>
  );
};
