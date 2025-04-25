import { useState, useEffect } from "react";
import { useMovies } from "../Context/MovieContext";

export default function Formulario() {
  const { addMovie, updateMovie, editingMovie, setEditingMovie } = useMovies();
  const [form, setForm] = useState({ title: "", description: "", genre: "" });

  useEffect(() => {
    if (editingMovie) setForm(editingMovie);
  }, [editingMovie]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
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
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-4 py-4 mb-6">
      <h2 className="text-xl font-semibold mb-4">
        {editingMovie ? "Editar Película" : "Agregar Película"}
      </h2>
      
      <input name="title" value={form.title} 
        onChange={handleChange} placeholder="Título"
        className="w-full border rounded px-3 py-2 mb-3" required 
      />
      
      <input name="description" value={form.description} 
        onChange={handleChange} placeholder="Descripción"
        className="w-full border rounded px-3 py-2 mb-3" required
      />
      
      <input name="genre" value={form.genre} 
        onChange={handleChange} placeholder="Género"
        className="w-full border rounded px-3 py-2 mb-3" 
        required 
      />
      
      <div className="flex justify-between">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {editingMovie ? "Actualizar" : "Agregar"}
        </button>
        {editingMovie && (
          <button type="button" onClick={() => setEditingMovie(null)} className="text-red-500 underline">
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}