import express from "express";
import {
  registerUser,
  isLogin,
  isLogout,
  getUsers,
  updatePassword,
  deleteUsers,
  // authenticateAccessToken,
  // authenticateRefreshToken,
} from "../controllers/user.controller.js";

const router = express.Router();

const prefixPath = "api/v1/recipebook/user";

router.post(`/${prefixPath}/register`, registerUser);
router.get(`/${prefixPath}/users`, getUsers);
router.put(`/${prefixPath}/:id`, updatePassword);
router.delete(`/${prefixPath}/:id`, deleteUsers);
router.post(`/${prefixPath}/login`, isLogin);
router.post(`/${prefixPath}/logout`, isLogout);
// router.get(`/${prefixPath}/auth`, authenticateAccessToken, getUsers);
// router.get(`/${prefixPath}/auth2`, authenticateRefreshToken, getUsers);

export default router;
