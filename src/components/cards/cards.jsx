import React from "react";
import PropTypes from "prop-types";


const Cards = ({ title, image, description }) => {
  return (
   
<div className="cards">
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <img src={image} alt={title} className="card-image" />
        <p className="card-description">{description} </p>
      </div>
    </div>

    
  );
};

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Cards;
