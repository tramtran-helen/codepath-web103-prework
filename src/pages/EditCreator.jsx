import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../client";

function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase.from("creators").select().eq("id", id).single();
      if (error) console.error(error);
      else setCreator(data);
    };
    fetchCreator();
  }, [id]);

  if (!creator) return <p className="text-center mt-10">Loading...</p>;

  const handleChange = (e) => setCreator({ ...creator, [e.target.name]: e.target.value });

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("creators").update(creator).eq("id", id);
    if (error) console.error(error);
    else navigate("/");
  };

  const handleDelete = async () => {
    const { error } = await supabase.from("creators").delete().eq("id", id);
    if (error) console.error(error);
    else navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">✏️ Edit Creator</h2>
      <form className="flex flex-col gap-4" onSubmit={handleUpdate}>
        <input
          type="text"
          name="name"
          value={creator.name}
          onChange={handleChange}
          className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="url"
          name="url"
          value={creator.url}
          onChange={handleChange}
          className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          name="description"
          value={creator.description}
          onChange={handleChange}
          className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="url"
          name="imageURL"
          value={creator.imageURL}
          onChange={handleChange}
          className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
        />
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition-colors flex-1"
          >
            💾 Update
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition-colors flex-1"
          >
            🗑 Delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditCreator;
