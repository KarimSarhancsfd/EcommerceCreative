import React from "react";
import "../style/style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons"; // Correct import

const Userprofile = () => {
  return (
    <div id="user-registration-login-body">
      <form
        className="form"
        onSubmit={(e) => e.preventDefault()}
        autoComplete="off"
      >
        <div className="login-container">
          <div className="login-box">
            <img
              src={
                new URL(
                  "../img/Her Beauty Logo - Original with Transparent Background  Without Name and Slogan- 54x59  - .png",
                  import.meta.url
                ).href
              }
              alt="Company Logo"
              className="company-logo"
            />
            <div className="form-inner">
              <h2>Login</h2>
              <div className="input-wrapper">
                <div className="input-group">
                  <FontAwesomeIcon icon={faUser} />
                  <input
                    style={{ fontSize: "medium" }}
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your username"
                    required
                  />
                </div>
              </div>

              <div className="input-wrapper">
                <div className="input-group">
                  <FontAwesomeIcon icon={faLock} />
                  <input
                    style={{ fontSize: "medium" }}
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <div className="input-wrapper">
                <div className="input-group">
                  <button
                    id="login"
                    style={{ fontSize: "medium" }}
                    className="form-control normal"
                  >
                    Login
                  </button>
                </div>
              </div>

              <Link
                to="/registration"
                className="btn btn-warning btn-block mb-3 normal"
                style={{ textDecoration: "none", fontSize: "smaller" }}
              >
                Don't have an account? Register here.
              </Link>

              <Link
                to="/forgotpassword"
                className="btn btn-wa mb-3"
                style={{ textDecoration: "none" }}
              >
                Forgot password?
              </Link>
            </div>

            <div>
              <button
                id="googleLogin"
                className="normal"
                title="Login with Google"
              >
                <FontAwesomeIcon icon={faGoogle} />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Userprofile;
