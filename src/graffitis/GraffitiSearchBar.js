import React from "react";
import PropTypes from "prop-types";

function GraffitiSearchBar({ onType }) {
  const handleChange = (event) => {
    const { value } = event.target;
    onType(value);
  };

  return (
    <input
      type="text"
      name="searchString"
      placeholder="Search by Name, GSN, Address or Description"
      onChange={handleChange}
      className="search-input bordered"
    />
  );
}

GraffitiSearchBar.propTypes = {
  onType: PropTypes.func.isRequired,
};

export default GraffitiSearchBar;
