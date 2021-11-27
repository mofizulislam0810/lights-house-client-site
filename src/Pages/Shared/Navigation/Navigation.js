import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <nav className="navbar bg-danger bg-gradient navbar-expand-lg fixed-top navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand ms-5 text-white" to="/home">
            <b>Light's House</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 me-5 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/exploreAllProduct">
                  Explore Lights
                </Link>
              </li>
              {user?.email ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/dashboard">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-outline-dark text-white">
                      {user.displayName}
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-outline-dark text-white"
                      onClick={logout}
                    >
                      Log Out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
