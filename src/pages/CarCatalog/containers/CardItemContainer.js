import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import AccordionContext from "react-bootstrap/AccordionContext";

import { useCarDetails } from "../hooks";
import CardItem from "../components/CarItem";

const CarItemContainer = ({ car }) => {
  const { activeEventKey } = useContext(AccordionContext);
  const isCurrentItem = activeEventKey === car?.id;

  const {
    data: carDetails,
    isLoading: isDetailsLoading,
    mutate: getCarDetails,
  } = useCarDetails();

  const onClick = useAccordionButton(car?.id, () => {
    if (!isCurrentItem) {
      getCarDetails(car?.id);
    }
  });

  return (
    <CardItem
      car={car}
      details={carDetails || null}
      isLoading={isDetailsLoading}
      isCurrentItem={isCurrentItem}
      onClick={onClick}
    />
  );
};

CarItemContainer.propTypes = {
  car: PropTypes.object.isRequired,
};

export default CarItemContainer;
