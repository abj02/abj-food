import React from "react";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fw-bold fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand mx-4" href="/">
            <img src="./img/logo.png" alt="" />
            <b>ABJ-F&R</b>
          </a>
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
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul
              className="navbar-nav ms-auto mb-2 mb-lg-0 px-2"
              style={{ width: "40%" }}
            >
              <li className="nav-item ml">
                <a className="nav-link active " aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Login/SignUp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
