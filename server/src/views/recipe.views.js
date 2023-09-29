const express = require("express");
const router = express.Router();
const controller = require("../controllers/recipe.controllers");

// routing group
const prefixPath = "api/v1/recipebook";

// register router
router.get(`/${prefixPath}/recipes`, controller.getRecipes); //melihat semua resep
router.get(`/${prefixPath}/recipes/:id`, controller.getRecipesById); //melihat resep berdasarkan id
router.post(`/${prefixPath}/add`, controller.addRecipes); //menambah resep
router.put(`/${prefixPath}/edit/:id`, controller.editRecipesById); //mengedit resep
router.delete(`/${prefixPath}/delete/:id`, controller.deleteRecipesById); //menghapus resep

module.exports = router;
