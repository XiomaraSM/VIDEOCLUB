import React, { useState } from "react";
import "./editMovie.css";
import uniqid from "uniqid";
import axios from "axios";

const EditMovie = () => {

  const [title, setTitle] = useState(props.title);
  const [duration, setDuration] = useState(props.duration);
  const [genre, setGenre] = useState(props.genre);
  const [country, setCountry] = useState(props.country);
  const [language, setLanguage] = useState(props.language);
  const [year, setYear] = useState(props.year);
  const [critic, setCritic] = useState(props.critic);
  const [stars, setStars] = useState(props.stars);
  const [quantityReviews, setQuantityReviews] = useState(props.quantityReviews);
  const [actorActress, setActorActress] = useState(props.actorActress);
  const [sex, setSex] = useState(props.sex);
  const [character, setCharacter] = useState(props.character);
  const [director, setDirector] = useState(props.director);
  const [releaseDate, setReleaseDate] = useState(props.releaseDate);

  const handleEditMovie = () => {
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
    axios
      .put(`your-api-url/${props.id}`, movie)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

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
