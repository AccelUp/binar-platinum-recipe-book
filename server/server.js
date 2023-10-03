const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const envPath = path.join(__dirname, `.env.${process.env.NODE_ENV}`);
dotenv.config({ path: envPath });

// EXPRESS
const express = require("express");
const app = express();
const mainApp = require("./src/router");

const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(cors());
app.use(mainApp);

app.get("/", (req, res) => {
  res.send("Test");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
