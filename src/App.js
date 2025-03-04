import "./App.css";
import GraffitisPage from "./graffitis/GraffitisPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import HomePage from "./home/HomePage";
import GraffitiPage from "./graffitis/GraffitiPage";
import GraffitiAddPage from "./graffitis/GraffitiAddPage";
import LoginPage from "./Login/LoginPage";
import useToken from "./useToken";
import GraffitiSearchPage from "./graffitis/GraffitiSearchPage";

function App() {
  const { token, setToken } = useToken();

  async function deleteCurrentToken() {
    await sessionStorage.removeItem("token");
    console.log("deleted");
    window.location.reload();
  }

  if (!token) {
    return <LoginPage setToken={setToken} />;
  } else {
    return (
      <Router className="roboto-slab-text">
        <header className="sticky header-border roboto-slab-text">
          <div className="navlink-margin roboto-slab-text">
            <NavLink to="/" className="button rounded-lg roboto-slab-text">
              <span className="icon-home roboto-slab-text rounded-lg"></span>
              Home
            </NavLink>
            <NavLink to="/graffitis" className="button rounded-lg roboto-slab-text">
              Graffiti Index
            </NavLink>
            <NavLink to="/addgraffitis" className="button rounded-md roboto-slab-text">
              Add Graffiti
            </NavLink>
            <NavLink to="/searchGraffitis" className="button rounded-md roboto-slab-text">
              Search Graffiti
            </NavLink>
            <button
              to="/"
              className="button rounded-md btn-right roboto-slab-text"
              onClick={deleteCurrentToken}
            >
              Log Out
            </button>
          </div>
        </header>
        <div className="container roboto-slab-text">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/graffitis" element={<GraffitisPage />} />
            <Route path="/graffitis/:id" element={<GraffitiPage />} />
            <Route path="/addgraffitis" element={<GraffitiAddPage />} />
            <Route path="/searchgraffitis" element={<GraffitiSearchPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
