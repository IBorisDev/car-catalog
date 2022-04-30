import React, { useEffect, useState } from "react";

import CarList from "../components/CarList";
import { DEFAULT_FILTER_OPTION } from "../constants";
import { useCars } from "../hooks";

const CarListContainer = () => {
  const [currentFilter, setCurrentFilter] = useState(DEFAULT_FILTER_OPTION);

  const {
    data: carsList,
    isFetching: isCarsFetching,
    refetch,
  } = useCars({
    filter: currentFilter,
  });

  const filterOptions = [DEFAULT_FILTER_OPTION, ...(carsList?.allMakes || [])];

  useEffect(() => {
    refetch();
  }, [refetch, currentFilter]);

  return (
    <CarList
      cars={carsList?.cars || []}
      isLoading={isCarsFetching}
      filterOptions={filterOptions}
      currentFilter={currentFilter}
      setCurrentFilter={setCurrentFilter}
    />
  );
};

export default CarListContainer;
