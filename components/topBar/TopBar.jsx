import React from "react";
import FavoritesBtn from "./components/FavoritesBtn";
import SortButtons from "./components/SortListBtn";
import SearchBar from "./components/SearchBar";

const TopBar = ({ setGifsFromSearch, gifsFromSearch }) => {
  return (
    <div className="topBar container flex justify-between lg:grid lg:grid-cols-2">
      <SearchBar setGifsFromSearch={setGifsFromSearch} gifsFromSearch={gifsFromSearch} />
      {!gifsFromSearch.length ? (
        <div className="flex w-full justify-between lg:justify-end">
          <div className="lg:mr-4">
            <SortButtons />
          </div>
          <FavoritesBtn />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TopBar;
