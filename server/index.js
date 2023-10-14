import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import router from "./src/routers/index.js";
import cors from "cors";

// initialize express
const app = express();
const PORT = 8000;

app.use(morgan("dev"));
app.use(bodyParser({ extended: true }));
app.use(cors({ origin: "*" }));

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
