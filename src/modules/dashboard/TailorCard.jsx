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
export const TailorCard = ({data}) => {
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

    return(
        <div className="netsed-desgnear">
            <img src={ profileImg === null ? Loader1 : BuffertoImage(profileImg.data) } alt="man" className="object-contain" width="230px"/>
            <div className="designernearby-desc">
                <p>{ data.storeName }</p>
                <p className="prod-names">{ data.role }</p>
                <p className="prod-names">{ data.city }</p>
                <img src={star} alt="star" />
                {/* <p>Rs.22</p> */}
            </div>
        </div>
    )
}

{/* <img  alt="man" className="show-images" />
                    <div className="showcase-desc">
                      <p>{value.storeName}</p>
                      <p className="prod-names">{value.role}</p>
                      <p className="prod-names">{value.city}</p> */}