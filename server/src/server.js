const express = require("express");
const app = express();

const morgan = require("morgan");
const bodyParser = require("body-parser");

const PORT = 7000;

app.use(morgan("dev"));
app.use(bodyParser.json());

const recipeBookViews = require("./views/recipe.views");
app.use(recipeBookViews);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
