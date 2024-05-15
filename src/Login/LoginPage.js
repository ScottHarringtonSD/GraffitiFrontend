import React from "react";
import "./Login.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { loginAPI } from "./loginAPI";

export default function LoginPage({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginAPI.login({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button className="bordered medium" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};
