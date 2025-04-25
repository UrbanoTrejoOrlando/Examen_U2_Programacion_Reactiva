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
      className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-5 border border-gray-200"
    >
      <h2 className="text-2xl font-bold text-center text-indigo-600">
        {editingMovie ? "Editar Película" : "Agregar Película"}
      </h2>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Título
        </label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Título de la película"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          required
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Descripción
        </label>
        <input
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Descripción breve"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          required
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Género
        </label>
        <input
          name="genre"
          value={form.genre}
          onChange={handleChange}
          placeholder="Ej. Drama, Comedia, etc."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          required
        />
      </div>

      <div className="flex justify-between items-center pt-2">
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-semibold transition"
        >
          {editingMovie ? "Actualizar" : "Agregar"}
        </button>

        {editingMovie && (
          <button
            type="button"
            onClick={() => setEditingMovie(null)}
            className="text-red-500 hover:underline transition"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}
