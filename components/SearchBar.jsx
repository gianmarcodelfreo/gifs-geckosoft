import React, { useState } from "react";
import { Search, XLg } from "react-bootstrap-icons";
import { searchGifs } from "../utils/requeusts";

const SearchBar = ({ setGifsFromSearch, gifsFromSearch }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await searchGifs(search);
    setGifsFromSearch(res.data);
  };

  return (
    <div className="fixed z-20 bottom-8 max-lg:container left-0 lg:static max-lg:drop-shadow-lg">
      <form className="flex items-center h-16 lg:h-14">
        {gifsFromSearch.length !== 0 && (
          <button
            type="button"
            className="mr-5"
            onClick={() => {
              setSearch("");
              setGifsFromSearch([]);
            }}
          >
            <XLg className="h-5 w-5" />
          </button>
        )}

        <input
          className="bg-slate-100 w-full border border-slate-100 h-full rounded-l-full focus:border-black transition-all !outline-none px-8"
          placeholder="Search your gif"
          type="text"
          autoComplete="off"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          name="search"
        />

        <button
          className="bg-black text-white rounded-r-full flex items-center justify-center h-full w-32 transition-all border border-black"
          onClick={handleSubmit}
        >
          <Search />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
