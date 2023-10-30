import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailRecipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState("");

  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_SERVER_RECIPE + `/recipes/${id}`
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
      <section className="font-Poppins text-white body-font sm:pt-24 bg-blackk overflow-hidden">
        <div className="container px-5 py-6 sm:py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 sm:mt-6 lg:mt-0">
              <h1 className="text-primary text-4xl sm:text-3xl uppercase leading-relaxed tracking-widest title-font font-bold">
                {recipe.title}
              </h1>
              <p className="text-gray-600 uppercase tracking-widest font-bold mt-2 mb-2">
                {recipe.category}
              </p>
              <h3 className="uppercase text-primary text-2xl tracking-widest font-semibold mb-2">
                Ingredients:
              </h3>
              <h4 className="leading-relaxed text-sm sm:text-sm p-2 sm:p-4 mb-2">
                {recipe.ingredients}
              </h4>
              <h3 className="uppercase font-semibold text-primary text-2xl tracking-widest mb-2">
                Steps:
              </h3>
              <div className="container mx-auto">
                <div className="text-xs sm:text-sm p-2 sm:p-4">
                  <pre className="whitespace-pre-wrap">
                    {recipe.instruction}
                  </pre>
                  <h3 className="mt-4 text-4xl sm:text-xl text-gray-600 font-normal leading-tight">
                    {recipe.caption}
                  </h3>
                </div>
              </div>
            </div>
            <img
              className="lg:w-1/2 w-full h-auto sm:h-[400px] sm:mt-7 object-cover object-center rounded-lg"
              src={import.meta.env.VITE_IMAGE_FILE + recipe.img_filename}
              alt={recipe.title}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailRecipe;
