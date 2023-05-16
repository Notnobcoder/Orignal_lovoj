import React, { useState, useEffect } from "react";
import "./scss/index.scss";
import mainlogo from "../../../assests/images/mainlogo.svg";
import vector from "../../../assests/images/Vector.svg";
import key from "../../../assests/images/key.svg";
//import facebook from "../../../assests/images/facebook.svg";
import gmail from "../../../assests/images/gamil.svg";
import phone from "../../../assests/images/phone.svg";
import user from "../../../assests/images/user.svg";
import flag from "../../../assests/images/flag.svg";
import smalllogo from "../../../assests/images/smallogo.svg";
import { NavLink } from "react-router-dom";
//import credentials from './credentials.json';
import credentials1 from './credentials1.json';
import { GoogleLogin, GoogleLogout, useGoogleLogin } from 'react-google-login';
import { InputField, Button } from "../../../components";
import $ from 'jquery';
import { PostApi } from "../../../ApiService/ApiService";
import { RegisterApi } from "../../../ApiService/ApiUrls";

export const Signup = () => {
  const [client, setClient] = useState(credentials1.web);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  useEffect(() => {
    // function start() {
    //   gapi.client.init({
    //     clientId: client.client_id,
    //     scope: 'email',
    //   });
    // }

    // gapi.load('client:auth2', start);
  }, []);

  const responseGoogle = (res) => {
    console.log(res);
  }

  const Register = async() => {
    let response = await PostApi.postcall({ 'username' : username, 'email' : email, 'password' : password, 'phone' : phone, 'country': country}, RegisterApi);
    console.log(response);
  }

  const googleSignup = (e) => {
    $("googlebutton").click();
  }

  return (
    <div className="flex flex-col justify-center items-center w-full bg-slate-100 min-h-screen">
      <div className="my-2">
        <NavLink to={"/"}>
          <img src={mainlogo} alt="logo" />
        </NavLink>
      </div>
      <div className="signup-cont py-2">
        <div className="subheading my-2">
          <h2 className="uppercase">Sign Up</h2>
        </div>
        <div className="text-input py-2">
          <InputField
            placeholder="Enter Your Name"
            type="text"
            height="50px"
            value={username}
            onChange={(e) => {setUserName(e.target.value)}}
            icons={
              <img
                src={user}
                alt="message"
                className="absolute top-5 right-4"
              />
            }
          />
        </div>
        <div className="text-input py-2">
          <InputField
            placeholder="Enter Your Email"
            type="email"
            height="50px"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            icons={
              <img
                src={vector}
                alt="message"
                className="absolute top-5 right-4"
              />
            }
          />
        </div>
        <div className="password-input py-2">
          <InputField
            placeholder="Enter Your Password"
            type="password"
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            height="50px"
            icons={
              <img src={key} alt="key" className="absolute top-5 right-4" />
            }
          />
        </div>
        <div className="text-input py-2">
          <InputField
            placeholder="Phone"
            type="number"
            value={phone}
            onChange={(e) => {setPhone(e.target.value)}}
            height="50px"
            icons={
              <img
                src={phone}
                alt="message"
                className="absolute top-5 right-4 z-30"
              />
            }
          />
        </div>
        <div className="text-input py-2">
          <InputField
            placeholder="Country"
            type="text"
            height="50px"
            value={country}
            onChange={(e) => {setCountry(e.target.value)}}
            icons={
              <img
                src={flag}
                alt="message"
                className="absolute top-5 right-4 z-30"
              />
            }
          />
        </div>
        <div className="button my-4">
          <Button value={"SIGN UP"} type="submit" onClick={Register}/>
        </div>
        <div className="break py-2 cursor-pointer">or</div>
        <div className="social-link justify-center flex gap-2 my-2">
          <div className="facebook cursor-pointer">
            <img src={gmail} alt="facebook" />
          </div>
          <div className="hidden">
          <GoogleLogin
            clientId={ client.client_id }
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            id = "googlebutton"/>
          </div>
          <GoogleLogin
            clientId={ client.client_id }
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            id = "googlebutton"/>

          <GoogleLogout
            clientId={ client.client_id }
            buttonText="Logout"
            onLogoutSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </div>
      </div>
      <div className="small-logo">
        <img src={smalllogo} alt="logo" />
      </div>
      <div className="link-account my-2 -mt-3">
        <span>
          Already have an account? <NavLink to={"/signin"}>Sign In</NavLink>
        </span>
      </div>
    </div>
  );
};
