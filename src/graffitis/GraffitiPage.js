import React, { useEffect, useState } from "react";
import { graffitiAPI } from "./graffitiAPI";
import GraffitiDetail from "./GraffitiDetail";
import { useParams } from "react-router-dom";
import GraffitiForm from "./GraffitiForm";

function GraffitiPage(props) {
  const [loading, setLoading] = useState(false);
  const [graffiti, setGraffiti] = useState(null);
  const [error, setError] = useState(null);
  const params = useParams();
  const id = params.id;
  const [graffitiBeingEdited, setGraffitiBeingEdited] = useState({});

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

  return (
    <div>
      <>
        <h1 className="x-large centre">Details</h1>

        {loading && (
          <div className="center-page">
            <span className="spinner primary"></span>
            <p>Loading...</p>
          </div>
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
          <GraffitiForm
            graffiti={graffiti}
            onCancel={cancelEditing}
            onSave={saveGraffiti}
          />
        )}
        {graffiti && graffiti !== graffitiBeingEdited && (
          <GraffitiDetail graffiti={graffiti} onEdit={handleEdit} />
        )}
      </>
    </div>
  );
}

export default GraffitiPage;
