import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";

function AddCreator() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("creators").insert([formData]);
    if (error) console.error(error);
    else navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">✨ Add a New Creator</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Creator Name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="url"
          name="url"
          placeholder="Website URL"
          value={formData.url}
          onChange={handleChange}
          className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="url"
          name="imageURL"
          placeholder="Image URL"
          value={formData.imageURL}
          onChange={handleChange}
          className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          ✨ Add Creator
        </button>
      </form>
    </div>
  );
}

export default AddCreator;
