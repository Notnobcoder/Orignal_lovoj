import React from "react";
import "./scss/index.scss";
import mainlogo from "../../../assests/images/Logo1.png";
import vector from "../../../assests/images/Vector.svg";
import smalllogo from "../../../assests/images/smallogo.svg";

import { NavLink, useNavigate } from "react-router-dom";
import { InputField, Button } from "../../../components";

export const ForgetAdminPassword = () => {
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
          <h2 className="uppercase">Forget Password</h2>
        </div>
        <div className="text-input py-2">
          <InputField
            placeholder="Enter Registered Email"
            type="email"
            height="50px"
            icons={
              <img
                src={vector}
                alt="message"
                className="absolute top-5 right-4"
              />
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
