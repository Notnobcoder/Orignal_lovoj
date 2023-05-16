import React from "react";
import "./scss/index.scss";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import { Header, Footer } from "../../layout";
import { InputField, Button } from "../../components";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const ContactUs = () => {
  return (
    <div>
      <Header />
      {/* content */}
      <div className="content-section">
        <div className="nested-contact">
          <div className="investor-heading">
            <h1>Get In Touch</h1>
            <p className="flex items-center justify-center text-center text-lg">
              <LocalPhoneIcon className="mr-2" /> +11 - 4912 3286 , +91 79785 55027
            </p>
            <p className="my-2 flex items-center justify-center text-center text-lg">
              <MailIcon className="mr-2" /> lovojtech@gmail.com
            </p>
            <p className="my-2 flex justify-center text-center text-lg">
              <LocationOnIcon className="-mr-1" />&nbsp; 12 Todermal Road, New Delhi - 110001, India
            </p>
          </div>
          <form>
            <div className="cont-page py-2">
              <div className="text-input py-2">
                <InputField
                  placeholder="Enter Your Name"
                  type="text"
                  height="50px"
                  labeluse="name"
                  label={"Name"}
                />
              </div>
              <div className="text-input py-2">
                <InputField
                  placeholder="Enter Your Email"
                  type="email"
                  height="50px"
                  labeluse="email"
                  label={"Email"}
                />
              </div>
              <div className="text-input py-2">
                <InputField
                  placeholder="Phone"
                  type="number"
                  height="50px"
                  labeluse="phone"
                  label={"Phone Number"}
                />
              </div>
              <div className="textarea">
                <label htmlFor="textarea">Quries</label>
                <textarea id="textarea" cols="30" rows="10"></textarea>
              </div>
              <div className="button-contact my-4">
                <Button value={"Submit"} type="submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
