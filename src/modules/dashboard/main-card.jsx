import React, { useState, useEffect, useLayoutEffect } from "react";
import { MianModal } from "../../components";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import man from "../../assests/images/man.svg";
import star from "../../assests/images/Star.svg";
import women from "../../assests/images/women.svg";
import womendress from "../../assests/images/womendress.svg";
import indian from "../../assests/images/indian.svg";
import dressMan from "../../assests/images/dressMan.svg";
import chinese from "../../assests/images/chinese.svg";
import useSound from "use-sound";
import mp3File from "../../assests/video/ClickAudio.wav";
import "./scss/index.scss";
import { GetApi } from "../../ApiService/ApiService";
import { getAllTailorApi } from "../../ApiService/ApiUrls";
import { TailorCard } from "./TailorCard";
import { TailorCard1 } from "./TailorCard1";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

// const initialData = [
//   {
//     id: 1,
//     img: man,
//     name: "Jacob Jones",
//     job: "Shirt, kurti",
//     rating: star,
//     rate: "Rs.22",
//   },
//   {
//     id: 2,
//     img: womendress,
//     name: "Jacob Jones",
//     job: "Shirt, kurti",
//     rating: star,
//     rate: "Rs.22",
//   },
//   {
//     id: 3,
//     img: women,
//     name: "Jacob Jones",
//     job: "Shirt, kurti",
//     rating: star,
//     rate: "Rs.22",
//   },
//   {
//     id: 4,
//     img: dressMan,
//     name: "Jacob Jones",
//     job: "Shirt, kurti",
//     rating: star,
//     rate: "Rs.22",
//   },
//   {
//     id: 5,
//     img: indian,
//     name: "Jacob Jones",
//     job: "Shirt, kurti",
//     rating: star,
//     rate: "Rs.22",
//   },
//   {
//     id: 6,
//     img: chinese,
//     name: "Jacob Jones",
//     job: "Shirt, kurti",
//     rating: star,
//     rate: "Rs.22",
//   },
//   {
//     id: 7,
//     img: dressMan,
//     name: "Jacob Jones",
//     job: "Shirt, kurti",
//     rating: star,
//     rate: "Rs.22",
//   },
//   {
//     id: 8,
//     img: indian,
//     name: "Jacob Jones",
//     job: "Shirt, kurti",
//     rating: star,
//     rate: "Rs.22",
//   },
//   {
//     id: 9,
//     img: chinese,
//     name: "Jacob Jones",
//     job: "Shirt, kurti",
//     rating: star,
//     rate: "Rs.22",
//   },
// ];

