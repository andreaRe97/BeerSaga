import React, { useEffect } from 'react';
import _ from 'lodash';

import '../../../styles/BeersList.css';
import { Beer } from '../../../models/Beer';
import { useBeers } from '../../../store/beers/hook';
import BeerItem from './BeerItem';
import LoadingSpinner from '../../utils/LoadingSpinner';

export default function BeersList() {
  const { fetchBeers, data, status } = useBeers();

  useEffect(() => {
    if (status === 'idle') fetchBeers();
  }, [fetchBeers, status]);

  const renderBeers = () => {
    return _.map(data.byIds, (beer: Beer) => (
      <BeerItem beer={beer} key={beer.id} />
    ));
  };

  return (
    <div className="row mx-2 mt-2">
      {status === 'fetching' ? (
        <LoadingSpinner message="Fetching beers" />
      ) : (
        renderBeers()
      )}
    </div>
  );
}
