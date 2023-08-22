import React from "react";
import PropTypes from "prop-types";

import "./IconGalleryItem.css";

const IconGalleryItem = ({ imagePath }) => {
  return (
    <div className="icon-gallery-item">
      <div className="image-container">
        <img src={imagePath} alt="Gallery" />
      </div>
    </div>
  );
};

IconGalleryItem.propTypes = {
  imagePath: PropTypes.string.isRequired,
};

export default IconGalleryItem;
