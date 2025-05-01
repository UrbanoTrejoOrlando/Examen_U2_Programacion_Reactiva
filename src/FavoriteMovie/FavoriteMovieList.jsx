// Importa el hook personalizado useMovies desde el contexto MovieContext
import { useMovies } from "../Context/MovieContext";

// Importa el componente MovieCard para reutilizarlo
import MovieCard from "../Card/Card";

export default function FavoriteList() {
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