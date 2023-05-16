import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AdminHeader, Footer } from "../../../layout";
import successlogo from "../../../assests/images/successtick.png";
import failurelogo from '../../../assests/images/crosssign.png';
import "./scss/index.scss";
import { PostApi, GetApi } from '../../../ApiService/ApiService';
import { AddFabricApi, UpdateFabricApi, getTailorApi } from '../../../ApiService/ApiUrls';
import { FabricFrom, ThreeDDesign, Result } from "../index";
import { useParams } from 'react-router-dom';

const steps = ["Step 1", "Step 2", "Step 3"];
export const MultipleStepAdminForm = () => {
  const { storeNumber } = useParams();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [fabName, setFabname] = React.useState('');
  const [fabNumber, setFabNumber] = React.useState('');
  const [fabImage, setFabImg] = React.useState(null);
  const [tilex, setTileX] = React.useState('30');
  const [tiley, setTileY] = React.useState('30');
  const [Message, setMessage] = React.useState('');
  const [logo, setLogo] = React.useState(failurelogo);
  const [isSaveDb, setSave] = React.useState(false);
  const [Tailor, setTailor] = React.useState(null);
  //const [storeNumber, setStoreNumber] = React.useState('');
  const isStepOptional = (step) => {
    return step === 1;
  };

  React.useEffect(() => {
    LoadTailor();
  }, []);

  const LoadTailor = async() => {
    let response = await GetApi.getParamCall(getTailorApi + storeNumber);
    console.log(response);
    setTailor(response.data.data);
  }

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = async() => {
    console.log(isSaveDb);
    let newSkipped = skipped;
    let response = null;
    if (activeStep === 1){
      response = await PostApi.postcall({'fabnumber' : fabNumber, 'fabname': fabName, 'fabimage': fabImage, 'tilex': tilex[0], 'tiley': tiley[0], 'storeNumber': storeNumber, 'created_by' : Tailor.storeName}, AddFabricApi);
      console.log(response);
      if (response.status === 200){
        setMessage('The Fabric Added Successfully!');
        setLogo(successlogo);
      }else{
        setMessage('The Fabric not added!');
        setLogo(failurelogo);
      }
    }

    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
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

  return (
    <div>
      <AdminHeader Tailor = { Tailor }/>
      <div className="admin-dashbaord h-auto">
        <div className="admin-nested">
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {activeStep === 0 ? (
                  <FabricFrom
                    handleNext={handleNext}
                    activeStep={activeStep}
                    steps={steps}
                    setFabname = { setFabname }
                    setFabNumber = { setFabNumber }
                    setFabImg = { setFabImg }
                  />
                ) : activeStep === 1 ? (
                  <ThreeDDesign
                    handleNext={handleNext}
                    activeStep={activeStep}
                    steps={steps}
                    setTileX = {setTileX}
                    setTileY = {setTileY}
                    setSave = { setSave }
                    fab = { fabImage }
                  />
                ) : activeStep === 2 ? (
                  <Result
                    handleNext={handleNext}
                    activeStep={activeStep}
                    steps={steps}
                    Message = {Message}
                    logo = { logo }
                  />
                ) : null}

                <Box className="admin-back"  sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                    
                  >
                    Back
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </div>
      </div>
      {/* add footer */}
      <Footer />
    </div>
  );
};
