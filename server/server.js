import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./src/views/recipe.router.js";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.DATABASE_URL);
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

app.use("/", router);

app.listen(PORT, () => {
  console.log(`  ⚡ Server running on http://localhost:${PORT}`);
});
