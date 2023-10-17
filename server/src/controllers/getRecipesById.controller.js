import { responseOk, responseError } from "../helpers/restResponse.helper.js";
import CookBookModels from "../models/recipe.models.js";

const models = new CookBookModels();

async function getRecipesById(req, res) {
  try {
    const id = req.params["id"];
    const data = await models.findById(id);

    if (!data || data.length === 0) {
      return res.status(404).json(responseError("Link can not be found!"));
    }

    return res.status(200).json(responseOk("Success get link by id", data));
  } catch (error) {
    return res.status(500).json(responseError("Error while fetching recipe by id", error.message));
  }
}

export { getRecipesById };
