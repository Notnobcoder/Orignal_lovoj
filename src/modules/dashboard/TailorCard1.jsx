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
import Loader1 from '../../assests/images/loader1.gif';
export const TailorCard1 = ({data, cardClick}) => {
    const [profileImg, setProfile] = useState(null);

    const GetProfileImage = async() => {
        let response = await GetApi.getParamCall(getProfileImageApi + data._id);
        console.log(response);
        setProfile(response.data.data)
    }

    const BuffertoImage = (arr) => {
        if (!arr) return;
        console.log(arr)
        if (arr){
          return arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
        }else{
            return '';
        }
        //BuffertoImage(fabImage)
    }

    useEffect(() => {
        GetProfileImage();
    }, []);

    const CardClick = (data) => {
        data.rating = star;
        data.rate = "Rs.200";
        data.img = BuffertoImage(profileImg.data);
        cardClick(data);
    }

    return(
        <div className="netsed-showcase" onClick={() => { CardClick(data) }} key={data._id}>
           <img src={ profileImg === null ? Loader1 : BuffertoImage(profileImg.data) } alt="man" className="show-images ml-2" height="163px" width="195px"/>
           <div className="showcase-desc">
             <p className="font-bold mt-2">{data.storeName}</p>
             <p className="prod-names">{data.role}</p>
             <p className="prod-names">{data.city}</p>
             <img src={star} alt="star" />
             <p>{data.rate}</p>
           </div>
         </div>
        // <div className="netsed-showcase">
        //     <img src={ profileImg === null ? Loader1 : BuffertoImage(profileImg.data) } alt="man" className="show-images"/>
        //     <div className="showcase-desc">
        //         <p>{ data.storeName }</p>
        //         <p className="prod-names">{ data.role }</p>
        //         <p className="prod-names">{ data.city }</p>
        //         <img src={star} alt="star" />
        //         {/* <p>Rs.22</p> */}
        //     </div>
        // </div>
    )
}