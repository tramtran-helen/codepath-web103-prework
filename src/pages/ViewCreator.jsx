import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../client";

function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase.from("creators").select().eq("id", id).single();
      if (error) console.error(error);
      else setCreator(data);
    };
    fetchCreator();
  }, [id]);

  if (!creator) return <h2 className="text-center mt-10">Loading...</h2>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md text-center">
      <h1 className="text-3xl font-bold mb-4">{creator.name}</h1>
      {creator.imageURL && (
        <img
          src={creator.imageURL}
          alt={creator.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
      )}
      <p className="text-gray-700 mb-4">{creator.description}</p>
      <a
        href={creator.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        🌐 Visit Website
      </a>
      <div className="mt-6">
        <Link to="/" className="text-gray-500 hover:underline">
          ⬅ Back to All Creators
        </Link>
      </div>
    </div>
  );
}

export default ViewCreator;
