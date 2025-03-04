import React from "react";
import PropTypes from "prop-types";
import { Graffiti } from "./Graffiti";
import { useState } from "react";
import { Location } from "./Location";
import UploadPage from "./UploadPage";

function GraffitiForm({ graffiti: initialGraffiti, onSave, onCancel }) {
  const [graffiti, setGraffiti] = useState(initialGraffiti);
  const [imgUrl, setImageUrl] = useState(graffiti.imgLocation);
  const [errors, setErrors] = useState({
    graffitiSurveyNumber: "",
    name: "",
    size: "",
    address: "",
    description: "",
    postcode: "",
    location: "",
    imgLocation: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid()) return;
    onSave(graffiti);
  };

  const handleChange = (event) => {
    const { type, name, value, checked } = event.target;
    // if input type is checkbox use checked
    // otherwise it's type is text, number etc. so use value
    let updatedValue = type === "checkbox" ? checked : value;

    //if input type is number convert the updatedValue string to a +number
    if (type === "number") {
      updatedValue = Number(updatedValue);
    }

    var change = {
      [name]: updatedValue,
    };

    if (name === "location.longitude") {
      change = {
        location: {
          longitude: updatedValue,
          latitude: graffiti.location.latitude,
        },
      };
    }

    if (name === "location.latitude") {
      change = {
        location: {
          latitude: updatedValue,
          longitude: graffiti.location.longitude,
        },
      };
    }

    let updatedGraffiti;
    // need to do functional update b/c
    // the new project state is based on the previous project state
    // so we can keep the project properties that aren't being edited +like project.id
    // the spread operator (...) is used to
    // spread the previous project properties and the new change
    setGraffiti((p) => {
      updatedGraffiti = new Graffiti({ ...p, ...change });
      return updatedGraffiti;
    });

    setErrors(() => validate(updatedGraffiti));
  };

  const setUrl = (url) => {
    setImageUrl(url);
    var change = {
      imgLocation: url,
    };

    let updatedGraffiti;
    setGraffiti((p) => {
      updatedGraffiti = new Graffiti({ ...p, ...change });
      return updatedGraffiti;
    });
  };

  function validate(graffiti) {
    let errors = {
      graffitiSurveyNumber: "",
      name: "",
      size: "",
      address: "",
      description: "",
      postcode: "",
      location: new Location(),
      imgLocation: "",
    };
    if (graffiti.graffitiSurveyNumber.length === 0) {
      errors.graffitiSurveyNumber = "GSN is required.";
    }
    if (graffiti.name.length === 0) {
      errors.name = "Name is required.";
    }
    if (graffiti.size.length === 0) {
      errors.size = "Size is required.";
    }
    if (graffiti.address.length === 0) {
      errors.address = "Address is required.";
    }
    if (graffiti.description.length === 0) {
      errors.description = "Description is required.";
    }
    if (graffiti.postcode.length === 0) {
      errors.postcode = "Postcode is required.";
    }
    return errors;
  }

  function isValid() {
    return (
      errors.name.length === 0 &&
      errors.graffitiSurveyNumber.length === 0 &&
      errors.size.length === 0 &&
      errors.address.length === 0 &&
      errors.description.length === 0 &&
      errors.postcode.length === 0
    );
  }

  return (
    <>
      <form className="input-group vertical rounded-lg" onSubmit={handleSubmit}>
        <label htmlFor="name roboto-slab-text" className="roboto-slab-text">Graffiti Name</label>
        <input
          type="text"
          name="name"
          placeholder="enter name"
          value={graffiti.name}
          onChange={handleChange}
          className="bordered roboto-slab-text rounded-lg"
        />
        {errors.name.length > 0 && (
          <div className="card error rounded-lg">
            <p>{errors.name}</p>{" "}
          </div>
        )}

        <label htmlFor="graffitiSurveyNumber roboto-slab-text">Graffiti Survey Number</label>
        <input
          type="text"
          name="graffitiSurveyNumber"
          placeholder="enter GSN"
          value={graffiti.graffitiSurveyNumber}
          onChange={handleChange}
          className="bordered roboto-slab-text rounded-lg"
        />
        {errors.graffitiSurveyNumber.length > 0 && (
          <div className="card error roboto-slab-text rounded-lg">
            <p>{errors.graffitiSurveyNumber}</p>{" "}
          </div>
        )}

        <label htmlFor="size" className="roboto-slab-text">Size</label>
        <input
          type="text"
          name="size"
          placeholder="enter size"
          value={graffiti.size}
          onChange={handleChange}
          className="bordered roboto-slab-text rounded-lg"
        />
        {errors.size.length > 0 && (
          <div className="card error">
            <p>{errors.size}</p>{" "}
          </div>
        )}

        <label htmlFor="address" className="roboto-slab-text">Address</label>
        <input
          type="text"
          name="address"
          placeholder="enter address"
          value={graffiti.address}
          onChange={handleChange}
          className="bordered roboto-slab-text rounded-lg"
        />
        {errors.address.length > 0 && (
          <div className="card error roboto-slab-text rounded-lg">
            <p>{errors.address}</p>{" "}
          </div>
        )}

        <label htmlFor="postcode" className="roboto-slab-text">Postcode</label>
        <input
          type="text"
          name="postcode"
          placeholder="enter postcode"
          value={graffiti.postcode}
          onChange={handleChange}
          className="bordered rounded-lg roboto-slab-text"
        />
        {errors.postcode.length > 0 && (
          <div className="card error rounded-lg roboto-slab-text">
            <p>{errors.postcode}</p>{" "}
          </div>
        )}

        <label htmlFor="location.longitude" className="roboto-slab-text">Longitude</label>
        <input
          type="number"
          name="location.longitude"
          placeholder="enter longitude"
          value={graffiti.location.longitude}
          onChange={handleChange}
          className="bordered rounded-lg roboto-slab-text"
        />

        <label htmlFor="location.latitude" className="roboto-slab-text">Latitude</label>
        <input
          type="number"
          name="location.latitude"
          placeholder="enter latitude"
          value={graffiti.location.latitude}
          onChange={handleChange}
          className="bordered rounded-lg roboto-slab-text"
        />

        <label htmlFor="description" className="roboto-slab-text">Description</label>
        <textarea
          name="description"
          placeholder="enter description"
          value={graffiti.description}
          onChange={handleChange}
          className="bordered rounded-lg roboto-slab-text mx-2"
        ></textarea>
        {errors.description.length > 0 && (
          <div className="card error rounded-lg roboto-slab-text">
            <p>{errors.description}</p>{" "}
          </div>
        )}

        <label htmlFor="imgLocation" className="roboto-slab-text">Image URL</label>
        <input
          type="text"
          name="imgLocation"
          placeholder="enter URL"
          value={imgUrl}
          onChange={handleChange}
          className="bordered rounded-lg roboto-slab-text"
        />
        <UploadPage setUrl={setUrl} />

        <div className="input-group">
          <button className="primary bordered medium roboto-slab-text rounded-lg">Save</button>
          <span></span>
          <button type="button" className="bordered medium roboto-slab-text rounded-lg" onClick={onCancel}>
            cancel
          </button>
        </div>
      </form>
    </>
  );
}

GraffitiForm.propTypes = {
  graffiti: PropTypes.instanceOf(Graffiti),
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default GraffitiForm;
