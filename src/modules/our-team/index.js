import React from "react";
import "./scss/index.scss";
import { Header, Footer } from "../../layout";
import bibhuti from "../../assests/images/bibhuti.jpg";
import priyanka from "../../assests/images/priyanka.jpg";
import jyotirmaya from "../../assests/images/jyotirmaya.jpg";
import LEELAM from "../../assests/images/LEELAM.png";
import Deboo from "../../assests/images/Deboo.png";
import Mahavir from "../../assests/images/Mahavir.png";
import priyadars from "../../assests/images/priyadars.png";
import linkdin from "../../assests/images/linkdin.png"


export const OurTeam = () => {
  return (
    <div>
      <Header />
      {/* content */}
      <div className="team-section">
        <div className="nested-team">
          <div className="team-heading">
            <h1>Our Team</h1>
          </div>
          <div className="team-desc">
            <div className="section">
              <img src={bibhuti} alt="bibhuti" />
              <h1>Bibhuti Dash</h1>
              <p>
                FOUNDER & CEO (AWS Architect | 3D Designer | Web Technology)
              </p>
            </div>
            <div className="section">
              <img src={priyanka} alt="bibhuti" />
              <h1>Priyanka Nanda</h1>
              <p>CO-FOUNDER & MD (M Tech | VLSI Design | Embedded Systems)</p>
            </div>
            <div className="section">
              <img src={jyotirmaya} alt="bibhuti" />
              <h1>Bibhuti Dash</h1>
              <p>CO-FOUNDER & BM ( XIMB | Investor Relations | PR Strategy )</p>
            </div>
          </div>

          {/* Investors */}
        </div>
      </div>

      <Footer />
    </div>
  );
};
