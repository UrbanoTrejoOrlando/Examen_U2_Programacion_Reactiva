import { useState, useEffect } from "react";
import { useMovies } from "../Context/MovieContext";

export default function Formulario() {
  const { addMovie, updateMovie, editingMovie, setEditingMovie } = useMovies();

  const [form, setForm] = useState({
    title: "",
    description: "",
    genre: "",
  });

  useEffect(() => {
    if (editingMovie) setForm(editingMovie);
  }, [editingMovie]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingMovie) {
      updateMovie(form);
      setEditingMovie(null);
    } else {
      addMovie(form);
    }
    setForm({ title: "", description: "", genre: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-md p-8 space-y-6 transition"
    >
      <h2 className="text-3xl font-bold text-center text-blue-600 tracking-tight">
        {editingMovie ? "Editar Película " : "Agregar Nueva Película"}
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Ej. Inception, Matrix..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Breve sinopsis o resumen..."
            rows={3}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
            required
          ></textarea>
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Género</label>
          <input
            name="genre"
            value={form.genre}
            onChange={handleChange}
            placeholder="Acción, Drama, Comedia, etc."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
        </div>
      </div>

      <div className="flex justify-between items-center pt-2">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
        >
          {editingMovie ? "Actualizar Película" : "Agregar Película"}
        </button>

        {editingMovie && (
          <button
            type="button"
            onClick={() => setEditingMovie(null)}
            className="text-red-500 font-medium hover:underline transition"
          >
            Cancelar edición
          </button>
        )}
      </div>
    </form>
  );
}
