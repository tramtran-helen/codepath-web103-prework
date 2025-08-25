import React, { useEffect, useState } from "react";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";
import { Link } from "react-router-dom";

function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase.from("creators").select();
      if (error) console.error(error);
      else setCreators(data);
    };
    fetchCreators();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-center items-center mb-6">
        <Link
          to="/add"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          ➕ Add Creator
        </Link>
      </div>
      {creators.length > 0 ? (
        <div className="flex flex-wrap justify-center">
          {creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No creators yet. Add one!</p>
      )}
    </div>
  );
}

export default ShowCreators;
