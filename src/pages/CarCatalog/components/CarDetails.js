import React from "react";
import PropTypes from "prop-types";

import Loader from "../../../components/Loader";

const CarDetails = ({ details, isLoading }) => {
  const content = details ? (
    <>
      <img src={details?.image} alt={details?.model} />
      <div className="info">
        <p>
          <span>Price</span>${details?.price}
        </p>
        <p>
          <span>MPG</span>
          {details?.mpg}
        </p>
        <p>
          <span>seats</span>
          {details?.seats}
        </p>
      </div>
    </>
  ) : (
    <p className="notFound">No Car Details</p>
  );
  return <div className="carDetails">{isLoading ? <Loader /> : content}</div>;
};

CarDetails.propTypes = {
  details: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
};

export default CarDetails;
