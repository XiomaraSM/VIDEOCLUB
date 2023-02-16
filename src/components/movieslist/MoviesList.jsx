import React from 'react'
import IndividualMovie from '../individualmovie/IndividualMovie'
import './moviesList.css'
import AddMovies from '../addmovies/AddMovies';

const MoviesList = () => {
  return (
    <div>
      <h2>Lista de Peliculas</h2>
      <IndividualMovie />
    </div>
  );
};

export default MoviesList;
