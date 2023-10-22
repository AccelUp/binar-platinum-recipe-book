import express from "express";
import { registerUser, isLogin, getUsers, updatePassword, deleteUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/api/v1/ping", (req, res) => {
  res.json({
    ping: "ok",
  });
});

const prefixPath = "api/v1/recipebook/user";

router.post(`/${prefixPath}/register`, registerUser);
router.get(`/${prefixPath}/users`, getUsers);
router.put(`/${prefixPath}/:id`, updatePassword);
router.delete(`/${prefixPath}/:id`, deleteUsers);
router.post(`/${prefixPath}/login`, isLogin);
// // router.post(`/${prefixPath}/register`, addProfile);

export default router;
