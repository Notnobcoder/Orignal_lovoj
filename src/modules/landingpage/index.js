import React, { useState } from "react";
import "./scss/index.scss";
import { Landingheader, LandingSideBar } from "../../layout";

export const LandingPage = () => {
  const [isHidden, setHidden] = useState(true);

  return (
    <div>
      <Landingheader setHidden={setHidden} />
      <LandingSideBar isHidden={isHidden} setHidden={setHidden} />
    </div>
  );
};
