import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Heart } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const FavoritesBtn = () => {
  const favorites = useSelector((state) => state.favorites.gifs);

  return (
    <Link
      href="/favorites"
      className={`bg-black text-white lg:h-full rounded-full flex items-center justify-center max-lg:h-14 max-lg:w-14 lg:px-12 hover:shadow-lg transition-all ${
        favorites.length == 0 && "opacity-50 !cursor-default !pointer-events-none"
      }`}
    >
      <span className="hidden lg:block">My Favorites</span> <Heart className="w-5 h-5 lg:ml-3" />
    </Link>
  );
};

export default FavoritesBtn;