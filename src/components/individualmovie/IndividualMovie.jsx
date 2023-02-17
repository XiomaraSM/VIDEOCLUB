import React, { useState, useEffect } from "react";
import "./individualMovie.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "bootstrap-icons/font/bootstrap-icons.css";

const Peliculas = () => {
  const [dataMovie, setDataMovie] = useState([]); //conectando backend a frontend
  useEffect(() => {
    //trae la data

    const DataGet = async () => {
      const movieData = await fetch(
        "https://backendcrudmanu.onrender.com/movie/"
      );
      const response = await movieData.json();
      setDataMovie(response); //este trae la base de datos
    };

    DataGet();
  }, []);
  console.log(dataMovie);
  const peliculas = [];

  return (
    <div className="container">
      <Table responsive-lg>
        <thead>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <th>Id</th>
            <th>Título</th>
            <th>Año</th>
            <th>Duración</th>
            <th className="d-none d-md-table-cell">Idioma</th>
            <th className="d-none d-md-table-cell">Género</th>
            <th className="d-none d-md-table-cell">País</th>
            <th className="d-none d-md-table-cell">Critico</th>
            <th className="d-none d-md-table-cell">Stars</th>
            <th className="d-none d-md-table-cell">Calificaciones</th>
            <th className="d-none d-md-table-cell">Fecha de estreno</th>
            <th className="d-none d-md-table-cell">Actor</th>
            <th className="d-none d-md-table-cell">Genero</th>
            <th className="d-none d-md-table-cell">Personaje</th>
            <th className="d-none d-md-table-cell">Director</th>
          </tr>
        </thead>

        <tbody>
          {dataMovie.map((pelicula, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{pelicula.id}</td>
              <td>{pelicula.title}</td>
              <td>{pelicula.year}</td>
              <td>{pelicula.time}</td>
              <td className="d-none d-md-table-cell">{pelicula.lang}</td>
              <td className="d-none d-md-table-cell">{pelicula.gender}</td>
              <td className="d-none d-md-table-cell">{pelicula.country}</td>
              <td className="d-none d-md-table-cell">
                {pelicula.reviewername}
              </td>
              <td className="d-none d-md-table-cell">{pelicula.rev_stars}</td>
              <td className="d-none d-md-table-cell">{pelicula.ratings}</td>
              <td className="d-none d-md-table-cell">{pelicula.dt_rel}</td>
              <td className="d-none d-md-table-cell">{pelicula.actorname}</td>
              <td className="d-none d-md-table-cell">{pelicula.aGender}</td>
              <td className="d-none d-md-table-cell">{pelicula.role}</td>
              <td className="d-none d-md-table-cell">
                {pelicula.directorname}
              </td>
              <td>
                <div class="btn-group dropstart">
                  <button
                    type="button"
                    class="btn btn-secondary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropstart
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <button>
                        <i class="bi bi-eye"></i>
                      </button>
                    </li>
                    <li>
                      <button id="edit-button">
                        <i class="bi bi-pencil-square"></i>
                      </button>
                    </li>
                    <li>
                      <button>
                        <i class="bi bi-trash"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Peliculas;
