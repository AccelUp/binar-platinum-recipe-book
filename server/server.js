import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./src/views/recipe.views.js";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

app.use("/", router);

app.listen(PORT, () => {
  console.log(`  ⚡ Server running on http://localhost:${PORT}`);
});
