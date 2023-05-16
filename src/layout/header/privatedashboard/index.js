import React, { useState } from "react";
import { SideBar, PrivateHeader } from "../../index";

export const MobileHeader = () => {
  const [isHidden, setHidden] = useState(true);
  return (
    <div style={{ flex: 1 }}>
      <PrivateHeader setHidden={setHidden} />
      <SideBar isHidden={isHidden} setHidden={setHidden} />
    </div>
  );
};
