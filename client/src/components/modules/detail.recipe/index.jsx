import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailRecipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/recipebook/recipes/:id`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch recipe");
      }
      const data = await response.json();
      setRecipe(data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchRecipes();
  }, []);
  return <div>DetailRecipe</div>;
};

export default DetailRecipe;
