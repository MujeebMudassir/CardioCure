import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="navbar-container">
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-light bg-light"
        style={{ boxShadow: "2px 2px 5px 2px black" }}
      >
        <div className="container-fluid center ">
          <a
            className="navbar-brand"
            href="#"
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              letterSpacing: "1px",
            }}
          >
            <Link to={"/"} style={{ color: "black", textDecoration: "none" }}>
              Cardio
              <span
                style={{
                  backgroundColor: "rgb(0, 0, 28)",
                  color: "white",
                  padding: "4px 15px",
                  borderRadius: "1rem",
                }}
              >
                Cure.
              </span>
            </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
              {/* <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
