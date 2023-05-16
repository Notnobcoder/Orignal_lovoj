import React, { useEffect, useState } from "react";
import "./scss/index.scss";
import { NavLink, Link } from "react-router-dom";
import { Button } from "../../components";
import nightdress from "../../assests/images/nightdress.svg";
import accessories from "../../assests/images/accesories.svg";
import sari from "../../assests/images/saris.svg";
import engwomen from "../../assests/images/engwomen.svg";
import beautilady from "../../assests/images/beautilady.svg";
import smartman from "../../assests/images/manSmart.svg";
import actionpic from "../../assests/images/actionpic.svg";
import star from "../../assests/images/Star.svg";
import useSound from "use-sound";
import mp3File from "../../assests/video/ClickAudio.wav";
import man from "../../assests/images/man.svg";
import { GetApi } from "../../ApiService/ApiService";
import { getAllTailorApi, getProfileImageApi } from "../../ApiService/ApiUrls";
import { TailorCard } from "./TailorCard";

export const SpeicalCategory = () => {
  const contentWrapper = React.useRef(null);
  const contentWrapperSpecialCatelog = React.useRef(null);
  const [TailorData, setTailor] = useState(null);
  useEffect(() => {
    LoadTailors(); 
  }, []);

  const LoadTailors = async() => {
    console.log("NEWWNEWEW");
    let response = await GetApi.getcall({}, getAllTailorApi);
    console.log(response.data.data);
    setTailor(response.data.data);
  }

  const BuffertoImage = (arr) => {
    if (!arr) return;
    console.log(arr)
    if (arr){
      return arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
    }else{
        return '';
    }
  }

  const getTailorProfile = async(tailorid) => {
    let response = await GetApi.getParamCall(getProfileImageApi + tailorid);
    console.log(response);
  }

  const [play] = useSound(mp3File);
  const handleIncrease = () => {
    play();
  };
  const moveTop = () => {
    // console.log(window.location.pathname);
    // console.log(document.getElementById("bottom"));
    if (window.location.pathname) {
      let createa = document.createElement("a");
      //  createa.setAttribute('href')
      createa.href = "#bottom";
      createa.style.cursor = "default";
      createa.click();
    }
  };

  const sideScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };
  const sideScrollSpecialCategory = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

  return (
    <div>
      <div className="special-category py-4">
        <div className="special-heading">Special Category</div>

        <div className="special-catalog" ref={contentWrapperSpecialCatelog}>
          <NavLink
            to={"girdview"}
            onClick={moveTop}
            style={{ cursor: "default" }}
          >
            <div className="special-card first-img" onClick={handleIncrease}>
              <img src={accessories} alt="shirt" className="" />
              <div className="sepcialprod-name">Alteration</div>
            </div>
          </NavLink>
          {/* <a href="#bottom" className="link-tag"> */}
          <NavLink
            to={"girdview"}
            onClick={moveTop}
            style={{ cursor: "default" }}
          >
            <div className="special-card center-img" onClick={handleIncrease}>
              <img src={sari} alt="kurti" className="" />

              <div className="prod-name">Blouse</div>
            </div>
            {/* </a> */}
          </NavLink>

          {/* <a href="#bottom" className="link-tag"> */}
          <NavLink
            to={"girdview"}
            onClick={moveTop}
            style={{ cursor: "default" }}
          >
            <div className="special-card last-img" onClick={handleIncrease}>
              <img src={nightdress} alt="shirt" className="" />

              <div className="prod-name">Big Sizes</div>
            </div>
          </NavLink>
        </div>
        <div className="left-right-btn">
          <button
            className="left-btn"
            onClick={() => {
              sideScrollSpecialCategory(
                contentWrapperSpecialCatelog.current,
                25,
                250,
                -30
              );
            }}
          >
            <i className="fa-solid fa-arrow-left" />
          </button>
          <button
            onClick={() => {
              sideScrollSpecialCategory(
                contentWrapperSpecialCatelog.current,
                25,
                250,
                30
              );
            }}
            className="right-btn"
          >
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>
      {/* Ready made */}
      <div className="ready-made py-4">
        <div className="readymade-heading">
          <h1>
            Ready Made Dress <span>From Designers</span>{" "}
          </h1>
        </div>
        <div className="readymade-catalog" ref={contentWrapper}>
          {/* <a href="#bottom" className="link-tag"> */}
          <NavLink
            to={"girdview"}
            onClick={moveTop}
            style={{ cursor: "default" }}
          >
            <div className="special-card" onClick={handleIncrease}>
              <img src={engwomen} alt="shirt" className="" />
              <div className="sepcialprod-name">
                <span>Kamran Zafar</span>
                tailor made fashion store
              </div>
              <Button value={"contact"} />
            </div>
            {/* </a> */}
          </NavLink>
          {/* <a href="#bottom" className="link-tag"> */}
          <NavLink
            to={"girdview"}
            onClick={moveTop}
            style={{ cursor: "default" }}
          >
            <div className="special-card" onClick={handleIncrease}>
              <img src={beautilady} alt="kurti" className="" />

              <div className="sepcialprod-name">
                <span>Kamran Zafar</span>
                tailr made fashion store
              </div>
              <Button value={"contact"} />
            </div>
            {/* </a> */}
          </NavLink>

          {/* <a href="#bottom" className="link-tag"> */}
          <NavLink
            to={"girdview"}
            onClick={moveTop}
            style={{ cursor: "default" }}
          >
            <div className="special-card " onClick={handleIncrease}>
              <img src={actionpic} alt="shirt" className="" />

              <div className="sepcialprod-name">
                <span>Kamran Zafar</span>
                tailr made fashion store
              </div>
              <Button value={"contact"} />
            </div>
            {/* </a> */}
          </NavLink>

          {/* <a href="#bottom" className="link-tag"> */}
          <NavLink
            to={"girdview"}
            onClick={moveTop}
            style={{ cursor: "default" }}
          >
            <div className="special-card" onClick={handleIncrease}>
              <img src={smartman} alt="shirt" className="" />

              <div className="sepcialprod-name">
                <span>Kamran Zafar</span>
                tailr made fashion store
              </div>
              <Button value={"contact"} />
            </div>
            {/* </a> */}
          </NavLink>
        </div>

        <div className="left-right-readymade">
          <button
            className="readmade-btn"
            onClick={() => {
              sideScroll(contentWrapper.current, 25, 250, -30);
            }}
          >
            <i className="fa-solid fa-arrow-left" />
          </button>
          <button
            onClick={() => {
              sideScroll(contentWrapper.current, 25, 250, 30);
            }}
            className="readmade-btn"
          >
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>
      {/* All Desiner Near By */}
      <div className="desginer-nearbr py-4">
        <div className="desgnearby-heading">All Designer Nearby</div>
        <div className="designer-nearby py-3">
          { TailorData && TailorData.length > 0 ? (
            <>
              { TailorData.map((data, index) => {
                // return <div className="netsed-desgnear">
                //           <img src={  } alt="man" className="show-images" />
                //           <div className="designernearby-desc">
                //             <p>{ data.storeName }</p>
                //             <p className="prod-names">{ data.role }</p>
                //             <p className="prod-names">{ data.storeNumber }</p>
                //             <img src={star} alt="star" />
                //             {/* <p>Rs.22</p> */}
                //           </div>
                //         </div>
                return <TailorCard data = { data }/>
              }) }
            </>
          
          ) : (
            <></>
          ) }
          
          {/* <div className="netsed-desgnear">
            <img src={man} alt="man" className="show-images" />
            <div className="designernearby-desc">
              <p>Jacob Jones</p>
              <p className="prod-names">Shirt, kurti</p>
              <img src={star} alt="star" />
              <p>Rs.22</p>
            </div>
          </div>
          <div className="netsed-desgnear">
            <img src={man} alt="man" className="show-images" />
            <div className="designernearby-desc">
              <p>Jacob Jones</p>
              <p className="prod-names">Shirt, kurti</p>
              <img src={star} alt="star" />
              <p>Rs.22</p>
            </div>
          </div>
          <div className="netsed-desgnear">
            <img src={man} alt="man" className="show-images" />
            <div className="designernearby-desc">
              <p>Jacob Jones</p>
              <p className="prod-names">Shirt, kurti</p>
              <img src={star} alt="star" />
              <p>Rs.22</p>
            </div>
          </div>
          <div className="netsed-desgnear">
            <img src={man} alt="man" className="show-images" />
            <div className="designernearby-desc">
              <p>Jacob Jones</p>
              <p className="prod-names">Shirt, kurti</p>
              <img src={star} alt="star" />
              <p>Rs.22</p>
            </div>
          </div>
          <div className="netsed-desgnear">
            <img src={man} alt="man" className="show-images" />
            <div className="designernearby-desc">
              <p>Jacob Jones</p>
              <p className="prod-names">Shirt, kurti</p>
              <img src={star} alt="star" />
              <p>Rs.22</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
