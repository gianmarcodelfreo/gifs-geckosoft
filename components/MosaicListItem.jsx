import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addFavoritedItem, removeFavoritedItem, setFavoritesItems } from "../slices/FavoritesSlice";
import { show } from "../slices/ModalSlice";

const GifItem = ({ gif }) => {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState();
  const [isFavorited, setIsFavorited] = useState(false);
  const favoritesGifs = useSelector((state) => state.favorites.gifs);

  const dispatch = useDispatch();

  useEffect(() => {
    if (gif.images.downsized.url == "") {
      // Some items do not have an optimised image.
      setImage(gif.images.original);
    } else {
      setImage(gif.images.downsized);
    }

    if (favoritesGifs.find((storedGif) => storedGif.id === gif.id)) setIsFavorited(true);
  }, [gif]);

  useEffect(() => {
    localStorage.setItem("gifs", JSON.stringify(favoritesGifs));
  }, [favoritesGifs]);

  const toggleFavorited = (e) => {
    e.stopPropagation();

    if (isFavorited) {
      dispatch(removeFavoritedItem(gif));
      setIsFavorited(false);
    } else {
      dispatch(addFavoritedItem(gif));
      setIsFavorited(true);
    }
  };

  const handleModal = () => {
    dispatch(show(gif));
  };

  return (
    <div className="flex justify-center">
      <div className="relative w-fit group cursor-pointer border border-slate-200 rounded-2xl" onClick={handleModal}>
        {image?.url && (
          <Image
            className="rounded-2xl bg-slate-100 object-center"
            src={image?.url}
            height={image?.height}
            width={image?.width}
            data-src={gif?.id}
            alt={gif?.title}
            key={gif?.id}
          />
        )}
        <div className="flex justify-between bottom-6 absolute z-[3] w-full px-6 ">
          <button onClick={toggleFavorited}>
            {isFavorited ? (
              <HeartFill className="w-7 h-7 text-red-500 drop-shadow-sm" />
            ) : (
              <Heart className="w-7 h-7 text-white opacity-0 transition-all group-hover:opacity-100" />
            )}
          </button>
        </div>
        <div className="opacity-0 z-[2] group-hover:opacity-90 from-black bg-gradient-to-t absolute bottom-0 w-full to-transparent h-1/2 rounded-b-2xl transition-all"></div>
      </div>
    </div>
  );
};

export default GifItem;
