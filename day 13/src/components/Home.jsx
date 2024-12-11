import React, { useState } from "react";
import RecipeCard from "./RecipeCard";

const Home = ({ fetchRecipes, recipes, loading }) => {
  const [ingredients, setIngredients] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (ingredients) {
      fetchRecipes(ingredients);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center">Recipe Finder</h1>
      <form onSubmit={handleSearch} className="my-6">
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients (e.g., chicken, tomato)"
          className="p-3 border rounded w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-3 mt-3 rounded w-full">
          Find Recipes
        </button>
      </form>

      {loading && <div className="text-center">Loading...</div>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
