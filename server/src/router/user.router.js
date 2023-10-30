import express from "express";
import middleware from "../middlewares/authMiddleware.js";
import {
  registerUser,
  getUsers,
  getByID,
  updatePassword,
  deleteUsers,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

const userPrefix = "/api/v1/users";

userRouter.post(`${userPrefix}/register`, registerUser);
userRouter.get(`${userPrefix}`, getUsers);
userRouter.get(`${userPrefix}/profile/:id`, getByID);
userRouter.put(`${userPrefix}/password/:id`, middleware, updatePassword);
userRouter.delete(`${userPrefix}/:id`, middleware, deleteUsers);

export default userRouter;
