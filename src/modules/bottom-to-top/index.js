import { useRef, useState } from "react";
import { BottomSheet} from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import "./scss/index.scss";

import { Button, FilterBtn, InputField } from "../../components";
import { SimpleAccordion } from "../../components/accordian";
import crosssign from "../../assests/images/crosssign.png";
import { Divider } from "@mui/material";





export const BottomToTop = () => {
  const focusRef = useRef();
  const sheetRef = useRef();
  const [open, setOpen] = useState(true);
  const [chnagebutton, setChangeButton] = useState(true);
  return (
    <div className="App">
      <BottomSheet
        open={open}
        blocking={false}
        // skipInitialTransition
        ref={sheetRef}
        initialFocusRef={focusRef}
        defaultSnap={({ maxHeight }) => maxHeight / 9}
        snapPoints={({ maxHeight }) => [
          maxHeight / 1.4,
          // maxHeight * 0.5,
          maxHeight * 0.14,
        ]}
        className="bottom-sheet z-50"
      >
        <div className="main">
          {open && (
            <div className="head">
              <div
                className="search-box"
                onClick={() => {
                  // Full typing for the arguments available in snapTo, yay!!
                  setChangeButton(!chnagebutton);

                  sheetRef.current.snapTo(({ maxHeight }) => maxHeight);
                }}
              >
                <div className="name-icon">
                  {/* <span></span> */}
                  <InputField
                    placeholder="Location"
                    type="text"
                    // height="60px"
                    icons={
                      <i className="fa-solid fa-location-dot absolute  -left-3  icons top-1"></i>
                    }
                  />
                </div>
                <span className="border-r-2 border-solid border-slate-300 w-1 h-5 mr-6 "></span>

                {/* <BsSearch
                  style={{ color: "rgba(45, 52, 58, 1)", margin: "0px 15px" }}
                /> */}
                <InputField
                  textbox="textinput"
                  placeholder="search here..."
                  icons={
                    <i className="fas fa-search absolute top-1 -left-3  icons"></i>
                  }
                />
              </div>
              <div className="filter-btn-top-bottom">
                {/* <img src={filter} alt="Filter" className="active" /> */}
                {chnagebutton ? (
                  <div
                    onClick={() => {
                      // Full typing for the arguments available in snapTo, yay!!
                      setChangeButton(!chnagebutton);
                      sheetRef.current.snapTo(({ maxHeight }) => maxHeight);
                    }}
                  >
                    <FilterBtn />
                  </div>
                ) : (
                  <img
                    onClick={() => {
                      setChangeButton(!chnagebutton);
                      sheetRef.current.snapTo(
                        ({ maxHeight }) => maxHeight * 0.18
                      );
                    }}
                    src={crosssign}
                    alt="crosssign"
                    width={"34px"}
                    height= {"30px"}
                  />
                )}
              </div>
              {/* <button>
                close
              </button> */}
            </div>
          )}
          <div className="body">
            <SimpleAccordion />
            <Divider />
          </div>
          <Divider style={{ marginTop: "20px" }} />
          <div className="buttons">
            <Divider />
            <Button
              bgColor="white"
              color="#202020"
              border="1px solid rgba(0, 0, 0, 0.1)"
              btnClass="button"
              value="Clear"
            />
            <Button
              bgColor="rgba(0, 114, 181, 1)"
              color="#ffff"
              value="Show Results"
              btnClass="button"
              // size="16px"
              flexs={"1"}
              onClick={() => {
                setChangeButton(!chnagebutton);
                sheetRef.current.snapTo(({ maxHeight }) => maxHeight * 0.18);
              }}
            />
          </div>
        </div>
      </BottomSheet>
    </div>
  );
};
