import React from "react";
import PropTypes from "prop-types";
import Accordion from "react-bootstrap/Accordion";

import Loader from "../../../components/Loader";
import Dropdown from "../../../components/Dropdown";
import CarItem from "../containers/CardItemContainer";

const CarList = ({
  cars,
  isLoading,
  filterOptions,
  currentFilter,
  setCurrentFilter,
}) => {
  const content = cars.length ? (
    <Accordion>
      {cars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </Accordion>
  ) : (
    <p className="notFound">No Cars In the Catalog</p>
  );

  return (
    <div className="carListWrapper">
      <div className="carListHeader">
        <h1>Car Catalog</h1>
        <Dropdown
          options={filterOptions}
          isDisabled={isLoading}
          onChange={setCurrentFilter}
          value={currentFilter}
        />
      </div>

      <div className="carList">{isLoading ? <Loader /> : content}</div>
    </div>
  );
};

CarList.propTypes = {
  cars: PropTypes.array.isRequired,
  filterOptions: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  currentFilter: PropTypes.object,
  setCurrentFilter: PropTypes.func.isRequired,
};

export default CarList;
