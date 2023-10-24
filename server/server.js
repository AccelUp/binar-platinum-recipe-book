import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./src/views/router.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

console.log(process.env.DATABASE_URL);
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

const PORT = process.env.PORT || 8000;

app.use("/", router);

app.listen(PORT, () => {
  console.log(`  ⚡ Server running on http://localhost:${PORT}`);
});
