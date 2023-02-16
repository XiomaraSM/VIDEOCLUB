import React from "react";
import "./individualMovie.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Peliculas = () => {
  const peliculas = [
    {
      id: "1",
      title: "Vertigo",
      year: "1958",
      time: "28",
      lang: "English",
      gender: "Mystery",
      country: "UK",
      reviewerName: "Righty Sock",
      rev_stars: "8.40",
      ratings: 263575,
      dt_rel: "24/08/1958",
      actorname: "James Stewart",
      aGender: "M",
      role: "John Scottie Ferguson",
      directorname: "Alfred Hitchcock",
    },
    {
      id: "1",
      title: "Vertigo",
      year: "1958",
      time: "28",
      lang: "English",
      gender: "Mystery",
      country: "UK",
      reviewerName: "Righty Sock",
      rev_stars: "8.40",
      ratings: 263575,
      dt_rel: "24/08/1958",
      actorname: "James Stewart",
      aGender: "M",
      role: "John Scottie Ferguson",
      directorname: "Alfred Hitchcock",
    },
    {
      id: "1",
      title: "Vertigo",
      year: "1958",
      time: "28",
      lang: "English",
      gender: "Mystery",
      country: "UK",
      reviewerName: "Righty Sock",
      rev_stars: "8.40",
      ratings: 263575,
      dt_rel: "24/08/1958",
      actorname: "James Stewart",
      aGender: "M",
      role: "John Scottie Ferguson",
      directorname: "Alfred Hitchcock",
    },
  ];

  return (
    <div className="container">
      <Table responsive-lg>
        <thead>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <th>Título</th>
            <th>Año</th>
            <th className="d-none d-md-table-cell">Duración</th>
            <th className="d-none d-md-table-cell">Idioma</th>
            <th className="d-none d-md-table-cell">Género</th>
            <th className="d-none d-md-table-cell">País</th>
            <th className="d-none d-md-table-cell">Reseña</th>
            <th className="d-none d-md-table-cell">Stars</th>
            <th className="d-none d-md-table-cell">Cantidad de Reseñas</th>
            <th className="d-none d-md-table-cell">Fecha de estreno</th>
            <th className="d-none d-md-table-cell">Actor</th>
            <th className="d-none d-md-table-cell">Genero</th>
            <th className="d-none d-md-table-cell">Personaje</th>
            <th className="d-none d-md-table-cell">Director</th>
          </tr>
        </thead>

        <tbody>
          {peliculas.map(
            (
              pelicula,
              index //busca la pelicula
            ) => (
              <tr key={index}>
                //trae la posicion de cualquier pelicula
                <td>
                  <input type="checkbox" />
                </td>
                <td>{pelicula.id}</td>
                <td>{pelicula.title}</td>
                <td>{pelicula.year}</td>
                <td className="d-none d-md-table-cell">{pelicula.time}</td>
                <td className="d-none d-md-table-cell">{pelicula.lang}</td>
                <td className="d-none d-md-table-cell">{pelicula.gender}</td>
                <td className="d-none d-md-table-cell">{pelicula.country}</td>
                <td className="d-none d-md-table-cell">
                  {pelicula.reviewerName}
                </td>
                <td className="d-none d-md-table-cell">{pelicula.rev_stars}</td>
                <td className="d-none d-md-table-cell">{pelicula.dt_rel}</td>
                <td className="d-none d-md-table-cell">{pelicula.actorname}</td>
                <td className="d-none d-md-table-cell">{pelicula.aGender}</td>
                <td className="d-none d-md-table-cell">{pelicula.role}</td>
                <td className="d-none d-md-table-cell">
                  {pelicula.directorname}
                </td>
                <Button>+</Button>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Peliculas;
