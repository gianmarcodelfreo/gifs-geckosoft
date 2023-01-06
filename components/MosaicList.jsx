import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import GifItem from "./MosaicListItem";

const MosaicList = ({ items }) => {
  return (
    <div className="container">
      <ResponsiveMasonry>
        <Masonry gutter="16px">
          {items.map((gif, i) => (
            <GifItem gif={gif} key={i} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default MosaicList;
