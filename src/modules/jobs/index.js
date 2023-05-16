import React from "react";
import "./scss/index.scss";
import { Header, Footer } from "../../layout";
import {Button} from "../../components"

export const Jobs = () => {
  return (
    <div>
      <Header />
      {/* content */}
      <div className="job-section">
        <div className="netsed-jobs">
          <div className="job-heading">
            <h1>Jobs At LOVOJ</h1>
          </div>

          {/* job section */}
          <div className="lst-job">
            <h1>latest Jobs:</h1>
          </div>
          <div className="job-portion">
            <div className="location">Remote</div>
            <h1>Frotnend Developer</h1>
            <div className="job-desc">
              <p>Here's what you need:</p>
              <ul>
                <li>
                  {" "}
                  Hands on professional or production experience developing web
                  applications usiing Javascript.
                </li>
                <li>
                  Hands on professional or production experience with library
                  React, Redux Api Integration and Git.
                </li>
                <li>
                  Proven experience using HTML5/CSS3 in responsive web
                  applications.
                </li>
              </ul>
            </div>
          </div>
          <div className="job-portion">
            <div className="location">Remote</div>
            <h1>Backend Developer</h1>
            <div className="job-desc">
              <p>Here's what you need:</p>
              <ul>
                <li>
                  {" "}
                  Hands on professional or production experience developing web
                  applications usiing Javascript and Python.
                </li>
                <li>
                  Hands on professional or production experience with library
                  Node.js,Express.js
                </li>
                <li>Database: MongoDB</li>
              </ul>
            </div>
          </div>
          <div className="job-portion">
            <div className="location">Remote</div>
            <h1>Flutter Developr</h1>
            <div className="job-desc">
              <p>Here's what you need:</p>
              <ul>
                <li>
                  {" "}
                  You will be writing readable and clear code using Dart that
                  will be extensively documented for future use and upgrades
                </li>
                <li>
                  You will be sharing feedback and brainstorming ideas with
                  teams to improve the development process.
                </li>
                <li>
                  Understand basic concepts of design for developing user
                  friendly applications
                </li>
                <li>Stay up to date with the latest technologies</li>
              </ul>
            </div>
          </div>
        <div className="contact-job">
            <Button value="Contact" />
          </div>             
        </div>
      </div>
      <Footer />
    </div>
  );
};
