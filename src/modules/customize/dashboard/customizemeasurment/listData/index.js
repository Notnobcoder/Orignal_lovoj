import React, { useState } from "react";
import "./scss/index.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "../../../../../components";
import { FormMeasurment } from "../formmeasurment";

export const ListData = ({ setChangeComp }) => {
  const [openForm, setOpenForm] = useState(true);

  return (
    <>
      {openForm ? (
        <div className="listData-section">
          List Data
          <button onClick={() => setChangeComp(true)}>Back</button>
          <h1 className="exiting-heading py-3">
            Your Existing Measurements Profiles
          </h1>
          <div className="listData_desc">
            <div className="listData-card">
              <div className="flex justify-between items-center py-2 card-heading">
                <h1 className="text-3xl">Shirt Fitting</h1>
                <p>12-07-2022</p>
              </div>
              <div className="card-desc">
                <h2>Your used for</h2>
                <div className="flex justify-between items-center py-1">
                  <p>Yellow Shirt</p>
                  <p>18-06-2021</p>
                </div>
                <div className="flex justify-between items-center py-1">
                  <p>Yellow Shirt</p>
                  <p>18-06-2021</p>
                </div>
                <div className="flex justify-between items-center py-1">
                  <p>Yellow Shirt</p>
                  <p>18-06-2021</p>
                </div>
              </div>
              <div className="links">
                <button className="button-one">
                  <VisibilityIcon />
                </button>
                <button className="btn-two">Select</button>
                <button className="button-three">
                  <DeleteIcon />
                </button>
              </div>
            </div>

            <div className="listData-card">
              <div className="flex justify-between items-center py-2 card-heading">
                <h1 className="text-3xl">Shirt Fitting</h1>
                <p>12-07-2022</p>
              </div>
              <div className="card-desc">
                <h2>Your used for</h2>
                <div className="flex justify-between items-center py-1">
                  <p>Yellow Shirt</p>
                  <p>18-06-2021</p>
                </div>
                <div className="flex justify-between items-center py-1">
                  <p>Yellow Shirt</p>
                  <p>18-06-2021</p>
                </div>
                <div className="flex justify-between items-center py-1">
                  <p>Yellow Shirt</p>
                  <p>18-06-2021</p>
                </div>
              </div>
              <div className="links">
                <button className="button-one">
                  <VisibilityIcon />
                </button>
                <button className="btn-two">Select</button>
                <button className="button-three">
                  <DeleteIcon />
                </button>
              </div>
            </div>

            <div className="listData-card">
              <div className="flex justify-between items-center py-2 card-heading">
                <h1 className="text-3xl">Shirt Fitting</h1>
                <p>12-07-2022</p>
              </div>
              <div className="card-desc">
                <h2>Your used for</h2>
                <div className="flex justify-between items-center py-1">
                  <p>Yellow Shirt</p>
                  <p>18-06-2021</p>
                </div>
                <div className="flex justify-between items-center py-1">
                  <p>Yellow Shirt</p>
                  <p>18-06-2021</p>
                </div>
                <div className="flex justify-between items-center py-1">
                  <p>Yellow Shirt</p>
                  <p>18-06-2021</p>
                </div>
              </div>
              <div className="links">
                <button className="button-one">
                  <VisibilityIcon />
                </button>
                <button className="btn-two">Select</button>
                <button className="button-three">
                  <DeleteIcon />
                </button>
              </div>
            </div>

            <div className="listData-card">
              <div className="flex justify-between items-center py-2 card-heading">
                <h1 className="text-3xl">Shirt Fitting</h1>
                <p>12-07-2022</p>
              </div>
              <div className="card-desc">
                <h2>Your used for</h2>
                <div className="flex justify-between items-center py-1">
                  <p>Yellow Shirt</p>
                  <p>18-06-2021</p>
                </div>
                <div className="flex justify-between items-center py-1">
                  <p>Yellow Shirt</p>
                  <p>18-06-2021</p>
                </div>
                <div className="flex justify-between items-center py-1">
                  <p>Yellow Shirt</p>
                  <p>18-06-2021</p>
                </div>
              </div>
              <div className="links">
                <button className="button-one">
                  <VisibilityIcon />
                </button>
                <button className="btn-two">Select</button>
                <button className="button-three">
                  <DeleteIcon />
                </button>
              </div>
            </div>

            <div className="listData-card">
              <div className="flex justify-between items-center py-2 card-heading">
                <h1 className="text-3xl">Shirt Fitting</h1>
                <p>12-07-2022</p>
              </div>
              <div className="card-desc">
                <h2>Your used for</h2>
                <div className="flex justify-between items-center py-1">
                  <p>Yellow Shirt</p>
                  <p>18-06-2021</p>
                </div>
                <div className="flex justify-between items-center py-1">
                  <p>Yellow Shirt</p>
                  <p>18-06-2021</p>
                </div>
                <div className="flex justify-between items-center py-1">
                  <p>Yellow Shirt</p>
                  <p>18-06-2021</p>
                </div>
              </div>
              <div className="links">
                <button className="button-one">
                  <VisibilityIcon />
                </button>
                <button className="btn-two">Select</button>
                <button className="button-three">
                  <DeleteIcon />
                </button>
              </div>
            </div>

            <div className="listData-card">
              <div className="flex justify-between items-center py-2 card-heading">
                <h1 className="text-3xl">Shirt Fitting</h1>
                <p>12-07-2022</p>
              </div>
              <div className="card-desc">
                <h2>Your used for</h2>
                <div className="flex justify-between items-center py-1">
                  <p>Yellow Shirt</p>
                  <p>18-06-2021</p>
                </div>
                <div className="flex justify-between items-center py-1">
                  <p>Yellow Shirt</p>
                  <p>18-06-2021</p>
                </div>
                <div className="flex justify-between items-center py-1">
                  <p>Yellow Shirt</p>
                  <p>18-06-2021</p>
                </div>
              </div>
              <div className="links">
                <button className="button-one">
                  <VisibilityIcon />
                </button>
                <button className="btn-two">Select</button>
                <button className="button-three">
                  <DeleteIcon />
                </button>
              </div>
            </div>

            <div className="listData-card">
              <div className="flex justify-between items-center py-2 card-heading">
                <h1 className="text-3xl">Shirt Fitting</h1>
                <p>12-07-2022</p>
              </div>
              <div className="card-desc">
                <h2>Your used for</h2>
                <div className="flex justify-between items-center py-1">
                  <p>Yellow Shirt</p>
                  <p>18-06-2021</p>
                </div>
                <div className="flex justify-between items-center py-1">
                  <p>Yellow Shirt</p>
                  <p>18-06-2021</p>
                </div>
                <div className="flex justify-between items-center py-1">
                  <p>Yellow Shirt</p>
                  <p>18-06-2021</p>
                </div>
              </div>
              <div className="links">
                <button className="button-one">
                  <VisibilityIcon />
                </button>
                <button className="btn-two">Select</button>
                <button className="button-three">
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </div>
          <div className="info-section">
            {/* <div className="h1"> */}
            <h1>Lets Measure Your Fittings!</h1>
            {/* </div> */}
            <p>
              We are going to create your body measurements profile, All we need
              is some basic Information
            </p>
            <div
              className="h-14 bg-black my-3 text-white rounded-lg text-2xl  flex justify-center items-center btns-froomMeasurment"
              onClick={() => setOpenForm(false)}
            >
              <Button value={"Create New Measurements Profile"} />
            </div>
          </div>
        </div>
      ) : (
        <FormMeasurment setOpenForm={setOpenForm} />
      )}
      {/* From Component */}
    </>
  );
};
