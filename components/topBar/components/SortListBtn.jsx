import { useState } from "react";
import { SortDown, SortUp } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { setGifs } from "../../../slices/GifsSlice";
import sortGifs from "../../../utils/sortGifs";

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
    <div className="flex items-center space-x-1 rounded-full bg-slate-100 py-1 px-1">
      <button
        className={`flex h-12 w-12 scale-90 items-center justify-center rounded-full bg-transparent text-black transition-all ${
          activeButton === "asc" ? "scale-100 !bg-black bg-opacity-100 !text-white shadow-md" : ""
        }`}
        value="asc"
        onClick={handleSortChange}
      >
        <SortUp className="h-7 w-7" />
      </button>
      <button
        className={`flex h-12 w-12 scale-90 items-center justify-center rounded-full bg-transparent text-black transition-all ${
          activeButton === "desc" ? "scale-100 !bg-black bg-opacity-100 !text-white shadow-md" : ""
        }`}
        value="desc"
        onClick={handleSortChange}
      >
        <SortDown className="h-7 w-7" />
      </button>
    </div>
  );
};

export default SortButtons;
