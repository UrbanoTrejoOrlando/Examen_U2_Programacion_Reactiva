import { useMovies } from "../Context/MovieContext";

export default function MovieFilters() {
  const { filter, setFilter } = useMovies();

  const handleChange = e => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  return (
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
