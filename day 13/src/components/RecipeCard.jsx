import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{recipe.title}</h3>
        <p className="text-sm text-gray-600">{recipe.summary}</p>
        <Link
          to={`/recipe/${recipe.id}`}
          className="text-blue-500 hover:underline mt-4 inline-block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
