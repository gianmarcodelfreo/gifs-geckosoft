import NoResults from "@/components/misc/NoResults";
import ActionButtons from "@/components/topBar/ActionButtons";
import MosaicList from "components/gifsList/MosaicList";
import Layout from "components/Layout";
import SearchBar from "@/components/topBar/SearchBar";
import { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { concatGifs } from "../slices/GifsSlice";
import { getGifs } from "../utils/requests";
import sortGifs from "../utils/sortGifs";

function App() {
  const [gifsFromSearch, setGifsFromSearch] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const gifs = useSelector((state) => state.gifs.gifs);

  const dispatch = useDispatch();

  const fetchGifs = useCallback(async () => {
    const res = await getGifs(page);
    dispatch(concatGifs(sortGifs(res.data)));
    setPage((prevPage) => prevPage + 1);
    if (res.data.length === 0) setHasMore(false);
  }, [dispatch, page]);

  useEffect(() => {
    if (gifs.length == 0) fetchGifs();
  }, [fetchGifs, gifs.length]);

  return (
    <Layout title="Home">
      <div className="App my-8">
        <div className="topBar container flex justify-between lg:grid lg:grid-cols-2">
          <SearchBar setGifsFromSearch={setGifsFromSearch} gifsFromSearch={gifsFromSearch} />
          {!gifsFromSearch.length ? <ActionButtons /> : ""}
        </div>

        <div className="my-8">
          {gifsFromSearch.length !== 0 ? (
            gifsFromSearch[0].id ? (
              <MosaicList items={gifsFromSearch} />
            ) : (
              <NoResults text={"Result not founded"} />
            )
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
