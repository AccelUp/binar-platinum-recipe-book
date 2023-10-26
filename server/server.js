import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./src/views/router.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import specs from "./swagger-output.json" assert { type: "json" };

// import * as jsonData from './swagger-output.json' assert { type: 'json' };

dotenv.config();
console.log(process.env.DATABASE_URL);

const app = express();
app.use("/media", express.static("media"));
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

const PORT = process.env.PORT || 8000;

app.use("/", router);

app.listen(PORT, () => {
  console.log(`  ⚡ Server running on http://localhost:${PORT}`);
});
