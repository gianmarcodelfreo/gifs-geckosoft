import React, { useState } from "react";
import { SortDown, SortUp } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { setGifs } from "../../slices/GifsSlice";
import sortGifs from "../../utils/sortGifs";

const SortButtons = () => {
  const [activeButton, setActiveButton] = useState("asc");
  const gifs = useSelector((state) => state.gifs.gifs);

  const dispatch = useDispatch();

  const handleSortChange = (event) => {
    const sortOrder = event.currentTarget.value;
    setActiveButton(sortOrder);
    const sortedGifs = sortGifs(gifs, sortOrder);
    dispatch(setGifs(sortedGifs));
  };

  return (
    <div className="flex items-center space-x-1 bg-slate-100 py-1 px-3 rounded-full">
      <button
        className={`h-12 w-12 bg-transparent transition-all scale-90 text-black flex items-center justify-center rounded-full ${
          activeButton === "asc" ? "scale-100 shadow-md bg-opacity-100 !bg-black !text-white" : ""
        }`}
        value="asc"
        onClick={handleSortChange}
      >
        <SortUp className="w-7 h-7" />
      </button>
      <button
        className={`h-12 w-12 bg-transparent transition-all scale-90 text-black flex items-center justify-center rounded-full ${
          activeButton === "desc" ? "scale-100 shadow-md bg-opacity-100 !bg-black !text-white" : ""
        }`}
        value="desc"
        onClick={handleSortChange}
      >
        <SortDown className="w-7 h-7" />
      </button>
    </div>
  );
};

export default SortButtons;
