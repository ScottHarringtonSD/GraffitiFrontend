import React from "react";
import PropTypes from "prop-types";
import { Graffiti } from "./Graffiti";

function GraffitiDeletePage({ graffiti: initialGraffiti, onDelete, onCancel }) {
  const graffiti = initialGraffiti;

  function handleDelete() {
    onDelete(graffiti);
  }

  return (
    <>
      <h5>Are you sure you want to delete this graffiti?</h5>
      <button className="bordered rounded-lg roboto-slab-text" onClick={onCancel}>
        Cancel
      </button>
      <button className="bordered rounded roboto-slab-text" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}

GraffitiDeletePage.propTypes = {
  graffiti: PropTypes.instanceOf(Graffiti),
  onDelete: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default GraffitiDeletePage;
