import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import CarDetails from "./CarDetails";

const CarItem = ({
  car: { id, make, model, year },
  isLoading,
  details,
  onClick,
  isCurrentItem,
}) => {
  return (
    <Card className="carWrapper">
      <div className="carHeader" onClick={onClick}>
        <h5>
          {make} {model} ({year})
        </h5>
        <FontAwesomeIcon icon={isCurrentItem ? faAngleUp : faAngleDown} />
      </div>
      <Accordion.Collapse eventKey={id}>
        <CarDetails details={details} isLoading={isLoading} />
      </Accordion.Collapse>
    </Card>
  );
};

CarItem.propTypes = {
  car: PropTypes.object.isRequired,
  details: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  isCurrentItem: PropTypes.bool.isRequired,
};

export default CarItem;
