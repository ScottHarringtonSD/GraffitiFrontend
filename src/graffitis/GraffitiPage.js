import React, { useEffect, useState } from "react";
import { graffitiAPI } from "./graffitiAPI";
import GraffitiDetail from "./GraffitiDetail";
import { useParams } from "react-router-dom";

function GraffitiPage(props) {
  const [loading, setLoading] = useState(false);
  const [graffiti, setGraffiti] = useState(null);
  const [error, setError] = useState(null);
  const params = useParams();
  const id = params.id;

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

  return (
    <div>
      <>
        <h1>Graffiti Detail</h1>

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

        {graffiti && <GraffitiDetail graffiti={graffiti} />}
      </>
    </div>
  );
}

export default GraffitiPage;
