import React, { useState } from "react";
import axios from "axios";

const AddRecipe = () => {
  const [image, setImage] = useState({ file: null, show: null });
  const [recipe, setRecipe] = useState({
    caption: "",
    title: "",
    ingredients: "",
    instruction: "",
    category: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handlePostRecipe = async (e) => {
    e.preventDefault();

    if (!image.file) {
      setErrorMessage("Please select an image for the recipe.");
      return;
    }

    if (
      !recipe.title ||
      !recipe.caption ||
      !recipe.category ||
      !recipe.instruction
    ) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("file", image.file);

    for (const key in recipe) {
      formData.append(key, recipe[key]);
    }

    try {
      const response = await axios.post(
        import.meta.env.VITE_SERVER_RECIPE + "/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("Recipe added successfully");
        // Add your code for what to do after successfully adding a recipe (e.g., redirecting the user to another page)
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle any errors that occur when uploading the recipe
    }
  };

  const handleChangeImage = (e) => {
    const selectedFile = e.target.files[0];
    const url = URL.createObjectURL(selectedFile);

    setImage({ file: selectedFile, show: url });
  };

  return (
    <section className="bg-blackk font-Poppins">
      <div className="max-w-lg pt-24 h-screen lg:ms-auto mx-auto text-center">
        <div className="py-16 px-7 rounded-md bg-blackk border border-primary">
          <h2 className="text-4xl text-primary mb-4 font-bold">Add Recipe!</h2>
          {errorMessage && (
            <div className="text-red-500 mb-4">{errorMessage}</div>
          )}
          <form onSubmit={handlePostRecipe}>
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
                  className="py-3 text-base font-medium rounded text-primary bg-blackk w-full hover:bg-primary hover:text-black transition duration-300"
                >
                  Post Recipe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddRecipe;
