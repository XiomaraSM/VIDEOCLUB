import React, { useState } from "react";
import "./editMovie.css";
import uniqid from "uniqid";
import axios from "axios";

const EditMovie = () => {
  //hooks
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [genre, setGenre] = useState("");
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");
  const [year, setYear] = useState("");
  const [critic, setCritic] = useState("");
  const [stars, setStars] = useState("");
  const [quantityReviews, setQuantityReviews] = useState("");
  const [actorActress, setActorActress] = useState("");
  const [sex, setSex] = useState("");
  const [character, setCharacter] = useState("");
  const [director, setDirector] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const handleAddMovie = () => {
    //agregar esto a la base de datos
    const movie = {
      //agregar uniqid para crear id automatico
      title,
      duration,
      genre,
      country,
      language,
      year,
      critic,
      stars,
      quantityReviews,
      actorActress,
      sex,
      character,
      director,
      releaseDate,
    };
    //agregar console log, api y res /modificar package.json
  };

  return (
    <div>
      <h2>editar pelicula</h2>
      <div className="tabler-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                <h2 className="tituloEdit">Editar pelicula</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <label htmlFor="">Título</label>
                <br />
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </th>
              <th scope="row">
                <label htmlFor="">Duración</label>
                <br />
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </th>
              <th scope="row">
                <label htmlFor="">Género</label>
                <br />
                <input
                  type="text"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                />
              </th>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="">País</label>
                <br />
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </th>
              <th scope="row">
                <label htmlFor="">Idioma</label>
                <br />
                <input
                  type="text"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                />
              </th>
              <th scope="row">
                <label htmlFor="">Año</label>
                <br />
                <input
                  type="text"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </th>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="">Crítico</label>
                <br />
                <input
                  type="text"
                  value={critic}
                  onChange={(e) => setCritic(e.target.value)}
                />
              </th>
              <th scope="row">
                <label htmlFor="">Stars</label>
                <br />
                <input
                  type="text"
                  value={stars}
                  onChange={(e) => setStars(e.target.value)}
                />
              </th>
              <th scope="row">
                <label htmlFor=""> Cantidad de reseñas</label>
                <br />
                <input
                  type="text"
                  value={quantityReviews}
                  onChange={(e) => setQuantityReviews(e.target.value)}
                />
              </th>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="">Actor/Actriz</label>
                <br />
                <input
                  type="text"
                  value={actorActress}
                  onChange={(e) => setActorActress(e.target.value)}
                />
              </th>
              <th scope="row">
                <label htmlFor="">Género</label> <br />
                <input
                  type="text"
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                />
              </th>
              <th scope="row">
                <label htmlFor="">Personaje</label>
                <br />
                <input
                  type="text"
                  value={character}
                  onChange={(e) => setCharacter(e.target.value)}
                />
              </th>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="">Director</label>
                <br />
                <input
                  type="text"
                  value={director}
                  onChange={(e) => setDirector(e.target.value)}
                />
              </th>
              <th scope="row">
                <label htmlFor="">Fecha de estreno</label>
                <br />
                <input
                  type="text"
                  value={releaseDate}
                  onChange={(e) => setReleaseDate(e.target.value)}
                />
              </th>
            </tr>
            <tr>
  <th scope="row">
    <button type="button" className="btn btn-group-sm">
      Editar
    </button>
    <button type="button" className="btn btn-cancel">
      Cancelar
    </button>
  </th>
</tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditMovie;
