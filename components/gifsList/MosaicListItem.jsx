import Image from "next/image";
import { useEffect, useState } from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addFavoritedItem, removeFavoritedItem } from "../../slices/FavoritesSlice";
import { show } from "../../slices/ModalSlice";

const GifItem = ({ gif }) => {
  const [image, setImage] = useState();
  const [isFavorited, setIsFavorited] = useState(false);
  const favoritesGifs = useSelector((state) => state.favorites.gifs);

  const dispatch = useDispatch();

  useEffect(() => {
    if (gif && gif.images?.downsized.url == "") {
      // Some items do not have an optimised image.
      setImage(gif.images?.original);
    } else {
      setImage(gif.images?.downsized);
    }

    if (favoritesGifs.find((storedGif) => storedGif.id === gif.id)) setIsFavorited(true);
  }, [gif, favoritesGifs]);

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
    image?.url && (
      <div className="flex justify-center" data-id={gif?.id}>
        <div
          className="group relative flex w-fit cursor-pointer justify-center rounded-2xl border border-slate-200"
          onClick={handleModal}
        >
          <Image
            className="rounded-2xl bg-slate-100"
            src={image?.url}
            height={image?.height}
            width={image?.width}
            alt={gif?.title}
            key={gif?.id}
          />
          <div className="absolute bottom-6 z-[3] flex w-full justify-between px-6 ">
            <button onClick={toggleFavorited}>
              {isFavorited ? (
                <HeartFill className="h-7 w-7 text-red-500 drop-shadow-sm" />
              ) : (
                <Heart className="h-7 w-7 text-white opacity-0 transition-all hover:scale-105 hover:!opacity-70 group-hover:opacity-100" />
              )}
            </button>
          </div>
          <div className="absolute bottom-0 z-[2] h-1/2 w-full rounded-b-2xl bg-gradient-to-t from-black to-transparent opacity-0 transition-all group-hover:opacity-90"></div>
        </div>
      </div>
    )
  );
};

export default GifItem;
