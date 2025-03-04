import React from "react";
import PropTypes from "prop-types";
import { Graffiti } from "./Graffiti";
import { Link } from "react-router-dom";

function formatDescription(description) {
  return description.substring(0, 60) + "...";
}

function GraffitiCard(props) {
  const { graffiti, onEdit } = props;

  const handleEditClick = (graffitiBeingEdited) => {
    onEdit(graffitiBeingEdited);
  };
  return (
    <div className="card card-index rounded-lg w-11/12 h-full">
      {graffiti.imgLocation === "" && (
        <img
          className="rounded section section-index media"
          src="https://utfs.io/f/10fd55e8-79c3-489b-8024-25257c42c5fb-hzt98r.png"
          alt={graffiti.name}
        />
      )}
      {graffiti.imgLocation !== "" && (
        <img
          className="rounded section-index section media"
          src={graffiti.imgLocation}
          alt={graffiti.name}
        />
      )}
      <section className="section dark section-index roboto-slab-text">
        <Link to={"/graffitis/" + graffiti._id}>
          <h5 className="strong">
            <strong className="roboto-slab-text">{graffiti.name}</strong>
          </h5>
          <p className="roboto-slab-text">
            <strong className="roboto-slab-text">GSN: </strong>
            {graffiti.graffitiSurveyNumber}
          </p>
          <p className="roboto-slab-text">{formatDescription(graffiti.description)}</p>
        </Link>
        <button
          className="button bordered rounded-lg roboto-slab-text "
          onClick={() => {
            handleEditClick(graffiti);
          }}
        >
          <div className="roboto-slab-text m-2">
            <span className="icon-edit"></span>
            Edit
          </div>
        </button>
      </section>
    </div>
  );
}

GraffitiCard.propTypes = {
  graffiti: PropTypes.instanceOf(Graffiti).isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default GraffitiCard;
