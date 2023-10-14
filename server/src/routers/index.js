import express from "express";

import recipeRouter from "./recipe.router.js";
import authRouter from "./auth.router.js";
// import userRouter from "./user.router";

const router = express.Router();

router.use(recipeRouter);
router.use(authRouter);
// router.use(userRouter);

export default router;

// const express = require("express");
// const mainApp = express();
// const bodyParser = require("body-parser");
// const { apiKeyMiddleware } = require("./middlewares");

// // All Feature
// const authRouter = require("./services/auth/auth.router");
// const userRouter = require("./services/user/user.router");

// mainApp.use(bodyParser({ extended: false }));

// // private only
// mainApp.use(apiKeyMiddleware);

// // limited only
// mainApp.use(authRouter);
// mainApp.use(userRouter);

// // error handler

// mainApp.all("*", (_req, res) => {
//   return res.status(404).json({ error: "path not found" });
// });

// module.exports = mainApp;
