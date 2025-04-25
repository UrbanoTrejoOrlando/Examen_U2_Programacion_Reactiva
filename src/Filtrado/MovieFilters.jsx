import { useMovies } from "../Context/MovieContext";

export default function MovieFilters() {
  const { filter, setFilter } = useMovies();

  const handleChange = e => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-100 p-4 rounded mb-4">
      <h2 className="font-medium mb-2">Filtros</h2>
      <div className="flex flex-col sm:flex-row gap-2">
        <input name="title" value={filter.title} onChange={handleChange} placeholder="Buscar por título"
          className="flex-1 border px-3 py-2 rounded" />
        <input name="genre" value={filter.genre} onChange={handleChange} placeholder="Buscar por género"
          className="flex-1 border px-3 py-2 rounded" />
      </div>
    </div>
  );
}