import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailRecipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState("");

  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/recipebook/recipes/${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch recipe");
      }
      const data = await response.json();
      setRecipe(data.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchRecipes();
  }, []);
  if (!recipe || Object.keys(recipe).length === 0) {
    console.log("Product not found");
  } else {
    console.log(recipe, "recipe");
  }

  return (
    <>
      <section className="text-gray-600 body-font md:mt-24 bg-putih overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {recipe.title}
              </h1>

              <p className="leading-relaxed">{recipe.ingredients}</p>
            </div>
            <img
              className="lg:w-1/2 w-full lg:h-auto max-h-[400px] md:mt-0 mt-7 object-contain object-center rounded"
              src={import.meta.env.VITE_IMAGE_FILE + recipe.img_filename}
            />
            <div className="container px-5 pt-5 pb-16 mx-auto"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailRecipe;
