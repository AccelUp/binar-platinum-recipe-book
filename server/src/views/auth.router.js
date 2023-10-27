import express from "express";
import {
  loginAndStoreTokens,
  logoutAndRemoveTokens,
  refreshAccessToken,
} from "../controllers/auth.controllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

const authPrefix = "/api/v1/auth";

router.post(`${authPrefix}/login`, loginAndStoreTokens);
router.post(`${authPrefix}/logout`, logoutAndRemoveTokens);
router.post(`${authPrefix}/refresh-token`, refreshAccessToken);
router.get(`${authPrefix}/protected`, authMiddleware, (req, res) => {
  res.json({ message: "Protected Route", user: req.user });
});

export default router;
