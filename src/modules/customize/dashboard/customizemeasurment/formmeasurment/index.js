import React from "react";
import "./scss/index.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, InputField } from "../../../../../components";
import shoulder from "../../../../../assests/images/customize/measurment/shoulder.png";
import chest from "../../../../../assests/images/customize/measurment/chest.png";
import neck from "../../../../../assests/images/customize/measurment/neck.png";
import backshoulder from "../../../../../assests/images/customize/measurment/backshoulder.png";
import waist from "../../../../../assests/images/customize/measurment/waist.png";
import sleeves from "../../../../../assests/images/customize/measurment/sleeves.png";

export const FormMeasurment = ({ setOpenForm }) => {
  return (
    <div className="frommeasurment-section">
      {/* index */}
      <button onClick={() => setOpenForm(true)} className="btn-back-from">
        {" "}
        <ArrowBackIcon />
      </button>
      <div className="heading-from my-4">
        <h1>Lets Measure Your Fittings!</h1>
      </div>
      <form className="from-section">
        <div className="input-field-measurment">
          {/* <label htmlFor="measurmentProfile">Measurement profile Name</label> */}
          <InputField
            labeluse={"measurmentProfile"}
            label="Measurement Profile Name"
            desc={"(That you easily understand in future)"}
            type="text"
            placeholder={"Enter name here"}
            width="100%"
            border={"1px solid gray"}
          />
        </div>
        <div className="inputs">
          <InputField
            // labeluse={"measurmentProfile"}
            // label="Measurement Profile Name"
            // desc={"(That you easily understand in future)"}
            type="text"
            placeholder={"Choose Measurement Unit"}
            width="100%"
            border={"1px solid gray"}
          />
          <InputField
            // labeluse={"measurmentProfile"}
            // label="Measurement Profile Name"
            // desc={"(That you easily understand in future)"}
            type="text"
            placeholder={"Enter Your Height"}
            width="100%"
            border={"1px solid gray"}
          />
          <InputField
            // labeluse={"measurmentProfile"}
            // label="Measurement Profile Name"
            // desc={"(That you easily understand in future)"}
            type="text"
            placeholder={"Enter Your Weight"}
            width="100%"
            border={"1px solid gray"}
          />
        </div>
        <div className="from-cards">
          <div className="nested-fromCard">
            <img src={shoulder} alt="shoulder" />
            <div className="card-desc">
              <h1>Shoulder Width</h1>
              <p>
                Measure from the end of the right shoulder to the end of the
                intersects thevertical plane of the arm
              </p>
              <InputField
                type="text"
                placeholder={"Enter Your Weight"}
                width="100%"
                border={"1px solid gray"}
              />
            </div>
          </div>
          <div className="nested-fromCard">
            <img src={shoulder} alt="shoulder" />
            <div className="card-desc">
              <h1>Shoulder Width</h1>
              <p>
                Measure from the end of the right shoulder to the end of the
                intersects thevertical plane of the arm
              </p>
              <InputField
                type="text"
                placeholder={"Enter Your Weight"}
                width="100%"
                border={"1px solid gray"}
              />
            </div>
          </div>
          <div className="nested-fromCard">
            <img src={shoulder} alt="shoulder" />
            <div className="card-desc">
              <h1>Shoulder Width</h1>
              <p>
                Measure from the end of the right shoulder to the end of the
                intersects thevertical plane of the arm
              </p>
              <InputField
                type="text"
                placeholder={"Enter Your Weight"}
                width="100%"
                border={"1px solid gray"}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
