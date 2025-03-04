import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import GraffitiAddPage from "../graffitis/GraffitiAddPage";
import GraffitiSearchPage from "../graffitis/GraffitiSearchPage";

function HomePage() {
  return (
    <div className="roboto-slab-text">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <h5 className="centre x-large roboto-slab-text">
            Welcome to the Graffiti Database homepage! Please enjoy browsing
            entries!
          </h5>
        </div>
        <div className="col-sm-1"></div>
      </div>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-4 ">
          <NavLink to="/searchGraffitis">
            <div className="card card-home rounded-lg">
              {" "}
              <img
                className="rounded section section-home media"
                src="https://utfs.io/f/b5838d6e-1dc0-4e67-a19b-6c9c1c88e6db-whmfp0.png"
                alt="Card Name"
              />
              <section className="section dark section-index">
                <div className="roboto-slab-text">Search through the current entries in the database</div>
                <div>
                  <button className="button rounded roboto-slab-text">Browse &gt;&gt;</button>
                </div>
              </section>
            </div>
          </NavLink>
        </div>
        <div className="col-sm-4 align-items-center">
          <div className="align-items-center">
            <NavLink to="/addgraffitis">
              <div className="card card-home rounded-lg">
                <img
                  className="rounded section media section-home"
                  src="https://utfs.io/f/3d53ad8c-4595-404d-82f2-dff3b86a4553-gwwud3.11.28.png"
                  alt="Card "
                />
                <section className="section dark section-index roboto-slab-text">
                  Add more entries to the database
                  <button className="button rounded roboto-slab-text">
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
    </div>
  );
}

export default HomePage;
