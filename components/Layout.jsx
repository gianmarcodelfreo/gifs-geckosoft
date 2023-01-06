import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFavoritesItems } from "../slices/FavoritesSlice";
import GifModal from "../components/GifModal";
import Head from "next/head";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedGifs = JSON.parse(localStorage.getItem("gifs")) || [];
    dispatch(setFavoritesItems(storedGifs));
  }, []);

  return (
    <>
      <Head>
        <title>Gifs App - Geckosoft</title>
      </Head>
      <GifModal />
      {children}
    </>
  );
};

export default Layout;
