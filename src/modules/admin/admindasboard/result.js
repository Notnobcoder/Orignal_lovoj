import React from "react";
import "./scss/index.scss";
export const Result = ({Message, logo}) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center w-full result-heading">
      <img
        src={logo}
        alt="successlogo"
        className="text-center"
        height={"100px"}
        width="100px"
      />
      <h1 className="text-center flex gap-3 items-center">
        {Message}
      </h1>
    </div>
  );
};