export const MainCard = () => {
  const [check, setCheck] = useState(false);
  const [checkData, setCheckData] = useState(false);
  const [userId, setuserId] = useState(null);
  const [passData, setPassData] = useState([]);
  const [condition, setCondition] = useState(false);
  const [initialData, setTailor] = useState([]);
  const navigate = useNavigate();
  // console.log(userId);

  const [play] = useSound(mp3File);
  const handleIncrease = () => {
    play();
  };

  const LoadTailors = async() => {
    let response = await GetApi.getcall({}, getAllTailorApi);
    setTailor(response.data.data);
  }

  const cardClick = (data) => {
    //setPassData(filterData)
    var newObj = [];
    newObj.push(data);
    setPassData(newObj)
    setCheckData(true);
    setuserId(data._id);
    setCondition(true);
    localStorage.removeItem('currentuser');
    localStorage.setItem('currentuser', JSON.stringify(data));
    handleIncrease();
    //navigate('/customize/'+data.storeNumber);
  }
  
  const filterData = initialData.filter((value) => {
    return value._id === userId;
  });
  useEffect(() => {
    LoadTailors();
    //setPassData(filterData);
    setCondition(false);
  }, []);
  return (
    <div>
      <MianModal
        checkData={checkData}
        setCheckData={setCheckData}
        passData={passData}
      />

      <div className="show-case py-3" id="main">
        {initialData.map((value, index) => {
          return (
            // <div className="netsed-showcase"
            //      onClick={() => {
            //       setCheckData(true);
            //       setuserId(value._id);
            //       setCondition(true);
            //       handleIncrease();
            //     }}
            //         key={value._id}
            //     >
                    
            //         <img  alt="man" className="show-images" />
            //         <div className="showcase-desc">
            //           <p>{value.storeName}</p>
            //           <p className="prod-names">{value.role}</p>
            //           <p className="prod-names">{value.city}</p>
            //           <img src={value.rating} alt="star" />
            //           <p>{value.rate}</p>
            //         </div>
            //       </div>
            <TailorCard1 data = { value } cardClick = { cardClick }/>
            );
        })}
      </div>
      {/* End of show Modal */}

      {/* button willl come */}
      <Accordion className="accordins">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={() => setCheck(!check)}
          // style={{ outline: "1px solid white" }}
          className="buttondrop"
        >
          Show More
        </AccordionSummary>

        <AccordionDetails className="accord-detials">
          <div className={`${check == false ? "accor_drop" : "acc-active"}`}>
            <MianModal
              checkData={checkData}
              setCheckData={setCheckData}
              passData={passData}
            />

            <div className="show-case py-3">
              {initialData.map((value) => {
                return (
                  // <div
                  //   className="netsed-showcase"
                  //   onClick={() => {
                  //     setCheckData(true);
                  //     setuserId(value._id);
                  //     setCondition(true);
                  //     handleIncrease();
                  //   }}
                  //   key={value._id}
                  // >
                    
                  //   <img  alt="man" className="show-images" />
                  //   <div className="showcase-desc">
                  //     <p>{value.storeName}</p>
                  //     <p className="prod-names">{value.role}</p>
                  //     <p className="prod-names">{value.city}</p>
                  //     <img src={value.rating} alt="star" />
                  //     <p>{value.rate}</p>
                  //   </div>
                  // </div>
                  <TailorCard1 data={value} cardClick = { cardClick }/>
                );
              })}
              {/* <div className="netsed-showcase">
                <img src={man} alt="man" className="show-images" />
                <div className="showcase-desc">
                  <p>Jacob Jones</p>
                  <p className="prod-names">Shirt, kurti</p>
                  <img src={star} alt="star" />
                  <p>Rs.22</p>
                </div>
              </div>
              <div className="netsed-showcase">
                <img src={womendress} alt="man" className="show-images" />
                <div className="showcase-desc">
                  <p>Jacob Jones</p>
                  <p className="prod-names">Shirt, kurti</p>
                  <img src={star} alt="star" />
                  <p>Rs.22</p>
                </div>
              </div>
              <div className="netsed-showcase">
                <img src={women} alt="man" className="show-images" />
                <div className="showcase-desc">
                  <p>Jacob Jones</p>
                  <p className="prod-names">Shirt, kurti</p>
                  <img src={star} alt="star" />
                  <p>Rs.22</p>
                </div>
              </div>
              <div className="netsed-showcase">
                <img src={dressMan} alt="man" className="show-images" />
                <div className="showcase-desc">
                  <p>Jacob Jones</p>
                  <p className="prod-names">Shirt, kurti</p>
                  <img src={star} alt="star" />
                  <p>Rs.22</p>
                </div>
              </div>
              <div className="netsed-showcase">
                <img src={indian} alt="man" className="show-images" />
                <div className="showcase-desc">
                  <p>Jacob Jones</p>
                  <p className="prod-names">Shirt, kurti</p>
                  <img src={star} alt="star" />
                  <p>Rs.22</p>
                </div>
              </div>
              <div className="netsed-showcase">
                <img src={chinese} alt="man" className="show-images" />
                <div className="showcase-desc">
                  <p>Jacob Jones</p>
                  <p className="prod-names">Shirt, kurti</p>
                  <img src={star} alt="star" />
                  <p>Rs.22</p>
                </div>
              </div>
              <div className="netsed-showcase">
                <img src={dressMan} alt="man" className="show-images" />
                <div className="showcase-desc">
                  <p>Jacob Jones</p>
                  <p className="prod-names">Shirt, kurti</p>
                  <img src={star} alt="star" />
                  <p>Rs.22</p>
                </div>
              </div>
              <div className="netsed-showcase">
                <img src={indian} alt="man" className="show-images" />
                <div className="showcase-desc">
                  <p>Jacob Jones</p>
                  <p className="prod-names">Shirt, kurti</p>
                  <img src={star} alt="star" />
                  <p>Rs.22</p>
                </div>
              </div>
              <div className="netsed-showcase">
                <img src={chinese} alt="man" className="show-images" />
                <div className="showcase-desc">
                  <p>Jacob Jones</p>
                  <p className="prod-names">Shirt, kurti</p>
                  <img src={star} alt="star" />
                  <p>Rs.22</p>
                </div>
              </div> */}
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
