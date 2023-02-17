import React from "react";
import "./App.css";
import MovieList from "./components/movieslist/MoviesList";
import AddMovie from "./components/addmovies/AddMovies";
import EditMovie from "./components/editmovie/EditMovie";
import DeleteMovie from "./components/deletemovie/DeleteMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //importa tres componentes específicos de React Router, que son necesarios para definir la navegación y las rutas en una aplicación de React: BrowserRouter es un componente de React que se utiliza para envolver toda la aplicación y que permite que los componentes de React Router tengan acceso a la URL actual de la aplicación. Routes es un componente de React que se utiliza para definir las rutas en la aplicación. Route es un componente de React que se utiliza para definir una ruta específica en la aplicación. Se usa junto con el componente Routes para renderizar diferentes componentes en función de la URL actual. En conjunto, estos tres componentes son la base de la navegación de React Router en una aplicación de React. Con ellos, se puede definir cómo se deben renderizar los componentes en función de la URL actual de la aplicación.
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
