import express from "express";
import middleware from "../middlewares/middleware.js";
import {
  registerUser,
  loginAndStoreTokens,
  logoutAndRemoveTokens,
  getUsers,
  getByID,
  updatePassword,
  deleteUsers,
  refreshAccessToken,
} from "../controllers/user.controller.js";

const router = express.Router();

const prefixPath = "/api/v1/recipebook/user";

router.post(`${prefixPath}/register`, registerUser);
router.post(`${prefixPath}/login`, loginAndStoreTokens);
router.post(`${prefixPath}/logout`, logoutAndRemoveTokens);
router.post(`${prefixPath}/refresh-token`, refreshAccessToken);
router.get(`${prefixPath}/profile`, middleware, getByID);
router.get(`${prefixPath}/users`, getUsers);
router.put(`${prefixPath}/:id`, updatePassword);
router.delete(`${prefixPath}/:id`, deleteUsers);
router.delete(`${prefixPath}/users/:id`, deleteUsers);

export default router;
