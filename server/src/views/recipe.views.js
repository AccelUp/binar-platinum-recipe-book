import express from "express";
import { addRecipes, deleteRecipesById, editRecipesById, getRecipes, getRecipesById } from "../controllers/recipe.controllers.js";

const router = express.Router();
const prefixPath = "api/v1/recipebook";

router.get(`/${prefixPath}/recipes`, getRecipes);
router.get(`/${prefixPath}/recipes/:id`, getRecipesById);
router.post(`/${prefixPath}/add`, addRecipes);
router.put(`/${prefixPath}/edit/:id`, editRecipesById);
router.delete(`/${prefixPath}/delete/:id`, deleteRecipesById);

export default router;
