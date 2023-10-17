import { responseOk, responseError } from "../helpers/restResponse.helper.js";
import CookBookModels from "../models/recipe.models.js";

const models = new CookBookModels();

async function deleteRecipesById(req, res) {
  try {
    const id = req.params["id"];
    if (!id) return res.status(401).json(responseError("ID is required"));

    const data = await models.delete(id);
    if (!data) return res.status(400).json(responseError("data is not found"));

    return res.status(200).json(responseOk(`Success delete ${id}`, data));
  } catch (error) {
    return res.status(500).json(responseError("something went wrong", error.message));
  }
}

export { deleteRecipesById };
