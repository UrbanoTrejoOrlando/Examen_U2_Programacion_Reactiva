// Importa el hook personalizado useMovies desde el contexto MovieContext
import { useMovies } from "../Context/MovieContext";

// Componente funcional MovieCard que recibe una película (movie) como prop
export default function MovieCard({ movie }) {
    // Extrae las funciones del contexto: eliminar, marcar como favorito, y editar
  const { deleteMovie, toggleFavorite, setEditingMovie } = useMovies();

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-4 border border-gray-200 transition hover:shadow-lg">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold text-blue-700">{movie.title}</h3>
        <button
          onClick={() => toggleFavorite(movie.id)}
          className="text-yellow-400 text-2xl leading-none hover:scale-110 transition-transform"
          title="Marcar como favorito"
        >
          {movie.favorite ? "★" : "☆"}
        </button>
      </div>
      <p className="text-gray-700 mb-2">{movie.description}</p>
      <span className="text-sm text-gray-500 italic">Género: {movie.genre}</span>
      <div className="mt-4 flex gap-4">
        <button
          onClick={() => setEditingMovie(movie)}
          className="text-white bg-green-500 hover:bg-green-600 px-4 py-1 rounded-md text-sm transition"
        >
          Editar
        </button>
        <button
          onClick={() => deleteMovie(movie.id)}
          className="text-white bg-red-500 hover:bg-red-600 px-4 py-1 rounded-md text-sm transition"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
