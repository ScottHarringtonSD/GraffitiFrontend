import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import GraffitiAddPage from "../graffitis/GraffitiAddPage";
import GraffitiSearchPage from "../graffitis/GraffitiSearchPage";

function HomePage() {
  return (
    <>
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <h5 className="centre x-large">
            Welcome to the Graffiti Database homepage! Please enjoy browsing
            entries!
          </h5>
        </div>
        <div className="col-sm-1"></div>
      </div>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-4">
          <NavLink to="/searchGraffitis">
            <div className="card card-home">
              {" "}
              <img
                className="rounded section section-home media"
                src="https://utfs.io/f/1695225f-413d-4801-b589-48b5e727f8e8-whmfox.png"
                alt="Card Name"
              />
              <section className="section dark section-index">
                <div>Search through the current entries in the database</div>
                <div>
                  <button className="button rounded">Browse &gt;&gt;</button>
                </div>
              </section>
            </div>
          </NavLink>
        </div>
        <div className="col-sm-4 align-items-center">
          <div className="align-items-center">
            <NavLink to="/addgraffitis">
              <div className="card card-home">
                <img
                  className="rounded section media section-home"
                  src="https://utfs.io/f/4ba53ccc-123a-4b84-9d5b-870708579f60-whmfow.png"
                  alt="Card "
                />
                <section className="section dark section-index">
                  Add more entries to the database
                  <button className="button rounded">
                    Get Started &gt;&gt;
                  </button>
                </section>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
      <div className="container">
        <Routes>
          <Route path="/addgraffitis" element={<GraffitiAddPage />} />
          <Route path="/searchgraffitis" element={<GraffitiSearchPage />} />
        </Routes>
      </div>
    </>
  );
}

export default HomePage;
