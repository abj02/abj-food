import React from "react";

export default function Footer() {
  return (
    <>
      <footer
        className="d-flex flex-wrap justify-content-between align-items-center py-1 border-top fixed-bottom"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <ul className="nav col-md-4 mx-5 px-4 fw-bold">
          <li className="nav-item px-3">
            <a href="/" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item px-2">
            <a href="/" className="nav-link px-2 text-muted">
              Features
            </a>
          </li>
          <li className="nav-item px-2">
            <a href="/" className="nav-link px-2 text-muted">
              Pricing
            </a>
          </li>
          <li className="nav-item px-2">
            <a href="/" className="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>
          <li className="nav-item px-2">
            <a href="/" className="nav-link px-2 text-muted">
              About
            </a>
          </li>
        </ul>
        <p className="col-md-4 mb-0 text-muted">
          <b>&copy; 2022 ABJ-Food & Restaurant , Inc</b>
        </p>
      </footer>
    </>
  );
}
