import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditRecipe = () => {
  const { id } = useParams();

  const [image, setImage] = useState({ file: null, show: null });
  const [recipe, setRecipe] = useState({
    caption: "",
    title: "",
    ingredients: "",
    instruction: "",
    category: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_SERVER_RECIPE + `/recipes/${id}`
        ); // Use backticks to create the URL
        const { caption, title, ingredients, instruction, category } =
          response.data;
        setRecipe({ caption, title, ingredients, instruction, category });
      } catch (error) {
        console.error("Error:", error);
        setErrorMessage("Error fetching recipe data.");
      }
    };

    fetchRecipeData();
  }, [id]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleEditRecipe = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("file", image.file);

      for (const key in recipe) {
        formData.append(key, recipe[key]);
      }

      const response = await axios.put(
        import.meta.env.VITE_SERVER_RECIPE + `/edit/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setSuccessMessage("Recipe updated successfully");
        clearSuccessMessageAfterDelay();
      }
    } catch (error) {
      setErrorMessage("Error: " + error.message);
      console.error("Error:", error);
    }
  };

  const handleChangeImage = (e) => {
    const selectedFile = e.target.files[0];
    const url = URL.createObjectURL(selectedFile);

    setImage({ file: selectedFile, show: url });
  };

  const clearSuccessMessageAfterDelay = () => {
    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  };

  return (
    <section className="bg-blackk font-Poppins">
      <div className="max-w-lg pt-16 h-screen lg:ms-auto mx-auto text-center">
        <div className="py-7 px-7 rounded-md bg-blackk">
          <h2 className="text-4xl text-primary mb-4 font-bold">Edit Recipe</h2>
          {errorMessage && (
            <div className="text-red-500 mb-4">{errorMessage}</div>
          )}
          {successMessage && (
            <div className="text-green-500 mb-4">{successMessage}</div>
          )}
          <form onSubmit={handleEditRecipe}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              {["title", "caption", "category"].map((field) => (
                <input
                  key={field}
                  type="text"
                  name={field}
                  placeholder={`${
                    field.charAt(0).toUpperCase() + field.slice(1)
                  } *`}
                  className="w-full border border-primary rounded-md py-2 px-3 focus:outline-none focus-border-prim"
                  value={recipe[field]}
                  onChange={handleChange}
                />
              ))}
              <div className="md:col-span-2">
                <label
                  htmlFor="file-upload"
                  className="block font-normal text-primary text-lg"
                >
                  Upload an Image:
                </label>
                <input
                  type="file"
                  name="image"
                  className="peer block w-full border-none bg-transparent py-2.5 px-0 text-sm text-gray-900 focus-border-blue-600 focus:outline-none focus-ring-0"
                  onChange={handleChangeImage}
                />
              </div>
              <div className="md:col-span-2">
                <textarea
                  name="instruction"
                  rows="5"
                  placeholder="Instruction"
                  className="w-full border border-primary rounded-md py-2 px-3 focus:outline-none focus-border-prim"
                  value={recipe.instruction}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <textarea
                  name="ingredients"
                  rows="5"
                  placeholder="Ingredients (use ',' to separate)"
                  className="w-full border border-primary rounded-md py-2 px-3 focus:outline-none focus-border-prim"
                  value={recipe.ingredients}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="py-3 text-base font-medium rounded border border-primary text-primary bg-blackk w-full hover-bg-primary hover-text-black transition duration-300"
                >
                  Update Recipe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditRecipe;
