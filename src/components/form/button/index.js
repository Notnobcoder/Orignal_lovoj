import React from "react";
import PropTypes from "prop-types";
import "./scss/index.scss";

export const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
      className={props.btnClass ? props.btnClass : "btn"}
      style={{
        background: props.bgColor,
        color: props.color,
        border: props.border,
        padding: props.padding,
        display: props.flex,
        alignItems: props.alignItems,
        flexDirection: props.flexDirection,
      }}
    >
      {/* <div className="flex justify-center items-center flex-row-reverse"> */}
      {props.icon ? (
        <span className="mx-2 pl-1">
          <img src={props.icon} className="w-2 h-2" />
        </span>
      ) : (
        ""
      )}
      {props.value && props.value}
      {/* </div> */}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.any,
  onClick: PropTypes.any,
  value: PropTypes.any,
  bgColor: PropTypes.string,
  btnClass: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.string,
  disabled: PropTypes.bool,
  padding: PropTypes.string,
  flex: PropTypes.string,
  alignItems: PropTypes.string,
  flexDirection: PropTypes.string,
};
