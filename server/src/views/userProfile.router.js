import express from "express";
import { getUserProfile, updateUserProfile, deleteUserProfile } from "../controllers/userProfile.controller.js";
// import middleware from "../middlewares/middleware.js";

const router = express.Router();
const prefixPath = "api/v1/user-profile";

router.get(`/ping`, (_req, res) => {
  res.status(200).json({ ping: "OK" });
});

router.get(`/${prefixPath}/:userId`, getUserProfile);
router.put(`/${prefixPath}/:userId`, updateUserProfile);
router.delete(`/${prefixPath}/:userId`, deleteUserProfile);

export default router;
