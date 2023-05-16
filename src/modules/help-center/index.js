import React from "react";
import "./scss/index.scss";
import { Header, Footer } from "../../layout";
import { Button } from "../../components";
import help from "../../assests/images/help.jpg";

export const HelpCenter = () => {
  return (
    <div>
      <Header />
      {/* content */}

      {/* <h1>Hello Here is our content </h1> */}
      <div className="help-support">
        <div className="nested-help">
          <div className="help-desc">
            <h1>Support And Help</h1>
            <p>We are here to help you</p>
            <div className="button-help">
            <Button value={"Contact Us"} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
