import axios from "axios";

const serverUrl = import.meta.env.VITE_SERVER_RECIPE;

export const getRecipeById = (recipeId) => {
  return async (dispatch) => {
    const url = `${serverUrl}/recipes/` + recipeId;
    try {
      dispatch({ type: "PENDING" });
      const res = await axios.get(url);
      dispatch({ type: "GET_RECIPE_BY_ID_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "GET_RECIPE_BY_ID_FAILURE", error: error });
    }
  };
};

export const getAllRecipes = (query = "") => {
  return async (dispatch) => {
    const url = query
      ? `${serverUrl}/recipes/search?key=${query}`
      : `${serverUrl}/recipes`;

    try {
      dispatch({ type: "PENDING" });
      const res = await axios.get(url);
      dispatch({ type: "GET_RECIPES_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "GET_RECIPES_FAILURE", error: error });
    }
  };
};

export const postRecipe = (inputData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "PENDING" });
      const response = await axios.post(`${serverUrl}/add`, inputData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      });
      dispatch({ type: "POST_RECIPE_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "POST_RECIPE_FAILED", error: error.message });
    }
  };
};

export const editRecipe = (recipeId, updatedData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "PENDING" });
      const res = await axios.put(
        `${serverUrl}/edit/${recipeId}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch({ type: "EDIT_RECIPE_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "EDIT_RECIPE_FAILED", error: error.message });
    }
  };
};

export const deleteRecipe = (recipeId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "PENDING" });
      const res = await axios.delete(`${serverUrl}/delete/${recipeId}`);
      dispatch({ type: "DELETE_RECIPE_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "DELETE_RECIPE_FAILED", error: error.message });
    }
  };
};
