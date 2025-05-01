// Importa el hook personalizado useMovies desde el contexto MovieContext
import { useMovies } from "../Context/MovieContext";

// Componente funcional que muestra campos para filtrar películas por título o género
export default function MovieFilters() {
  // Extrae el estado actual del filtro y la función para actualizarlo desde el contexto
  const { filter, setFilter } = useMovies();

  // Maneja el cambio en los campos de entrada (input)
  const handleChange = e => {
    // Actualiza el filtro manteniendo los valores actuales y cambiando solo el campo modificado
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  return (
    // Contenedor estilizado para el formulario de filtros
    <div className="bg-white p-6 rounded-xl shadow-md border mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800"> Filtrar Películas</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col w-full">
          <label htmlFor="title" className="text-sm text-gray-600 mb-1">Título</label>
          <input
            id="title"
            name="title"
            value={filter.title}
            onChange={handleChange}
            placeholder="Buscar por título..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="genre" className="text-sm text-gray-600 mb-1">Género</label>
          <input
            id="genre"
            name="genre"
            value={filter.genre}
            onChange={handleChange}
            placeholder="Buscar por género..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
      </div>
    </div>
  );
}
