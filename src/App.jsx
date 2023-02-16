import React from "react";
import "./App.css";
import MovieList from "./components/movieslist/MoviesList";
import AddMovie from "./components/addmovies/AddMovies";
import EditMovie from "./components/editmovie/EditMovie";
import DeleteMovie from "./components/deletemovie/DeleteMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";


const App = () => {
  return (
    <div className="App">

      <Navbar />

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
