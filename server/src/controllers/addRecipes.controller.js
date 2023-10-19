import { responseOk, responseError } from "../helpers/restResponse.helper.js";
import CookBookModels from "../models/recipe.models.js";
import uploadConfig from "../config/multer.js";

const models = new CookBookModels();

async function addRecipes(req, res) {
  uploadConfig(req, res, async function (err) {
    if (err) {
      return res.status(500).json(responseError("Error uploading image", err.message));
    }

    const imageFilename = req.file ? req.file.filename : null;

    try {
      const body = req.body;

      if (!body.title) {
        return res.status(400).json(responseError("Title is required"));
      }
      if (!body.ingredients) {
        return res.status(400).json(responseError("Ingredients are required"));
      }
      if (!body.instruction) {
        return res.status(400).json(responseError("Instruction is required"));
      }
      if (!body.caption) {
        return res.status(400).json(responseError("caption is required"));
      }
      if (!body.category) {
        return res.status(400).json(responseError("Category is required"));
      }

      const data = await models.insert(body.title, body.ingredients, body.instruction, body.caption, body.category, imageFilename);
      return res.status(201).json(responseOk("Success add new recipe", data));
    } catch (error) {
      return res.status(500).json(responseError("Error while adding new recipe", error.message));
    }
  });
}

export { addRecipes };
