import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RecipeDetails from "./components/RecipeDetails";
import MealPlanner from "./components/MealPlanner";
import ShoppingList from "./components/ShoppingList";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetchRecipes function
  const fetchRecipes = async (ingredients) => {
    setLoading(true);
    try {
      const result = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodeURIComponent(ingredients)}&number=10&apiKey=${apiKey}`
      );
      console.log(result.data); // Log the successful response
      setRecipes(result.data);
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
        console.error("Error status:", error.response.status);
      } else {
        console.error("Error message:", error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  

  // Example of calling fetchRecipes when the component mounts or ingredients change
  useEffect(() => {
    const ingredients = "tomato,cheese"; // Example ingredients
    fetchRecipes(ingredients);
  }, []); // Empty array means it runs only on component mount

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Home fetchRecipes={fetchRecipes} recipes={recipes} loading={loading} />}
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/mealplanner" element={<MealPlanner />} />
          <Route path="/shoppinglist" element={<ShoppingList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
