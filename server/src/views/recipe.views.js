import express from "express";
import controller from "../controllers/recipe.controllers";

const router = express.Router();
const prefixPath = "api/v1/recipebook";

router.get(`/${prefixPath}/recipes`, controller.getRecipes);
router.get(`/${prefixPath}/recipes/:id`, controller.getRecipesById);
router.post(`/${prefixPath}/add`, controller.addRecipes);
router.put(`/${prefixPath}/edit/:id`, controller.editRecipesById);
router.delete(`/${prefixPath}/delete/:id`, controller.deleteRecipesById);

export default router;
