import React from "react";
import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import InputLabel from "@mui/material/InputLabel";

import "./scss/index.scss";

export const InputField = (props) => {
  return (
    <div>
      {/* <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
        component="form"
      > */}
      {props.label && (
        <label htmlFor={props.labeluse} className="labels">
          {props.label} {props.desc && <span className="desc-input">{props.desc}</span>}
        </label>
      )}
      <div className="relative">
        <input
          // fullWidth
          id={props.labeluse}
          name={props.name}
          placeholder={props.placeholder}
          type={props.type}
          onChange={props.onChange}
          value={props.vlaue}
          autoFocus={false}
          bordered={"false"}
          className="inputfield"
          style={{
            height: props.height,
            width: props.width,
            border: props.border,
          }}
          required
        />
        {/* <i class="fa-solid fa-business-time"></i> */}
        {props.icons ? props.icons : ""}
      </div>
      {/* </Box> */}
    </div>
  );
};
InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.array,
  onChange: PropTypes.any,
  minLength: PropTypes.number,
  name: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  InputTextClass: PropTypes.string,
  prefix: PropTypes.any,
  id: PropTypes.string,
  icons: PropTypes.any,
  label: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  border: PropTypes.string,
  labeluse: PropTypes.string,
  desc: PropTypes.string,
};
