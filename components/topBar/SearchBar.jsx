import { useState } from "react";
import { Search, XLg } from "react-bootstrap-icons";
import { searchGifs } from "../../utils/requests";

const SearchBar = ({ setGifsFromSearch, gifsFromSearch }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (search) {
      const res = await searchGifs(search);
      if (res.data.length) {
        setGifsFromSearch(res.data);
      } else {
        setGifsFromSearch([{}]);
      }
    }
  };

  return (
    <div className="fixed bottom-8 left-0 z-20 max-lg:container max-lg:drop-shadow-lg lg:static">
      <form className="flex h-16 items-center lg:h-14">
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
          className="h-full w-full rounded-l-full border border-slate-100 bg-slate-100 px-8 !outline-none transition-all"
          placeholder="Search your gif"
          type="text"
          maxLength={40}
          autoComplete="off"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          name="search"
        />

        <button
          className="flex h-full w-32 -translate-x-1 items-center justify-center rounded-r-full border border-slate-100 bg-slate-100 text-black transition-all"
          onClick={handleSubmit}
        >
          <Search />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
