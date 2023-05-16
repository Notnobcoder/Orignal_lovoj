import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { GetApi } from "../../../../ApiService/ApiService";
import { GetFabThumbApi } from "../../../../ApiService/ApiUrls";
import LoaderGif from '../../../../assests/images/loader1.gif';
export default function FabricCard({ fab, AddFabImage, isChecked, FabricChange }){
    const [fabImage, setFabImg] = useState(null);
    const GetFabImg = async() => {
       let response = await GetApi.getParamCall(GetFabThumbApi+fab._id);
       if (response.status === 200){
        setFabImg(response.data.data);
        let imgSource = {};
        imgSource.fabid = fab._id;
        imgSource.tilex = fab.tilex;
        imgSource.tiley = fab.tiley;
        let imgsrc = BuffertoImage(response.data.data);
        imgSource.src = imgsrc;
        //setFabImg(response.data.data)
        AddFabImage(imgSource);
       }
    }

    useEffect(() => {
        GetFabImg();
    }, [])

    const BuffertoImage = (arr) => {
        if (!arr) return;
        if (arr){
          return arr.reduce((data, byte) => data + String.fromCharCode(byte), '');
        }else{
            return '';
        }
        
        //BuffertoImage(fabImage)
    }

    return(
        // <div className="border-1 px-2 py-2 bg-black">
        //     <div class="float-right ml-2 mr-6 mt-6 bg-blue-400 hover:bg-blue-600 text-white text-sm font-bold rounded px-2 py-1 right-3 ">
        //         Reset
        //     </div>
        //     <div className="nested-cloths" onClick={() => { WebglRef.current.FabricChange(fab, fabImage) }}>
        //         <img src={ fabImage === null ? LoaderGif : BuffertoImage(fabImage) } alt="cloth173" />
        //         <p className="title">{ fab.fabname }</p>
        //         <p className="price">210.00$</p>
        //     </div>
        // </div>
        
        <div className="nested-cloths" onClick={() => { FabricChange(fab, fabImage) }}>
            {/* <div className="w-full mt-6 float-right z-10">
                <input checked = { isChecked } id="green-checkbox" type="checkbox" value="" className="float-right z-30 right-4 -ml-2 w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
            </div> */}
            <div className="">
                <img src={ fabImage === null ? LoaderGif : BuffertoImage(fabImage) }  alt="cloth173"/>
                <p className="title ml-3">{ fab.fabname }</p>
                <p className="price ml-3 -mt-3">210.00$</p>
            </div>
        </div>
        
    )
}