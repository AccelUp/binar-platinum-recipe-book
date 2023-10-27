import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
  registerUser,
  getUsers,
  getByID,
  updatePassword,
  deleteUsers,
} from "../controllers/user.controller.js";

const router = express.Router();

const userPrefix = "/api/v1/users";

router.post(`${userPrefix}/register`, registerUser);
router.get(`${userPrefix}`, getUsers);
router.get(`${userPrefix}/profile`, getByID);
router.put(`${userPrefix}/password/:id`, authMiddleware, updatePassword);
router.delete(`${userPrefix}/:id`, authMiddleware, deleteUsers);

export default router;
