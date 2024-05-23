import React, { useEffect, useState } from "react";
import { graffitiAPI } from "./graffitiAPI";
import GraffitiDetail from "./GraffitiDetail";
import { useParams } from "react-router-dom";
import GraffitiForm from "./GraffitiForm";
import GraffitiDeletePage from "./GraffitiDeletePage";

function GraffitiPage(props) {
  const [loading, setLoading] = useState(false);
  const [graffiti, setGraffiti] = useState(null);
  const [error, setError] = useState(null);
  const params = useParams();
  const id = params.id;
  const [graffitiBeingEdited, setGraffitiBeingEdited] = useState({});
  const [graffitiBeingDeleted, setGraffitiBeingDeleted] = useState({});
  const [deleteSuccessful, setDeleteSuccessful] = useState(false);

  useEffect(() => {
    setLoading(true);
    graffitiAPI
      .find(id)
      .then((data) => {
        setGraffiti(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, [id]);

  const handleEdit = (graffiti) => {
    setGraffitiBeingEdited(graffiti);
  };

  const handleDelete = (graffiti) => {
    setGraffitiBeingDeleted(graffiti);
  };

  const cancelDelete = () => {
    setGraffitiBeingDeleted({});
  };

  const cancelEditing = () => {
    setGraffitiBeingEdited({});
  };

  const saveGraffiti = (graffiti) => {
    graffitiAPI
      .patch(graffiti)
      .then((updatedGraffiti) => {
        setGraffiti(updatedGraffiti);
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  const deleteGraffiti = (graffiti) => {
    console.log(graffiti);
    graffitiAPI.delete(graffiti).catch((e) => {
      setError(e.message);
    });
    setDeleteSuccessful(true);
    setGraffitiBeingDeleted({});
  };

  return (
    <div>
      <>
        {loading && (
          <>
            <h1 className="x-large centre">Details</h1>
            <div className="center-page">
              <span className="spinner primary"></span>
              <p>Loading...</p>
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
          </div>
        )}
        {graffiti === graffitiBeingEdited && (
          <>
            <h1 className="x-large centre">Details</h1>
            <GraffitiForm
              graffiti={graffiti}
              onCancel={cancelEditing}
              onSave={saveGraffiti}
            />
          </>
        )}
        {graffiti === graffitiBeingDeleted && (
          <>
            <h1 className="x-large centre">Details</h1>
            <GraffitiDeletePage
              graffiti={graffiti}
              onCancel={cancelDelete}
              onDelete={deleteGraffiti}
            />
          </>
        )}
        {deleteSuccessful && (
          <>
            <h5 className="centre">
              Your Graffiti has successfully been deleted!
            </h5>
          </>
        )}
        {graffiti &&
          graffiti !== graffitiBeingEdited &&
          graffiti !== graffitiBeingDeleted &&
          !deleteSuccessful && (
            <>
              <h1 className="x-large centre">Details</h1>
              <GraffitiDetail
                graffiti={graffiti}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </>
          )}
      </>
    </div>
  );
}

export default GraffitiPage;
