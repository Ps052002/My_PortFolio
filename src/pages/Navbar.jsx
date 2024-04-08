import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Portfolio
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active"  to="/Skills">
                  Skills
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/Projects">
                  Projects
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/Contact">
                  ContactUs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
