import React from "react";
import "./scss/index.scss";
import { Header, Footer } from "../../layout";

export const Product = () => {
  return (
    <div>
      {/* <Header /> */}
      <Header />
      {/* content */}
      <div className="product-page h-auto">
        <div className="netsed-product">
          <div className="section-one">
            {/* <h1></h1> */}
            <h1>Product Demo</h1>
          </div>
          <div className="content-product">
            <div className="retail">
              <div className="heading-retail">
                <h2>Retail 3D</h2>
                <span>
                  (Instead of using mirrors, 3D tools can be used on Smart TV,
                  iPad & Phones)
                </span>
              </div>
              <div className="products_links">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/XI57Hj8rHQE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  style={{ borderRadius: "14px" }}
                ></iframe>
                <iframe
                  width="100%"
                  height="315"
                  src="https://youtube.com/embed/XIqGIQHmWOI?feature=share"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  style={{ borderRadius: "14px" }}
                ></iframe>
              </div>
              <div className="fabric-software my-9">
                <div className="ecommerce">
                  {/* <h1></h1> */}
                  <h2>Fabric Software</h2>
                </div>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/Fkroo8LCz2w"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  style={{ borderRadius: "14px" }}
                ></iframe>
              </div>
              <div className="fabric-software my-9">
                <div className="ecommerce">
                  {/* <h1></h1> */}
                  <h2>E-COMMERCE</h2>
                  <span>(E-COMMERCE WEBSITE WITH 3D VIEW)</span>
                </div>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/4NOL8dhsRNU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  style={{ borderRadius: "14px" }}

                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
