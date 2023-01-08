import Link from "next/link";
import { Heart } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const FavoritesBtn = () => {
  const favorites = useSelector((state) => state.favorites.gifs);

  return (
    <Link
      href="/favorites"
      className={`flex items-center justify-center rounded-full bg-black text-white transition-all hover:shadow-lg max-lg:h-14 max-lg:w-14 lg:h-full lg:px-12 ${
        favorites.length == 0 && "!pointer-events-none !cursor-default select-none opacity-50"
      }`}
    >
      <span className="hidden lg:block">My Favorites</span> <Heart className="h-5 w-5 lg:ml-3" />
    </Link>
  );
};

export default FavoritesBtn;
