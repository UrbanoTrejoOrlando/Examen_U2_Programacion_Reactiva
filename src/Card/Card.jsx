import { useMovies } from "../Context/MovieContext";

export default function MovieCard({ movie }) {
  const { deleteMovie, toggleFavorite, setEditingMovie } = useMovies();

  return (
    <div className="bg-white shadow rounded p-4 mb-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-blue-700">{movie.title}</h3>
        <button onClick={() => toggleFavorite(movie.id)} className="text-yellow-400 text-xl">
          {movie.favorite ? "★" : "☆"}
        </button>
      </div>
      <p className="text-sm text-gray-600">{movie.description}</p>
      <p className="text-xs text-gray-400 mt-1">Género: {movie.genre}</p>
      <div className="mt-3 flex gap-3">
        <button onClick={() => setEditingMovie(movie)} className="text-green-600 hover:underline">Editar</button>
        <button onClick={() => deleteMovie(movie.id)} className="text-red-600 hover:underline">Eliminar</button>
      </div>
    </div>
  );
}