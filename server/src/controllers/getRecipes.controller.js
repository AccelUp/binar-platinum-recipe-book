import { responseOk, responseError } from "../helpers/restResponse.helper.js";
import CookBookModels from "../models/recipe.models.js";

const models = new CookBookModels();

async function getRecipes(_, res) {
  try {
    const recipe = await models.findAll();
    const data = {
      recipe,
      total: recipe.length,
    };

    return res.status(200).json(responseOk("Success get all link", data));
  } catch (error) {
    return res.status(500).json(responseError("Error while fetching recipes", error.message));
  }
}

export { getRecipes };
