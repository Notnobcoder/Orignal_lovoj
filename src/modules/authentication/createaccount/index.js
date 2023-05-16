import React, { useState } from "react";
import "./button.css";
import "./scss/index.scss";
import { InputField, Button } from "../../../components";
import { useParams, NavLink, useNavigation } from "react-router-dom";
import mainlogo from "../../../assests/images/Logo1.png";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
// import home from "../../../assests/images/home.jpeg";
// import { useTheme } from "@mui/material/styles";
// import { AddTailor, CheckEmail } from "../../../ApiService/ApiUrls";
// import { PostApi } from "../../../ApiService/ApiService";
// import { Alert } from "@mui/material";
// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }
const initialValues = {
  fullName: "",
  otp_key: "",
  email: "",
  storeType: "",
  password: "",
  mobileNumber: "",
};

export const CreateAccount = () => {
  const { values, handleSubmit, handleChange, handleReset } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log("file registration values", {
        email: newemail,
        fullName: fullName,
        mobileNumber: mobileNumber,
        otp_key: otp_key,
        password: password,
        storeType: storeType,
      });
      axios
        .post("https://fabricssoftware.com/auth/createStore", {
          email: newemail,
          fullName: fullName,
          mobileNumber: mobileNumber,
          otp_key: otp_key,
          password: password,
          storeType: storeType,
        })
        .then((response) => {
          toast.success("your account has been created", {
            position: toast.POSITION.TOP_CENTER,
          });
        })
        .catch((e) => {
          console.error({ error: e });
          alert("hell owlrd");
          toast.error("Error Occured ! Try Again", {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    },
  });

  // const navigate = useNavigate();
  const [newemail, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp_key, setOtpKey] = useState("");
  const [password, setPassword] = useState("");
  const [storeType, setStoreType] = useState("");
  const [aboutUs, setAboutUs] = useState("");
  const { userwork } = useParams();
  const [personName, setPersonName] = useState("");
  // const [age, setAge] = React.useState('');
  const [open, setOpen] = useState(false);
  const [urlparams, seturlParams] = useState(userwork);

  const verifyEmail = () => {
    console.log(newemail);
    let data = JSON.stringify({
      email: newemail,
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://54.167.48.52:5001/auth/checkemail",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer {{authtoken}}",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        toast.success("Otp sended to the email");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Email Already Registered ! Try again with other Email");
      });
  };

  const createStore = () => {
    let data = JSON.stringify({
      // fullName: name,
      // otp_key: otp,
      // email: newemail,
      // storeType: "Stylist",
      // password: password,
      // mobileNumber: phone,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://54.167.48.52:5001/auth/createStore",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer {{authtoken}}",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleChange = (event) => {
  //   setPersonName(event.target.value);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center items-center w-full bg-slate-100 min-h-screen">
        <div className="my-4">
          <NavLink to={"/"}>
            <img src={mainlogo} alt="logo" className="w-40" />
          </NavLink>
        </div>
        <div className="create-cont py-2 fabric-form">
          <div className="resp-input text-input py-1 flex justify-between">
            <InputField
              placeholder="Enter Your Email"
              type="email"
              height="50px"
              labeluse="email"
              label={"Email"}
              value={values.email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              desc="(where you want to recieve confirmation)"
            />
            <button className="outlined_button" onClick={verifyEmail}>
              Verify Email
            </button>
          </div>
          <div className="text-input py-1">
            <InputField
              placeholder="Enter your full name"
              type="text"
              height="50px"
              label="Enter full name"
              labeluse={"store"}
              value={values.fullName}
              name="fullName"
              // onChange={(e) => {
              //   setName(e.target.value);
              // }}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          </div>
          <div className="text-input py-1">
            <InputField
              placeholder="Enter Your Otp"
              type="text"
              height="50px"
              label="Enter Otp"
              labeluse={"store"}
              value={values.otp_key}
              name="otp_key"
              // onChange={(e) => {
              //   setOtp(e.target.value);
              // }}
              onChange={(e) => {
                setOtpKey(e.target.value);
              }}
            />
          </div>
          <div className="password-input py-1">
            <InputField
              placeholder="Enter Your Password"
              type="password"
              height="50px"
              label="Password"
              labeluse={"password"}
              name="password"
              value={values.password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="text-input py-1">
            <InputField
              placeholder="Enter Your Store Name"
              type="text"
              height="50px"
              label="Store Name"
              labeluse={"store"}
              value={values.storeType}
              name="storeType"
              onChange={(e) => {
                setStoreType(e.target.value);
              }}
            />
          </div>
          <div className="text-input-fabric file-type py-1 px-20">
            <InputField
              placeholder="Please Choose Profile Image.."
              type="file"
              height="50px"
              label="Profile"
              labeluse={"profile"}
            />
            <img
              alt={"altimage"}
              height="280px"
              width="280px"
              id="Img1"
              className="hidden"
            />
          </div>
          <div className="twobox flex justify-between gap-2 ">
            <div className="text-input py-1">
              <InputField
                placeholder="Country"
                type="text"
                height="50px"
                label="Country"
                // value={country}
                // onChange={(e) => {
                //   setCountry(e.target.value);
                // }}
                labeluse={"country"}
              />
            </div>
            <div className="text-input py-1">
              <InputField
                placeholder="Enter City"
                type="text"
                height="50px"
                label="City"
                labeluse={"city"}
                // value={city}
                // onChange={(e) => {
                //   setCity(e.target.value);
                // }}
              />
            </div>
          </div>
          {/* Another flex  */}
          <div className="twobox flex justify-between gap-2">
            <div className="text-input py-1">
              <InputField
                placeholder="Enter Code"
                type="number"
                height="50px"
                label="Zip Code"
                labeluse={"zipcode"}
                // value={zipcode}
                // onChange={(e) => {
                //   setZip(e.target.value);
                // }}
              />
            </div>
            <div className="text-input py-1">
              <InputField
                placeholder="+91,++++++"
                type="number"
                height="50px"
                label="Phone Number"
                labeluse={"phonenumber"}
                value={values.mobileNumber}
                name="mobileNumber"
                onChange={(e) => {
                  setMobileNumber(e.target.value);
                }}
                // onChange={handleChange}
              />
            </div>
          </div>

          {/* Category */}
          <div className="text-input py-2">
            <FormControl sx={{ width: "100%" }}>
              {/* <InputLabel>Age</InputLabel> */}
              <label htmlFor="demo-controlled-open-select" className="labels">
                {urlparams === "Stylish"
                  ? "Fashion Experience"
                  : "Choose Your Category"}
              </label>
              {urlparams.replace(/ /g, "") === "Stylish" ? (
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={personName}
                  displayEmpty
                  // label="Select Category"
                  // onChange={handleChange}
                >
                  <MenuItem value="">Select</MenuItem>

                  <MenuItem value="FashionInstituteStudent/Staff">
                    Fashion Institute Student / Staff
                  </MenuItem>
                  <MenuItem value={"gentstailor"}>
                    Worked in a boutique/Tailor
                  </MenuItem>
                  <MenuItem value={"Designer"}>Running own shop</MenuItem>
                  <MenuItem value={"noexperience"}>No Experience</MenuItem>
                </Select>
              ) : urlparams === "Fabric" ? (
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={personName}
                  displayEmpty
                  // label="Select Category"
                  onChange={handleChange}
                >
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value="tailor">Retailor</MenuItem>
                  <MenuItem value={"designer"}>Whole Seller</MenuItem>
                  <MenuItem value={"alteration"}>Manufacturing</MenuItem>
                  {/* <MenuItem value={"noexperience"}>No Experience</MenuItem> */}
                </Select>
              ) : urlparams === "Sticting Factory" ? (
                // (
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={personName}
                  displayEmpty
                  // label="Select Category"
                  onChange={handleChange}
                >
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value="tailor">Retailor</MenuItem>
                  <MenuItem value={"designer"}>Whole Seller</MenuItem>
                  <MenuItem value={"alteration"}>Manufacturing</MenuItem>
                  <MenuItem value={"alteration"}>Individual</MenuItem>
                </Select>
              ) : (
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={personName}
                  displayEmpty
                  // label="Select Category"
                  onChange={handleChange}
                >
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value="tailor">Tailor</MenuItem>
                  <MenuItem value={"designer"}>Designer</MenuItem>
                  <MenuItem value={"alteration"}>Alteration</MenuItem>
                  {/* <MenuItem value={"noexperience"}>No Experience</MenuItem> */}
                </Select>
                // )
              )}
            </FormControl>
          </div>
          <div className="text-input py-1">
            <InputField
              placeholder="Please Choose Profile Image.."
              type="text"
              height="50px"
              label="About Us"
              labeluse={"aboutus"}
              value={aboutUs}
              onChange={(e) => {
                setAboutUs(e.target.value);
              }}
            />
          </div>
          <div className="buttons flex items-center  gap-2">
            <div className="btn my-4">
              <Button onClick={handleReset} value={"Reset Button"} />
            </div>
            <div className="button my-4">
              <Button value={"Submit"} type="submit" />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </form>
  );
};
