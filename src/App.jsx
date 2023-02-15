import React from "react";
import "./App.css";
import MovieList from "./components/movieslist/MoviesList";
import AddMovie from "./components/addmovies/AddMovies";
import EditMovie from "./components/editmovie/EditMovie";
import DeleteMovie from "./components/deletemovie/DeleteMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <h1>VIDEOCLUB</h1>

      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-text" href="#">
            Video Club
          </a>
          <form className="d-flex mt-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar Pelicula"
            ></input>
            <button className="btn btn-success" type="submit">
              Buscar
            </button>
          </form>
          <a className="add-text" href="">Agregar</a>
          <button className="drop-btn"
          > +
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Dark offcanvas
              </h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider"></hr>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />} exact>
            {" "}
          </Route>
          <Route path="/agregarpelicula" element={<AddMovie />} exact>
            {" "}
          </Route>
          <Route path="/editarpelicula" element={<EditMovie />} exact>
            {" "}
          </Route>
          <Route path="/eliminarpelicula" element={<DeleteMovie />} exact>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
