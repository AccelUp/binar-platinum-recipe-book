const CookBookModels = require("../models/recipe.models");
const { responseOk, responseError } = require("../helpers/restResponse.helper");

const models = new CookBookModels();

//menampilkan semua resep
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

//menampilkan resep berdasarkan id
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

//menambah resep baru
async function addRecipes(req, res) {
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

    const data = await models.insert(body.title, body.ingredients, body.instruction, body.caption, body.category);
    return res.status(201).json(responseOk("Success add new recipe", data));
  } catch (error) {
    return res.status(500).json(responseError("Error while adding new recipe", error.message));
  }
}

//edit resep berdasarkan id
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
//menghapus resep berdasarkan nama resep
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

module.exports = {
  getRecipes,
  getRecipesById,
  addRecipes,
  editRecipesById,
  deleteRecipesById,
};
