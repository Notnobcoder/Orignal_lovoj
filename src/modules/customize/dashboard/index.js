import React, { useEffect, useRef, useState } from "react";
import "./scss/index.scss";
import Box from "@mui/material/Box";
import filterImg from "../../../assests/images/blueFilter.png";
import { Button } from "../../../components";
import {
  CustomizeHeader,
  CustomizeSideBar,
  FilterCustomizate,
} from "../../../layout";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { CustomizeFabric, CustomizeStyle } from "../index";
import { Footer } from "../../../layout";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { GetApi } from '../../../ApiService/ApiService';
import { GetTailorFabricApi } from '../../../ApiService/ApiUrls';
let steps = [
  "Fabric",
  "Style",
  "Contrast",
  "Cart",
  "Measurnments",
  "option",
  "completed",
];


export const Customize = () => {
  const styleRef = React.createRef();
  const fabRef = React.createRef();
  const { storeNumber } = useParams();
  const [isHidden, setHidden] = useState(true);
  const [tailorValue, setTailor] = useState({});
  const [isFilter, setFilter] = useState(true);
  const [activeStep, setActiveStep] = React.useState(0);
  const [stepsname, setStepName] = useState(steps);
  const [skipped, setSkipped] = React.useState(new Set());
  const [maleJson, setMaleJson] = useState([]);
  const [femaleJson, setFemaleJson] = useState([]);
  const [allFabs, setFabs] = useState([]);
  const [isFemale, setFemale] = useState(false);
  const [styleJson, setStyleJson] = useState([]);
  let [increaseNumber, setIncreaseNumber] = useState(0);
  let [newValue, setNewValue] = useState("");
  const isStepOptional = (step) => {
    return step === 1;
  };


  function useQuery(){
    return new URLSearchParams(window.location.search);
  }

  const setStyle = (isFemale, index, nameClicked) => {
    setHidden(!isHidden)
    console.log(index);
    if (isFemale){
      console.log(femaleJson[index]);
      setStyleJson(femaleJson[index])
    }else{
      console.log(maleJson[index]);
      setStyleJson(maleJson[index])
    }
    fabRef.current.ChangeStyle(nameClicked);
  }

  const ChangeMale = (isMale, jsonType) => {
    console.log(fabRef);
    let json = {};
    if (isMale){
      json = maleJson;
      setStyleJson(maleJson[0])
    }else {
      json = femaleJson;
      setStyleJson(femaleJson[0])
    }
    fabRef.current.ChangeMale(isMale, jsonType, json);
    // if (activeStep === 0){
      
    // }else if(activeStep === 1){
    //   styleRef.current.ChangeMale(isMale);
    // }
  }

  const ChangeFemale = (isMale) => {
    fabRef.current.ChangeMale(isMale);
  }

  useEffect(() => {
    const jsonValue = localStorage.getItem('currentuser');
    let tailorValue = JSON.parse(jsonValue);
    setTailor(tailorValue);
    getJson();
    getFabrics();
  }, []);

  const getFabrics = async() => {
    let response = await GetApi.getParamCall(GetTailorFabricApi+storeNumber);
    if (response.status === 200){
      setFabs(response.data);
    }
  }

  const getJson = async() => {
    await fetch('/final_old.json', {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
    })
    .then(function(response){
      return response.json();
    })
    .then(function(myJson){
      console.log(myJson.menu);
      setMaleJson(myJson.menu);
    })

    await fetch('/kurtiLady.json', {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
    })
    .then(function(response){
      return response.json();
    })
    .then(function(myJson){
      setFemaleJson(myJson.menu);
    })
  }
  
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log(activeStep + 1);
    setStepName(steps[activeStep + 1]);
    setSkipped(newSkipped);
  };
  // console.log(stepsname);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setStepName(steps[activeStep - 1]);
  };


  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  console.log(activeStep === steps.length - 1);
  return (
    <div className="custmize" >
      <div className="">
        <CustomizeHeader
          setHidden={setHidden}
          // setFilter={setFilter}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          setStepName={setStepName}
          handleNext={handleNext}
          handleBack={handleBack}
          steps={steps}
          setIncreaseNumber={setIncreaseNumber}
          increaseNumber={increaseNumber}
          setNewValue={setNewValue}
          newValue={newValue}
          
        />
        <CustomizeSideBar isHidden={isHidden} setHidden={setHidden} maleJson = { maleJson } femaleJson = { femaleJson }  setStyle = { setStyle } ChangeMale = { ChangeMale } ChangeFemale = { ChangeFemale } tailorValue = { tailorValue }/>
        {activeStep === 0 ? (
          <FilterCustomizate isFilter={isFilter} setFilter={setFilter} />
        ) : null}
      </div>
      <div className="customize-content">
        <div className="nested-customize mx-auto relative">
          {/* <h1>hello</h1> */}

          <Box sx={{ width: "100%" }}>
            <Box className="flex  gap-2 button-div">
              {/* {activeStep === 0 ? ( */}
              <div className="flex gap-2 items-center pl-16 ">
                <div
                  className={
                    activeStep === 0
                      ? "visible bg-white rounded-lg "
                      : "invisible"
                  }
                  onClick={() => setFilter(false)}
                >
                  <img
                    src={filterImg}
                    alt="filterImg"
                    width={"45px"}
                    height="45px"
                    className="cursor-pointer"
                  />
                </div>
                {activeStep === 0 ? (
                  <div className="shirt-data">
                    <p className="text-xl">
                     Fabrics Found: <span className="font-bold">{ allFabs.length }</span>{" "}
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="flex items-center gap-2">
                <div onClick={activeStep <= 0 ? "" : handleBack}>
                  <button
                    className="arrow-sign"
                    disabled={activeStep === 0 || activeStep < 0}
                  >
                    <ArrowCircleLeftIcon />
                  </button>
                </div>
                <div onClick={activeStep === steps.length ? "" : handleNext}>
                  <button
                    className="arrow-sign"
                    disabled={activeStep < 0 || activeStep === steps.length}
                  >
                    <ArrowCircleRightIcon />
                  </button>
                </div>
              </div>
            </Box>
            {/* <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                return (
                  <Step key={label} {...stepProps} className="steppers">
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper> */}
          </Box>

          {/* Render Components */}
          {/* {activeStep === 0 ? (
            <CustomizeFabric
              stepsname={stepsname}
              activeStep={activeStep}
              handleNext={handleNext}
              steps={steps}
              allFabs = { allFabs }
              maleJson = { maleJson }
              femaleJson = { femaleJson }
              ref = { fabRef }
            />
          ) : activeStep === 1 ? (
            <CustomizeStyle
              stepsname={stepsname}
              activeStep={activeStep}
              handleNext={handleNext}
              steps={steps}
              styleJson = { styleJson.length === 0 ? maleJson[0] : styleJson }
              ref = { styleRef }
            />
          ) : activeStep === 2 ? (
            <CustomizeStyle
              stepsname={stepsname}
              activeStep={activeStep}
              handleNext={handleNext}
              steps={steps}
            />
          ) : null} */}
          <CustomizeFabric
              stepsname={stepsname}
              activeStep={activeStep}
              handleNext={handleNext}
              steps={steps}
              setActiveStep={setActiveStep}
              handleBack={handleBack}
              setIncreaseNumber={setIncreaseNumber}
              increaseNumber={increaseNumber}
              setNewValue={setNewValue}
              newValue={newValue}
              allFabs = { allFabs }
              maleJson = { maleJson }
              femaleJson = { femaleJson }
              ref = { fabRef }
              styleJson = { styleJson.length === 0 ? maleJson[0] : styleJson }
              setStyleJson = { (value) => { setStyleJson(value) } }
            />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};
