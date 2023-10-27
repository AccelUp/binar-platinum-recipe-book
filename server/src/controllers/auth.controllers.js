import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { responseOk, responseError } from "../helpers/restResponse.helper.js";
import UsersModel from "../models/user.models.js";

const JWT_ACCESS_SECRET = process.env.JWT_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_SECRET;

const users = new UsersModel();

function generateAccessToken(user) {
  const accessToken = jwt.sign(
    { user: { user_id: user.id } },
    JWT_ACCESS_SECRET,
    {
      expiresIn: "30m",
    }
  );

  return accessToken;
}

function generateRefreshToken(user) {
  const refreshToken = jwt.sign(
    { user: { user_id: user.id } },
    JWT_REFRESH_SECRET,
    {
      expiresIn: "7d",
    }
  );
  return refreshToken;
}

async function loginAndStoreTokens(req, res) {
  const { username, password } = req.body;

  try {
    const userByUsername = await users.getUserByUsername(username);
    if (
      userByUsername &&
      (await bcrypt.compare(password, userByUsername.hash_password))
    ) {
      const access_token = generateAccessToken(userByUsername);
      const refresh_token = generateRefreshToken(userByUsername);

      req.access_token = access_token;
      req.refresh_token = refresh_token;

      return res
        .status(201)
        .json(
          responseOk("Login Successfully", { access_token, refresh_token })
        );
    } else {
      res.status(403).json(responseError("Invalid Credentials"));
    }
  } catch (e) {
    console.error("Error logging in: ", e);
    return res.status(e.code || 500).json(responseError(e.message));
  }
}

async function logoutAndRemoveTokens(req, res) {
  req.access_token = null;
  req.refresh_token = null;

  res.status(200).json(responseOk("Logged out successfully"));
}

async function refreshAccessToken(req, res) {
  const refresh_token = req.body.refresh_token;

  if (!refresh_token) {
    return res.status(400).json(responseError("Refresh token is required"));
  }

  jwt.verify(refresh_token, JWT_REFRESH_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json(responseError("Invalid Refresh Token"));
    }

    const access_token = generateAccessToken(user.user);

    return res
      .status(200)
      .json(responseOk("Access Token Refreshed", { access_token }));
  });
}

export { loginAndStoreTokens, logoutAndRemoveTokens, refreshAccessToken };
