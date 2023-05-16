import React from "react";
import "./scss/index.scss";
import mainlogo from "../../../assests/images/mainlogo.svg";
// import vector from "../../../assests/images/Vector.svg";
import StorefrontIcon from "@mui/icons-material/Storefront";

import smalllogo from "../../../assests/images/smallogo.svg";

import { NavLink, useNavigate } from "react-router-dom";
import { InputField, Button } from "../../../components";



// here forgotpassowrd classes applied
export const ForgetAdminStoreNub = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center w-full bg-slate-100 min-h-screen">
      <div className="my-2">
        <NavLink to={"/"}>
          <img src={mainlogo} alt="logo" />
        </NavLink>
      </div>
      <div className="forgetpassowrd py-5">
        <div className="subheading my-2">
          <h2 className="uppercase">Forget Store Number</h2>
        </div>
        <div className="text-input py-2">
          <InputField
            placeholder="Enter Store Number"
            type="number"
            height="50px"
            icons={

              <StorefrontIcon className="absolute top-3 right-4 z-30" style={{color: '#0172b6'}} />
            }
          />
        </div>
        <div className="link py-2 cursor-pointer">
          <button onClick={() => navigate(-1)}>Go back?</button>
        </div>
        <div className="button my-6">
          <Button value={"Continue"} type="submit" />
        </div>
      </div>
      <div className="small-logo">
        <img src={smalllogo} alt="logo" />
      </div>
    </div>
  );
};
