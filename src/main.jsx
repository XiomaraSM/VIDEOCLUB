import React from "react";
import ReactDOM from "react-dom/client";
import AddMovies from "./components/addMovies/AddMovies";
import App from "./App";
import DeleteMovie from "./components/deleteMovie/DeleteMovie";
import EditMovie from "./components/editMovie/EditMovie";
import "./index.css";
import IndividualMovie from "./components/individualMovie/IndividualMovie";
import MoviesList from "./components/Movieslist/MoviesList";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesList />} exact />
        <Route path="/peliculaindividual" element={<IndividualMovie />} exact />
        <Route path="/agregarpelicula" element={<AddMovies />} />
        <Route path="/editarpelicula" element={<EditMovie />} />
        <Route path="/eliminarpelicula" element={<DeleteMovie />} />
      </Routes>
    </BrowserRouter>   

  </React.StrictMode>
);
