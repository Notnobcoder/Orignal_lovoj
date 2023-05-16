import React from "react";
import "./scss/index.scss";
import video from "../../assests/video/secondvideo.mp4";
export const Video = () => {
  return (
    <div>
      <video
        src={video}
        typeof="video/mp4"
        autoPlay
        muted
        loop
        width={"100%"}
        className="video-link"
        // height={"250px"}
        style={{
          objectFit: "cover",
          borderRadius: "8px",
        //   height: "450px",
        }}
      />
    </div>
  );
};
