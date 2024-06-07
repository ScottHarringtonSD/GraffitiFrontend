import React from "react";
import PropTypes from "prop-types";
import { Graffiti } from "./Graffiti";
import GraffitiCard from "./GraffitiCard";
import GraffitiForm from "./GraffitiForm";
import { useState } from "react";

function GraffitiList({ graffitis, onSave }) {
  const [graffitiBeingEdited, setGraffitiBeingEdited] = useState({});

  const handleEdit = (graffiti) => {
    setGraffitiBeingEdited(graffiti);
  };

  const cancelEditing = () => {
    setGraffitiBeingEdited({});
  };

  return (
    <div className="row">
      {graffitis.map((graffiti) => (
        <div key={graffiti._id} className="col-sm-3">
          {graffiti === graffitiBeingEdited ? (
            <GraffitiForm
              graffiti={graffiti}
              onCancel={cancelEditing}
              onSave={onSave}
            />
          ) : (
            <GraffitiCard graffiti={graffiti} onEdit={handleEdit} />
          )}
        </div>
      ))}
    </div>
  );
}

GraffitiList.propTypes = {
  graffitis: PropTypes.arrayOf(PropTypes.instanceOf(Graffiti)).isRequired,
  onSave: PropTypes.func.isRequired,
};

export default GraffitiList;
