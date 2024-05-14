import React from "react";

export default function GraffitiDetail({ graffiti }) {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="">
          <div className="row">
            <div className="col-sm-6">
              <img
                className="rounded"
                src={graffiti.imgLocation}
                alt={graffiti.name}
              />
            </div>
            <div className="col-sm-6">
              <section className="section dark">
                <h3 className="strong">
                  <strong>{graffiti.name}</strong>
                </h3>
                <p>
                  <strong>GSN:</strong> {graffiti.graffitiSurveyNumber}
                </p>
                <p>
                  <strong>Size:</strong> {graffiti.size}
                </p>
                <p>
                  <strong>Address:</strong> {graffiti.address}
                </p>
                <p>
                  <strong>Postcode:</strong> {graffiti.postcode}
                </p>
                <p>
                  <strong>Location:</strong> {graffiti.location.longitude}°,{" "}
                  {graffiti.location.latitude}°
                </p>
                <p>{graffiti.description}</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
