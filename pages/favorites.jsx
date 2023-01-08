import NoResults from "@/components/NoResults";
import MosaicList from "components/gifsList/MosaicList";
import Layout from "components/Layout";
import NavigationBar from "components/NavigationBar";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favoritesGifs = useSelector((state) => state.favorites.gifs);

  return (
    <Layout title="My Favorites">
      <div>
        <NavigationBar title={"My favorites"} />
        {favoritesGifs.length > 0 ? (
          <MosaicList items={favoritesGifs} />
        ) : (
          <NoResults text={"There are no favorites gif"} />
        )}
      </div>
    </Layout>
  );
};

export default Favorites;
