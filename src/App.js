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

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <LoginPage setToken={setToken} />;
  } else {
    return (
      <Router>
        <header className="sticky">
          <NavLink to="/" className="rounded appLogo">
            <span className="logo">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5e949a92e17d55230cd1d44f/f98b1db5-13d8-41d7-a0e9-ae91bef9dc7b/Graffiti1x1.png"
                alt="logo"
                width="60"
                height="60"
              />
            </span>
          </NavLink>
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
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/graffitis" element={<GraffitisPage />} />
            <Route path="/graffitis/:id" element={<GraffitiPage />} />
            <Route path="/addgraffitis" element={<GraffitiAddPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
