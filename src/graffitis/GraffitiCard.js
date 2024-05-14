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
    <div className="card small">
      {graffiti.imgLocation === "" && (
        <>
          <img
            className="rounded"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5hvw6LxzrtFDIiaj9ETqX7dW38OcbMaHCA&usqp=CAU"
            alt={graffiti.name}
          />
        </>
      )}
      {graffiti.imgLocation !== "" && (
        <img
          className="rounded"
          src={graffiti.imgLocation}
          alt={graffiti.name}
        />
      )}
      <section className="section dark">
        <Link to={"/graffitis/" + graffiti._id}>
          <h5 className="strong">
            <strong>{graffiti.name}</strong>
          </h5>
          <p>
            <strong>GSN: </strong>
            {graffiti.graffitiSurveyNumber}
          </p>
          <p>{formatDescription(graffiti.description)}</p>
        </Link>
        <button
          className=" bordered"
          onClick={() => {
            handleEditClick(graffiti);
          }}
        >
          <span className="icon-edit "></span>
          Edit
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
