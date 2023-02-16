import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./navBar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand videoText">Video Club</a>
          <form className="d-flex col-sm-6 col-md-4">
            <input
              className="form-control me-2 flex-grow-1 searchF"
              type="search"
              placeholder="Buscar Pelicula"
              aria-label="Search"
            />
            <button className="btn btn-outline-success btnSearch" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
