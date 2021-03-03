import React, { useEffect } from "react";
import _ from "lodash";

import "../../../styles/BeersList.css";
import { Beer } from "../../../models/Beer";
import { useBeers } from "../../../state/beers/hook";
import BeerItem from "./BeerItem";
import LoadingSpinner from "../../utils/LoadingSpinner";
import { DomainStatus } from "../../../state/types";

export default function BeersList() {
  const { fetchBeers, data, status } = useBeers();

  useEffect(() => {
    if (status === DomainStatus.IDLE) fetchBeers();
  }, [fetchBeers, status]);

  const renderBeers = () => {
    return _.map(data.byIds, (beer: Beer) => (
      <BeerItem beer={beer} key={beer.id} />
    ));
  };

  return (
    <div className="row mx-2 mt-2">
      {status === DomainStatus.IDLE ? (
        <LoadingSpinner message="Fetching beers" />
      ) : (
        renderBeers()
      )}
    </div>
  );
}
