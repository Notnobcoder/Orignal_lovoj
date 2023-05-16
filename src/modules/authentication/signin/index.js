import React, { useEffect, useState } from "react";
import "./scss/index.scss";
// import { NavLink } from "react-router-dom";
import mainlogo from "../../../assests/images/mainlogo.svg";
import vector from "../../../assests/images/Vector.svg";
import key from "../../../assests/images/key.svg";
//import facebook from "../../../assests/images/facebook.svg";
import gmail from "../../../assests/images/gamil.svg";
import smalllogo from "../../../assests/images/smallogo.svg";
import { InputField, Button } from "../../../components";
import { NavLink, useNavigate } from "react-router-dom";
import { GetApi, PostApi } from "../../../ApiService/ApiService";
import { LoginApi } from "../../../ApiService/ApiUrls";

export const Signin = () => {
  const navigate = useNavigate();
  const [isUser, setUser] = useState(null);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const Login = async() => {
    // isUser === null ? navigate("/customize/101") : navigate("/landing-page")
    let response = await PostApi.postcall({ 'email' : username, 'password' : password }, LoginApi);
    console.log('====================================');
    console.log(response);
    console.log('====================================');
  }

  useEffect(() => {
    let user = localStorage.getItem('user');
    setUser(user);
  }, [])
  return (
    <div className="flex flex-col justify-center items-center w-full bg-slate-100 min-h-screen">
      <div className="my-2">
        <NavLink to={"/"}>
          <img src={mainlogo} alt="logo" />
        </NavLink>
      </div>
      <div className="main-cont py-2">
        <div className="subheading my-2">
          <h2 className="uppercase">Sign in</h2>
        </div>
        <div className="text-input py-3">
          <InputField
            placeholder="Enter Your Email"
            type="email"
            value={username}
            onChange={(e) => { setUserName(e.target.value) }}
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
        <div className="password-input py-3">
          <InputField
            placeholder="Enter Your Password"
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            height="50px"
            icons={
              <img src={key} alt="key" className="absolute top-5 right-4" />
            }
          />
        </div>
        <div className="link py-2 cursor-pointer">
          <a href="#/">Forget Password?</a>
        </div>

        <div className="button my-2">
          <Button
            value={"LOGIN"}
            type="submit"
            onClick={() => { Login() }}
          />
        </div>
        <div className="break py-2 cursor-pointer">or</div>
        <div className="social-link justify-center flex gap-2 my-2">
          <div className="facebook cursor-pointer">
            <img src={gmail} alt="facebook" />
          </div>
          <div className="gmail cursor-pointer">
            <img src={gmail} alt="gmail" />
          </div>
        </div>
      </div>
      <div className="small-logo">
        <img src={smalllogo} alt="logo" />
      </div>
      <div className="link-signup my-2 -mt-3">
        <span>
          Don't Have LOVOJ Account? <NavLink to={"/signup"}>Sign Up</NavLink>
        </span>
      </div>
    </div>
  );
};
