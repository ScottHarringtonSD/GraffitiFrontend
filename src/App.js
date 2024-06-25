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
      <Router>
        <header className="sticky header-border">
          <div className="navlink-margin">
            <NavLink to="/" className="button rounded">
              <span className="icon-home"></span>
              Home
            </NavLink>
            <NavLink to="/graffitis" className="button rounded">
              Graffiti Index
            </NavLink>
            <NavLink to="/addgraffitis" className="button rounded">
              Add Graffiti
            </NavLink>
            <NavLink to="/searchGraffitis" className="button rounded">
              Search Graffiti
            </NavLink>
            <button
              to="/"
              className="button rounded btn-right"
              onClick={deleteCurrentToken}
            >
              Log Out
            </button>
          </div>
        </header>
        <div className="container">
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
