import React, { useEffect, useState } from "react";
import "./scss/index.scss";
import { LandingPage } from "../../../../modules";
import { Footer } from "../../../../layout";
import imgshirt from "../../../../assests/images/customize/cart/imgshirt.png";
import TestShirt from '../../../../assests/images/cloths/173-texture3.jpg';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "../../../../components";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import { NavLink, useLocation, useParams } from "react-router-dom";
// import crosssign from "../../../../assests/images/crosssign.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "8px",
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const AddToWishList = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [component, setComponent] = useState({});
  const { testValue } = useParams();
  const state = useLocation();

  useEffect(() => {
    let _component = localStorage.getItem('component');
    console.log('====================================');
    console.log(JSON.parse(_component));
    console.log('====================================');
    setComponent(_component)
  }, [])

  const LoadList = () => {

  }

  return (
    <div>
      {/* index */}
      <LandingPage />
      {/* content add to wish List */}
      <div className="wishlist-section">
        <div className="nested-wishlist">
          <h1>Wish Card</h1>
          <div className="card-section">
            <div className="nested-card">
              <div className="date">
                <p className="number">1</p>
                <p> 24-08-2022</p>
                <p>Rs - 200</p>
              </div>
              <div className="img">
                <img src={TestShirt} alt="imgshirt" />
              </div>
              <div className="content-wishlist flex flex-col justify-between">
                <div className="list-one flex  items-center p-5 gap-2">
                  <p>Product</p>
                  <ArrowForwardIcon />
                  <p>Fabric</p>
                </div>
                <div className="list-two flex items-center p-5 gap-2">
                  <div>
                    <NavLink to={"/customize"}>
                    <Button value={"Edit"} />
                    </NavLink>
                  </div>
                  {/* <div> */}
                  <button onClick={handleOpen}>
                    <DeleteIcon />
                  </button>
                  {/* </div> */}
                </div>
                <div className="flex items-center p-5 gap-2">
                  <div>
                    <Button value={"Add To Cart"} />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="nested-card">
              <div className="date">
                <p className="number">2</p>
                <p> 14-08-2022</p>
                <p>Rs - 3000</p>
              </div>
              <div className="img">
                <img src={imgshirt} alt="imgshirt" />
              </div>
              <div className="content-wishlist flex flex-col justify-between">
                <div className="list-one flex  items-center p-5 gap-2">
                  <p>Product</p>
                  <ArrowForwardIcon />
                  <p>Fabric</p>
                </div>
                <div className="list-two flex items-center p-5 gap-2">
                  <div>
                    <Button value={"Edit"} />
                  </div>
                  <button onClick={handleOpen}>
                    <DeleteIcon />
                  </button>
                </div>
                <div className="flex items-center p-5 gap-2">
                  <div>
                    <Button value={"Add To Cart"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="nested-card">
              <div className="date">
                <p className="number">3</p>
                <p> 14-08-2022</p>
                <p>Rs - 3000</p>
              </div>
              <div className="img">
                <img src={imgshirt} alt="imgshirt" />
              </div>
              <div className="content-wishlist flex flex-col justify-between">
                <div className="list-one flex  items-center p-5 gap-2">
                  <p>Product</p>
                  <ArrowForwardIcon />
                  <p>Fabric</p>
                </div>
                <div className="list-two flex items-center p-5 gap-2">
                  <div>
                    <Button value={"Edit"} />
                  </div>
                  <button onClick={handleOpen}>
                    <DeleteIcon />
                  </button>
                </div>
                <div className="flex items-center p-5 gap-2">
                  <div>
                    <Button value={"Add To Cart"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="nested-card">
              <div className="date">
                <p className="number">4</p>
                <p> 14-08-2022</p>
                <p>Rs - 3000</p>
              </div>
              <div className="img">
                <img src={imgshirt} alt="imgshirt" />
              </div>
              <div className="content-wishlist flex flex-col justify-between">
                <div className="list-one flex  items-center p-5 gap-2">
                  <p>Product</p>
                  <ArrowForwardIcon />
                  <p>Fabric</p>
                </div>
                <div className="list-two flex items-center p-5 gap-2">
                  <div>
                    <Button value={"Edit"} />
                  </div>
                  <button onClick={handleOpen}>
                    <DeleteIcon />
                  </button>
                </div>
                <div className="flex items-center p-5 gap-2">
                  <div>
                    <Button value={"Add To Cart"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="nested-card">
              <div className="date">
                <p className="number">5</p>
                <p> 14-08-2022</p>
                <p>Rs - 3000</p>
              </div>
              <div className="img">
                <img src={imgshirt} alt="imgshirt" />
              </div>
              <div className="content-wishlist flex flex-col justify-between">
                <div className="list-one flex  items-center p-5 gap-2">
                  <p>Product</p>
                  <ArrowForwardIcon />
                  <p>Fabric</p>
                </div>
                <div className="list-two flex items-center p-5 gap-2">
                  <div>
                    <Button value={"Edit"} />
                  </div>
                  <button onClick={handleOpen}>
                    <DeleteIcon />
                  </button>
                </div>
                <div className="flex items-center p-5 gap-2">
                  <div>
                    <Button value={"Add To Cart"} />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        className="modal-addwishlist"
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Do You Want Delete Permently ?
            </Typography>
            <div className="modal-btn flex w-full my-4">
              <button className="py-3" onClick={handleClose}>
                Cancel
              </button>
              <button className="py-3 btn">Confrim</button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
