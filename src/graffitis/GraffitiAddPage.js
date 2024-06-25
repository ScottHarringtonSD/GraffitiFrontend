import React, { useState } from "react";
import { graffitiAPI } from "./graffitiAPI";
import GraffitiForm from "./GraffitiForm";
import { Graffiti } from "./Graffiti";

function GraffitiAddPage() {
  const graffiti = new Graffiti();
  const [cancelScreen, setCancelScreen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(null);

  const cancelAdd = () => {
    setCancelScreen(true);
  };

  const addGraffiti = (graffiti) => {
    try {
      graffitiAPI
        .add(graffiti)
        .then((response) => {
          setSuccessMessage(response);
        })
        .catch((e) => {
          setError(e.message);
        });
    } finally {
    }
  };

  const resetPage = () => {
    setCancelScreen(false);
    setSuccessMessage("");
    setError(null);
  };

  return (
    <>
      <fieldset className="field_set">
        <legend className="x-large centre">Add Graffiti</legend>
        {cancelScreen && (
          <>
            <div className="centre">Changes have been cancelled!</div>
            <div className="centre-btn">
              <button
                className="primary bordered medium centre-btn"
                onClick={resetPage}
              >
                Add New Graffiti
              </button>
            </div>
          </>
        )}
        {successMessage !== "" && (
          <>
            <div className="centre">{successMessage.message}!</div>
            <div className="centre-btn">
              <button
                className="primary bordered medium centre-btn"
                onClick={resetPage}
              >
                Add New Graffiti
              </button>
            </div>
          </>
        )}
        {error && (
          <div className="row">
            <div className="card large error">
              <section>
                <p>
                  <span className="icon-alert inverse "></span> {error}
                </p>
              </section>
            </div>
            <button className="primary bordered medium" onClick={resetPage}>
              Try Again
            </button>
          </div>
        )}
        {!cancelScreen && successMessage === "" && error === null && (
          <div>
            <GraffitiForm
              graffiti={graffiti}
              onCancel={cancelAdd}
              onSave={addGraffiti}
            />
          </div>
        )}
      </fieldset>
    </>
  );
}

export default GraffitiAddPage;
