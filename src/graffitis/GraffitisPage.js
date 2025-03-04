import React from "react";
import GraffitiList from "./GraffitiList";
import { useState, useEffect } from "react";
import { graffitiAPI } from "./graffitiAPI";
import { Graffiti } from "./Graffiti";

function GraffitisPage() {
  const [graffitis, setGraffitis] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const handleMoreClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  useEffect(() => {
    async function loadGraffitis() {
      setLoading(true);
      try {
        const data = await graffitiAPI.get(currentPage);
        setError(null);
        if (currentPage === 1) {
          setGraffitis(data);
        } else {
          if (graffitis[0]._id !== data[0]._id) {
            setGraffitis((graffitis) => [...graffitis, ...data]);
          } else {
            setError("There are no more to load!");
          }
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    loadGraffitis(); // eslint-disable-next-line
  }, [currentPage]);

  const saveGraffiti = (graffiti) => {
    graffitiAPI
      .patch(graffiti)
      .then((updatedGraffiti) => {
        let updatedGraffitis = graffitis.map((p) => {
          return p._id === graffiti._id ? new Graffiti(updatedGraffiti) : p;
        });

        setGraffitis(updatedGraffitis);
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  return (
    <>
      <fieldset className="field_set rounded-lg">
        <legend className="x-large centre roboto-slab-text">Graffiti Index</legend>
        {error && (
          <div className="row">
            <div className="card large error">
              <section>
                <p>
                  <span className="icon-alert inverse "></span>
                  {error}
                </p>
              </section>
            </div>
          </div>
        )}
        <GraffitiList graffitis={graffitis} onSave={saveGraffiti} />
        {!loading && !error && (
          <div className="row">
            <div className="col-sm-12">
              <div className="button-group fluid">
                <button className="button default roboto-slab-text" onClick={handleMoreClick}>
                  More...
                </button>
              </div>
            </div>
          </div>
        )}

        {loading && (
          <div className="center-page">
            <span className="spinner primary"></span>
            <p className="roboto-slab-text">Loading...</p>
          </div>
        )}
      </fieldset>
    </>
  );
}

export default GraffitisPage;
