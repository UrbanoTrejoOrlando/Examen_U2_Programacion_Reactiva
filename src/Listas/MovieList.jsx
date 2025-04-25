import { useMovies } from "../Context/MovieContext";
import MovieCard from "../Card/Card";

export default function MovieList() {
  const { filteredMovies } = useMovies();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Películas</h2>
      {filteredMovies.length === 0 ? (
        <p className="text-gray-500">No hay películas disponibles.</p>
      ) : (
        filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      )}
    </div>
  );
}