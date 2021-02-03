import { StarFillIcon, StarIcon } from '@primer/octicons-react';
import React from 'react';

import { Beer } from '../../models/Beer';
import { useBeers } from '../../store/beers/hook';

type Props = {
  isFavourite: boolean;
  beer: Beer;
};

export default function LikeButton({ beer, isFavourite }: Props) {
  const { putBeer } = useBeers();

  function addBeerToFavourites() {
    putBeer({ ...beer, isFavourite: !beer.isFavourite });
  }

  return (
    <span className="text-warning ml-2" onClick={addBeerToFavourites}>
      {isFavourite ? <StarFillIcon size={24} /> : <StarIcon size={24} />}
    </span>
  );
}
