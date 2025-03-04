import React from "react";
import PropTypes from "prop-types";

export default function GraffitiDetail({ graffiti, onEdit, onDelete }) {
  const handleEditClick = (graffitiBeingEdited) => {
    onEdit(graffitiBeingEdited);
  };

  const handleDeleteClick = (graffitiBeingDeleted) => {
    onDelete(graffitiBeingDeleted);
  };

  return (
    <div className="">
      <div className="row">
        <div className="col-sm-6 detail-imdiv">
          {graffiti.imgLocation === "" && (
            <>
              <img
                className="rounded-md detail-image"
                src="https://utfs.io/f/10fd55e8-79c3-489b-8024-25257c42c5fb-hzt98r.png"
                alt={graffiti.name}
              />
            </>
          )}
          {graffiti.imgLocation !== "" && (
            <img
              className="rounded-md detail-image"
              src={graffiti.imgLocation}
              alt={graffiti.name}
            />
          )}
        </div>
        <div className="col-sm-6">
          <section className="section dark">
            <h3 className="strong roboto-slab-text">
              <strong className="roboto-slab-text font-bold">{graffiti.name}</strong>
            </h3>
            <p className="roboto-slab-text">
              <strong className="roboto-slab-text font-bold">GSN:</strong> {graffiti.graffitiSurveyNumber}
            </p>
            <p className="roboto-slab-text">
              <strong className="roboto-slab-text font-bold">Size:</strong> {graffiti.size}
            </p>
            <p className="roboto-slab-text">
              <strong className="roboto-slab-text font-bold">Address:</strong> {graffiti.address}
            </p>
            <p className="roboto-slab-text">
              <strong className="roboto-slab-text font-bold">Postcode:</strong> {graffiti.postcode}
            </p>
            <p className="roboto-slab-text">
              <strong className="roboto-slab-text font-bold">Location:</strong> {graffiti.location.longitude}°,{" "}
              {graffiti.location.latitude}°
            </p>
            <p className="roboto-slab-text">{graffiti.description}</p>
          </section>
          <button
            className=" bordered rounded-lg roboto-slab-text button"
            onClick={() => {
              handleEditClick(graffiti);
            }}
          >
            <span className="icon-edit roboto-slab-text"></span>
            Edit
          </button>
          <button
            className="inverse bordered rounded-lg roboto-slab-text button"
            onClick={() => {
              handleDeleteClick(graffiti);
            }}
          >
            <span className=" roboto-slab-text"></span>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

GraffitiDetail.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
