import { StarFillIcon, StarIcon } from "@primer/octicons-react";
import React from "react";

import { Beer } from "../../models/Beer";
import { useBeers } from "../../state/beers/hook";

type Props = {
  beer: Beer;
};

export default function LikeButton({ beer }: Props) {
  const { putBeer } = useBeers();

  function addBeerToFavourites() {
    putBeer({ ...beer, isFavourite: !beer.isFavourite });
  }

  return (
    <span className="text-warning ml-2" onClick={addBeerToFavourites}>
      {beer.isFavourite ? <StarFillIcon size={24} /> : <StarIcon size={24} />}
    </span>
  );
}
