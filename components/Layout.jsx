import Modal from "@/components/GifListItemModal";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFavoritesItems } from "../slices/FavoritesSlice";

const Layout = ({ children, title = "" }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedGifs = JSON.parse(localStorage.getItem("gifs")) || [];
    dispatch(setFavoritesItems(storedGifs));
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>{`Gifs App - ${title}`}</title>
      </Head>
      <Modal />
      {children}
    </>
  );
};

export default Layout;
