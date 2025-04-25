import React from 'react'
import { MovieProvider } from "./Context/MovieContext";
import Formulario from "./Formulario/Formulario";
import MovieFilters from "./Filtrado/MovieFilters";
import FavoriteList from "./FavoriteMovie/FavoriteMovieList";
import MovieList from "./Listas/MovieList"



const App = () => {
  return (
    <MovieProvider>
    <div className="max-w-2xl mx-auto p-6">
    <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Lista Peliculas</h1>
    <Formulario></Formulario>
    <MovieFilters></MovieFilters>
    <FavoriteList></FavoriteList>
    <MovieList></MovieList>

    </div>
    </MovieProvider>
  )
}
export default App
