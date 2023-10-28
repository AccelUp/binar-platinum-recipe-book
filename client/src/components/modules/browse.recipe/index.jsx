import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BrowseRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/v1/recipebook/recipes"
        );
        if (response.ok) {
          const data = await response.json();
          setRecipes(data.data.recipe);
        } else {
          console.error("Failed to fetch recipe data.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchRecipes();
  }, []);

  const handleSearchInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  );

  const renderRecipe = () => {
    if (filteredRecipes.length === 0) {
      return <p>No matching recipes found.</p>;
    }

    return filteredRecipes.map((recipe) => (
      <RecipeCard key={recipe.id} recipe={recipe} />
    ));
  };

  return (
    <div className="bg-blackk pt-20 text-primary font-Poppins">
      <h2 className="text-5xl font-semibold text-center pt-10 ">
        Browse All recipe
      </h2>
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="relative rounded-lg mb-8 w-64 mt-8">
          <input
            type="text"
            placeholder="Search for recipes"
            className="w-full py-3 px-4 bg-gray-100 rounded-full focus:outline-none focus:ring focus:ring-primary text-gray-800"
            value={query}
            onChange={handleSearchInputChange}
          />
        </div>
        <div className="flex flex-wrap -mx-2">{renderRecipe()}</div>
      </div>
    </div>
  );
};

const RecipeCard = ({ recipe }) => (
  <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
    <Link to={`/recipes/${recipe.id}`}>
      <div className="flex flex-col bg-primary rounded-md">
        <div className="block relative rounded-md overflow-hidden bg-white">
          <img
            alt={recipe.title}
            className="object-cover w-full h-48"
            src={import.meta.env.VITE_IMAGE_FILE + recipe.img_filename}
          />
        </div>
        <div className="mt-4 pb-3 pl-3">
          <h3 className="text-slate-500 text-xs tracking-widest uppercase title-font mb-1">
            {recipe.category}
          </h3>
          <Link to={`/recipes/${recipe.id}`}>
            <h2 className="text-slate-900 text-lg font-bold">{recipe.title}</h2>
          </Link>
        </div>
      </div>
    </Link>
  </div>
);

export default BrowseRecipe;
