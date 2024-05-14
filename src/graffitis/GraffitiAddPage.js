import React, { useState } from "react";
import { graffitiAPI } from "./graffitiAPI";
import GraffitiForm from "./GraffitiForm";
import { Graffiti } from "./Graffiti";

function GraffitiAddPage() {
  const graffiti = new Graffiti();
  const [cancelScreen, setCancelScreen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const cancelAdd = () => {
    setCancelScreen(true);
  };

  const addGraffiti = (graffiti) => {
    console.log("this is the add step");
    setLoading(true);
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
      setLoading(false);
    }
  };

  const resetPage = () => {
    setCancelScreen(false);
    setSuccessMessage("");
  };

  return (
    <>
      <h1 className="x-large">Add Graffiti</h1>
      {cancelScreen && (
        <>
          <div>Changes have been cancelled!</div>
          <button className="primary bordered medium" onClick={resetPage}>
            Add New Graffiti
          </button>
        </>
      )}
      {successMessage !== "" && (
        <>
          <div>{successMessage.message}</div>
          <button className="primary bordered medium" onClick={resetPage}>
            Add New Graffiti
          </button>
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
      {!cancelScreen && successMessage === "" && (
        <div>
          <GraffitiForm
            graffiti={graffiti}
            onCancel={cancelAdd}
            onSave={addGraffiti}
          />
        </div>
      )}
      {loading && (
        <div className="center-page">
          <span className="spinner primary"></span>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}

export default GraffitiAddPage;
