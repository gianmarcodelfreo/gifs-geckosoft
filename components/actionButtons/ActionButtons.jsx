import React from "react";
import FavoritesBtn from "./FavoritesBtn";
import SortButtons from "./SortListBtn";

const ActionButtons = () => {
  return (
    <div className="flex w-full lg:justify-end justify-between">
      <div className="lg:mr-4">
        <SortButtons />
      </div>
      <FavoritesBtn />
    </div>
  );
};

export default ActionButtons;
