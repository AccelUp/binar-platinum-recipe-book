import { responseOk, responseError } from "../helpers/restResponse.helper.js";
import CookBookModels from "../models/recipe.models.js";

const models = new CookBookModels();

async function editRecipesById(req, res) {
  try {
    const id = req.params["id"];
    const body = req.body;
    if (!id) return res.status(400).json(responseError("ID is required"));
    if (!body.title && !body.ingredients && !body.instruction && !body.caption && !body.category) {
      return res.status(400).json(responseError("At least one field is required to update"));
    }

    const data = await models.edit(id, body);
    if (!data) return res.status(404).json(responseError("Recipe not found"));

    return res.status(200).json(responseOk(`Success update ${id}`, data));
  } catch (error) {
    return res.status(500).json(responseError("Error while updating recipe", error.message));
  }
}

export { editRecipesById };
