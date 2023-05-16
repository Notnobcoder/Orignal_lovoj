import React, { useEffect } from "react";
import "../CustomizeFabric/scss/index.scss";
import appLOVOJ from "../../../../assests/images/threed.jpeg";
import share from "../../../../assests/images/share.png";
import infoimg from "../../../../assests/images/infoimg.png";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import WebglContainer from "../ThreeD/WebglContainer";




const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // minWidth: "550px",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
  // maxWidth: "90%",
};

export const ThreeDDesign = ({
  checkData,
  setCheckData,
  passData,
  activeStep,
  maleJson,
  femaleJson,
  WebglRef
}) => {
  // console.log(passData);
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  useEffect(() => {
    setOpen(checkData);
  }, [checkData]);
  return (
    <>
      <div className="threeD-section mobthreed-section">
        <WebglContainer ref={ WebglRef } maleJson = { maleJson } femaleJson = { femaleJson }/>
        <img
          src={share}
          alt="share.png"
          className="absolute top-3 right-3 w-11 h-11 bg-white p-3 rounded-xl share-img z-20"
        />
        {/* <div className=""> */}
        <img
          src={infoimg}
          alt="share.png"
          className="absolute top-14 right-3 w-11 h-11 my-2  bg-white p-1 rounded-xl info-img z-20"
          onClick={() => {
            setCheckData(true);
          }}
        />
        {/* </div> */}
        <div className="price absolute text-right text-2xl top-3 left-3 w-11 h-11 text-red-600 z-20">
          $210.00
        </div>
      </div>



      <div className="mobileDev-modal">
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          // onClose={handleClose}
          onClose={() => setCheckData(false)}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          className="modal-mobiledev"
        >
          <Fade in={open}>
            <Box sx={style}>
              {passData.map((value) => {
                return (
                  <div
                    className="amount-cust-section"
                    key={value.id}
                    onClick={() => setCheckData(false)}
                  >
                    <div className="w-full text-left text-3xl font-extrabold flex justify-end items-end">
                      X
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="relative my-3 shopping-div">
                        <img src={value.img} alt="shppingcart" />
                        <p className="amount-shop">2</p>
                      </div>
                      <div className="actual-amount-mob">
                        <h1>{value.amount}</h1>
                      </div>
                    </div>
                    <div className="infromation-img">
                      <img
                        src={value.pageimg}
                        alt="infroamtionImage"
                        // width={"280px"}
                        // height="280px"
                      />
                    </div>
                    <div className="clothename w-full">
                      <h1>{value.page}</h1>
                    </div>

                    {/* <div className="clothename">
      <h1>Kurti Pajama</h1>
    </div> */}
                    <div className="infromation-cloth">
                      <div className="nested-info">
                        <p>{value.selectone}</p>
                        <p>{value.valueone}</p>
                      </div>
                      <div className="nested-info">
                        <p>{value.selecttwo}</p>
                        <p>{value.valuetwo}</p>
                      </div>
                      <div className="nested-info">
                        <p>{value.selectthree}</p>
                        <p>${value.valuethree}</p>
                      </div>
                      <div className="nested-info">
                        <p>{value.selectfour}</p>
                        <p>{value.valuefour}</p>
                      </div>
                      <div className="nested-info">
                        <p>{value.selectfive}</p>
                        <p>{value.valuefive}</p>
                      </div>
                      <div className="nested-info">
                        <p>{value.selectsix}</p>
                        <p>{value.valuesix}</p>
                      </div>
                      <div className="nested-info">
                        <p>{value.selectseven}</p>
                        <p>{value.valueseven}</p>
                      </div>
                      <div className="nested-info">
                        <p>{value.selectone}</p>
                        <p>{value.valueone}</p>
                      </div>
                      <div className="nested-info">
                        <p>{value.selecteight}</p>
                        <p>{value.valueeight}</p>
                      </div>

                      {/* <div className="nested-info">
        <p>Color:</p>
        <p>Lorem Cotton</p>
      </div> */}
                    </div>
                    {/* Button */}
                    {/* <div
                      className="h-14 bg-black text-white rounded-lg text-2xl w-3/6 flex justify-center items-center"
                      onClick={activeStep === steps.length ? "" : handleNext}
                    >
                      <Button value={"Next"} />
                    </div> */}
                  </div>
                );
              })}
            </Box>
          </Fade>
        </Modal>
      </div>

      {/* <img src={appLOVOJ} alt="appLOVOJ" /> */}
    </>
  );
};
