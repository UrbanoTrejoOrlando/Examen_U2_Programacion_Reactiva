// Importa el hook personalizado useMovies desde el contexto MovieContext
import { useMovies } from "../Context/MovieContext";

// Importa el componente MovieCard para reutilizarlo
import MovieCard from "../Card/Card";

// Componente funcional FavoriteList que muestra las películas marcadas como favoritas
export default function FavoriteList() {
    // Extrae solo el arreglo de películas favoritas desde el contexto
  const { favorites } = useMovies();

  if (favorites.length === 0) return null;

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2 text-yellow-600">Favoritas</h2>
      {favorites.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}