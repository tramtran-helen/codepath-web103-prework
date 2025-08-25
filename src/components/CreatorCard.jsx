import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../client";

function CreatorCard({ creator }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const { error } = await supabase.from("creators").delete().eq("id", creator.id);
    if (error) console.error(error);
    else navigate(0); // refresh page
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 m-4 w-64 text-center flex flex-col items-center hover:scale-105 transition-transform">
      {creator.imageURL && (
        <img
          src={creator.imageURL}
          alt={creator.name}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
      )}
      <h2 className="text-xl font-semibold mb-2">{creator.name}</h2>
      <p className="text-gray-600 mb-4">{creator.description}</p>

      <div className="flex gap-3">
        <a
          href={creator.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          🌐 Visit
        </a>
        <Link
          to={`/creator/${creator.id}`}
          className="text-green-500 hover:underline"
        >
          🔍 View
        </Link>
        <Link
          to={`/edit/${creator.id}`}
          className="text-yellow-500 hover:underline"
        >
          ✏️ Edit
        </Link>
        <button
          onClick={handleDelete}
          className="text-red-500 hover:underline"
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
}

export default CreatorCard;