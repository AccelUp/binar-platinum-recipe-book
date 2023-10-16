import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PopularRecipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/v1/recipebook/recipes?limit=6"
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

  const renderRecipe = () => {
    if (!Array.isArray(recipes) || recipes.length === 0) {
      return <p>Loading recipes...</p>;
    }

    return recipes.slice(0, 8).map((recipe) => (
      <div
        key={recipe.id.toString()}
        className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
      >
        <Link to={`/recipes/${recipe.id}`}>
          <div className="flex flex-col bg-yellow-200 rounded-md">
            <div className="block relative rounded-md overflow-hidden bg-white">
              <img
                alt={recipe.title}
                className="object-cover w-full h-48"
                src={recipe.img_filename}
              />
            </div>
            <div className="mt-4 pb-3 pl-3">
              <h3 className="text-slate-500 text-xs tracking-widest uppercase title-font mb-1">
                {recipe.category}
              </h3>
              <a href={`/products/${recipe.id}`}>
                <h2 className="text-slate-900 text-lg font-bold">
                  {recipe.title}
                </h2>
              </a>
            </div>
            {/* <p className="mt-1">{recipe.caption}</p> */}
          </div>
        </Link>
      </div>
    ));
  };

  return (
    <div className="bg-primary text-black font-Poppins">
      <h2 className="text-5xl font-semibold text-center pt-10 underline">
        Popular Recipe
      </h2>
      <div className="container px-5 pt-5 pb-16 mx-auto">
        <div className="flex flex-wrap -mb-4">{renderRecipe()}</div>
      </div>
    </div>
  );
};

export default PopularRecipe;
