// Importaciones
import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState({ title: "", genre: "" });
  const [editingMovie, setEditingMovie] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("movies");
    if (stored) {
      setMovies(JSON.parse(stored));
    }
  }, []);

  // Funcion para almacenar las peliculas en el localStorage
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);
  // Agregar una nueva pelicula
  const addMovie = (movie) => {
    const newMovie = { ...movie, id: crypto.randomUUID(), favorite: false };
    setMovies(prev => [...prev, newMovie]);
  };
  // Eliminar un pelicula
  const deleteMovie = (id) => {
    setMovies(prev => prev.filter(movie => movie.id !== id));
  };
  // ACtulizar una pelicula
  const updateMovie = (updated) => {
    setMovies(prev =>
      prev.map(movie => (movie.id === updated.id ? { ...movie, ...updated } : movie))
    );
  };
  // Elegir la pelicula favorita
  const toggleFavorite = (id) => {
    setMovies(prev =>
      prev.map(movie =>
        movie.id === id ? { ...movie, favorite: !movie.favorite } : movie
      )
    );
  };
// Filtrado de las peliculas
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
    movie.genre.toLowerCase().includes(filter.genre.toLowerCase())
  );

  const favorites = movies.filter(m => m.favorite);

  return (
    <MovieContext.Provider
      value={{
        movies,
        addMovie,
        deleteMovie,
        updateMovie,
        toggleFavorite,
        filter,
        setFilter,
        editingMovie,
        setEditingMovie,
        filteredMovies,
        favorites,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMovies() {
  return useContext(MovieContext);
}