import React from "react";
// import { Map, GoogleApiWrapper } from "google-maps-react";
import "./scss/index.scss";

function Maps() {
  return (
    <div>
      {/* <Map
        google={props.google}
        style={{ width: "100%", height: "100%" }}
        zoom={10}
        // initialCenter={{
        //   lat: 20.39642,
        //   lng: 78.13984,
        // }}
      /> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.3122811976514!2d85.78793921492033!3d20.28733728640467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190823ce41352d%3A0xd3c19025b85699d3!2sLOVOJ!5e0!3m2!1sen!2s!4v1655562684831!5m2!1sen!2s"
        width="100%"
        height="550"
        // style="border:0;"
        // style={{ border: "4px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
export default Maps;
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyDe1C68FMUbs2ZyWiGbr53KRxYvt-77xQQ",
// })(Maps);
// AIzaSyDe1C68FMUbs2ZyWiGbr53KRxYvt-77xQQ
