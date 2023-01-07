import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import FavoritesBtn from "../components/FavoritesBtn";
import Layout from "../components/Layout";
import MosaicList from "../components/MosaicList";
import SearchBar from "../components/SearchBar";
import { getGifs } from "../utils/requeusts";

function App() {
  const [gifs, setGifs] = useState([]);
  const [gifsFromSearch, setGifsFromSearch] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchGifs = async () => {
    const res = await getGifs(page);
    setGifs((prevGifs) => [...prevGifs, ...res.data]);
    setPage((prevPage) => prevPage + 1);
    if (res.data.length === 0) setHasMore(false);
  };

  useEffect(() => {
    fetchGifs();
  }, []);

  return (
    <Layout>
      <div className="App mt-8">
        <div className="container flex justify-between lg:grid-cols-2 lg:grid">
          <SearchBar setGifsFromSearch={setGifsFromSearch} gifsFromSearch={gifsFromSearch} />
          <div className="lg:flex justify-end">
            <FavoritesBtn />
          </div>
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
