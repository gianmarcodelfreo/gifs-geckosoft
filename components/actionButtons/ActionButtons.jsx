import FavoritesBtn from "./FavoritesBtn";
import SortButtons from "./SortListBtn";

const ActionButtons = () => {
  return (
    <div className="flex w-full justify-between lg:justify-end">
      <div className="lg:mr-4">
        <SortButtons />
      </div>
      <FavoritesBtn />
    </div>
  );
};

export default ActionButtons;
