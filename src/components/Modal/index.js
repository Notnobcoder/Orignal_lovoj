import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button } from "../../components";
import { NavLink } from "react-router-dom";
import "./index.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#e5e5e5",
  //   border: '2px solid #000',
  border: "none",
  outline: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: 6,
};

export const MianModal = ({ checkData, setCheckData, passData }) => {
  // const [storeData, setStoreData]=React.useState(passData)
  console.log(passData);
  // const { img, job, rate, name } = passData;
  //   console.log(handleclose);
  //   const handleClose = () => setOpen(false);
  //  console.log(onClose);
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  React.useEffect(() => {
    setOpen(checkData);
  }, [checkData]);
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => setCheckData(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {/* <button onClick={handleOpen}>Open</button> */}
            {passData.map((value) => {
              console.log(value);
              return (
                <>
                  <div>
                    <div
                      className="cross-btn"
                      onClick={() => setCheckData(false)}
                    >
                      <Button value={"X"} />
                    </div>
                    <div className="modal-box">
                      <div className="userimg">
                        <img src={value.img} className="h-32 w-32" alt="" />
                      </div>
                      <div className="modal-desc">
                        <p className="name-user">{value.storeName}</p>
                        <p className="job-modal">{value.role}</p>
                        <div>
                          <img src={value.rating} alt="rating" />
                        </div>
                        <p className="rates">{value.rate}</p>
                      </div>
                    </div>
                    <div className="modal-btn">
                      <Button value={"Instant Appointment"} />
                      <NavLink to={{
                        pathname: `/customize/${value.storeNumber}`,
                        query: {
                          content: JSON.stringify(value)        
                        }
                      }}>
                        <Button value={"3D Store"} />
                      </NavLink>
                      <Button value={"Readymade Sotre"} />
                    </div>
                  </div>
                </>
              );
            })}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
