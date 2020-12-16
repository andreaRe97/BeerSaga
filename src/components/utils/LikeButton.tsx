import React from 'react';
import { Button } from 'react-bootstrap';

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
    <Button
      className={`${isFavourite ? 'active' : ''}`}
      variant="outline-danger"
      onClick={addBeerToFavourites}
    >
      Favourite
    </Button>
  );
}
