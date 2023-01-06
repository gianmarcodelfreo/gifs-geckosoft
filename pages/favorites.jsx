import React, { useEffect, useState } from "react";
import { Search } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import MosaicList from "../components/MosaicList";
import NavigationBar from "../components/NavigationBar";
import Layout from "../components/Layout";

const Favorites = () => {
  const favoritesGifs = useSelector((state) => state.favorites.gifs);

  return (
    <Layout>
      <div>
        <NavigationBar title={"My favorites"} />
        {favoritesGifs.length > 0 ? (
          <MosaicList items={favoritesGifs} />
        ) : (
          <div className="container">
            <p className="flex bg-slate-100 py-10 w-full rounded-2xl justify-center items-center">
              <Search className="w-10 h-10 mr-4" /> There are no favorites gif
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Favorites;
