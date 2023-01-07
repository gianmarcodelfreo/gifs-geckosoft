import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import ActionButtons from "../components/actionButtons/ActionButtons";
import Layout from "../components/Layout";
import MosaicList from "../components/gifsList/MosaicList";
import SearchBar from "../components/SearchBar";
import { concatGifs } from "../slices/GifsSlice";
import { getGifs } from "../utils/requeusts";
import sortGifs from "../utils/sortGifs";

function App() {
  const [gifsFromSearch, setGifsFromSearch] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const gifs = useSelector((state) => state.gifs.gifs);

  const dispatch = useDispatch();

  const fetchGifs = async () => {
    const res = await getGifs(page);
    dispatch(concatGifs(sortGifs(res.data)));
    setPage((prevPage) => prevPage + 1);
    if (res.data.length === 0) setHasMore(false);
  };

  useEffect(() => {
    if (gifs.length == 0) fetchGifs();
  }, []);

  return (
    <Layout title="Home">
      <div className="App mt-8">
        <div className="container flex justify-between lg:grid-cols-2 lg:grid">
          <SearchBar setGifsFromSearch={setGifsFromSearch} gifsFromSearch={gifsFromSearch} />
          {gifsFromSearch.length == 0 && <ActionButtons />}
        </div>

        <div className="my-8">
          {gifsFromSearch.length !== 0 ? (
            <MosaicList items={gifsFromSearch} />
          ) : (
            <InfiniteScroll dataLength={gifs.length} next={fetchGifs} hasMore={hasMore}>
              <MosaicList items={gifs} />
            </InfiniteScroll>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default App;
