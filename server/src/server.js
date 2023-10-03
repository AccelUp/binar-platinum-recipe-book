import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import recipeBookViews from "./views/recipe.views";

const app = express();
const PORT = 8000;

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use(recipeBookViews);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
