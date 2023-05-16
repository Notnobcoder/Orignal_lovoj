import React from "react";
import "./scss/index.scss";
import FabricCard from "../../../dashboard/CustomizeFabric/FabricCard";

export const Fabric = ({
  sheetRef,
  setNewValue,
  chnagebutton,
  setChangeButton,
  allFabs,
  FabricChange,
  AddFabImage,
  selectedFabric
}) => {
  return (
    <div>
      <div className="cloths-section-mob">
        { allFabs.length > 0 && allFabs.map((fab, index) => {
          return <FabricCard FabricCard fab = { fab } AddFabImage = { AddFabImage } isChecked = { fab._id === selectedFabric ? true : false } FabricChange = { FabricChange }/>
        }) }
        {/* <div
          className="nested-cloths"
          onClick={() => {
            setChangeButton(!chnagebutton);
            sheetRef.current.snapTo(({ maxHeight }) => maxHeight * 0.18);
            setNewValue("");

          }}
        >
          <img src={cloth173} alt="cloth173" />
          <p className="title">Cotton</p>
          <p className="price">210.00$</p>
        </div> */}
      </div>
    </div>
  );
};
