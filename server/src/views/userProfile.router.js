import express from "express";
import {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
} from "../controllers/userProfile.controller.js";

const router = express.Router();
const prefixPath = "api/v1/user-profile";

router.get(`/${prefixPath}/:userId`, getUserProfile);
router.put(`/${prefixPath}/:userId`, updateUserProfile);
router.delete(`/${prefixPath}/:userId`, deleteUserProfile);

export default router;
