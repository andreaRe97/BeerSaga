import '../../../styles/BeersList.css';
import React, { useEffect } from 'react';

import { Beer } from '../../../models/Beer';
import { useBeers } from '../../../store/beers/hook';
import BeerItem from './BeerItem';
import LoadingSpinner from '../../utils/LoadingSpinner';

export default function BeersList() {
  const { fetchBeers, beers, status } = useBeers();

  useEffect(() => {
    fetchBeers();
  }, [fetchBeers]);

  const renderBeers = () => {
    return beers.map((beer: Beer) => {
      return <BeerItem beer={beer} key={beer.id} />;
    });
  };

  return (
    <div className="d-flex align-items-center row h-100 mx-2 mt-2">
      {status === 'fetching' && <LoadingSpinner message="Fetching beers" />}
      {renderBeers()}
    </div>
  );
}
