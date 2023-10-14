import express from "express";
import { login, register } from "../controllers/auth.controller.js";

const router = express.Router();
const prefixPath = "api/v1/users";

router.post(`/${prefixPath}/register`, register);
router.post(`/${prefixPath}/login`, login);

export default router;
