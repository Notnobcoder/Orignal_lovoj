import React, { useState } from "react";
import "./scss/index.scss";
import { Button, InputField } from "../../../components";

export const FabricFrom = ({ handleNext, steps, activeStep, setFabname, setFabNumber,  setFabImg}) => {
  const [fabnumber, setNumber] = useState('');
  const [fabname, setName] = useState('');
  const [imgPreview, setImg] = useState('');
  const [img, setImage] = useState();
  const GenerateFabName = () => {
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var result = ""
    var charactersLength = characters.length;

    for ( var i = 0; i < 6 ; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(result.toUpperCase());
    setNumber(result.toUpperCase());
  }
  const saveImg = (e) => {
    e.preventDefault();
  }

  const handleSecond = () => {
    var c = document.createElement('canvas');
    var img = document.getElementById('Img1');
    c.height = img.naturalHeight;
    c.width = img.naturalWidth;
    var ctx = c.getContext('2d');

    ctx.drawImage(img, 0, 0, c.width, c.height);
    var base64String = c.toDataURL();
    setFabname(fabname);
    setFabNumber(fabnumber);
    setFabImg(base64String);
    handleNext();
  }

  const uploadSingleFile = (e) => {
    setImg(e.target.files[0])
  }
  return (
    <div className="fabric-form">
      {/* <h1>Fabric From</h1> */}
      <div className="subheading my-2">
        <h2 className="uppercase">Fabric Form</h2>
      </div>
      <form>
        <div className="fabric-number flex items-center justify-center gap-3 text-input-fabric two-box py-2">
          <InputField
            type={"fabric number"}
            label="Fabric Number"
            vlaue={fabnumber}
            height="50px"
            onChange={(e) => {setNumber(e.target.value); setFabNumber(e.target.value)}}
            placeholder="fabric number"
            id={"number"}
          />
          <div className="btn-fabric pt-3">
            <Button value={"Generate"} onClick={(e) => {GenerateFabName(e)}} />
          </div>
        </div>
        <div className="text-input-fabric py-2">
          <InputField
            placeholder="Enter Fabric Name"
            type="text"
            onChange={(e) => { setName(e.target.value); setFabname(e.target.value) }}
            height="50px"
            vlaue={fabname}
            label="Fabric name"
            labeluse={"name"}
            id={"name"}
          />
        </div>
        {/* <div className="image h-12 my-4">
          <img src={img} alt="" />
        </div> */}
        <div className="text-input-fabric file-type py-2">
          <InputField placeholder="Chose File" type="file" height="50px" onChange={uploadSingleFile}/>
          <img id='Img1' className="hidden" src={imgPreview !== '' ?  URL.createObjectURL(imgPreview) : ''} height='280px' width='280px'/>
        </div>
        <div className="button-continue">
          <Button
            value={
              activeStep === steps.length - 1 ? "Finish" : "Save And Continue"
            }
            onClick={handleSecond}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};
