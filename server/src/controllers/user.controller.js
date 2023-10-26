import usersmodel from "../models/user.models.js";
import usersProfile from "../models/userProfile.models.js";
import { responseOk, responseError } from "../helpers/restResponse.helper.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { parse, serialize } from "cookie";
import cookieParser from "cookie-parser";
import { clearRefreshTokenCookie } from "../helpers/cookieHelper.js";

const users = new usersmodel();
const userProfile = new usersProfile();

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_KEY;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_KEY;

async function registerUser(req, res) {
  const { id, username, password, fullName, email, dateOfBirth, address } =
    req.body;
  try {
    //Destructuring user_id to get first element of createUser, which is ID
    const [user_id] = await users.createUser(username, password);
    const userId = user_id.id;
    await userProfile.createUserProfile(
      id,
      userId,
      fullName,
      email,
      dateOfBirth,
      address
    );
    return res.status(201).json(
      responseOk("User Registered Sucessfully", {
        username,
        fullName,
        email,
        dateOfBirth,
        address,
      })
    );
  } catch (e) {
    console.error("Error registering user: ", e);
    return res.status(e.code || 500).json(responseError(e.message));
  }
}

async function getUsers(req, res) {
  try {
    const user = await users.getAllUsers();
    return res.status(200).json(responseOk("Success Fetching Users", user));
  } catch (e) {
    console.error("Error fetching users: ", e);
    return res.status(e.code || 500).json(responseError(e.message));
  }
}

async function updatePassword(req, res) {
  const id = req.params.id;
  const newPassword = req.body.password;
  try {
    await users.updateUserPassword(id, newPassword);
    return res
      .status(200)
      .json(responseOk("User Password Updated Sucessfully"));
  } catch (e) {
    console.error("Error updating user password: ", e);
    return res.status(e.code || 500).json(responseError(e.message));
  }
}

function generateAccessToken(user) {
  const accessToken = jwt.sign(
    { user: { user_id: user.id } },
    JWT_ACCESS_SECRET,
    {
      expiresIn: "1h",
    }
  );

  return { accessToken };
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

function setRefreshTokenCookie(res, refreshToken) {
  const cookieValue = serialize("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  res.setHeader("Set-Cookie", cookieValue);
}

function getRefreshTokenFromCookie(req) {
  const cookies = parse(req.headers.cookie || "");
  return cookies.refreshToken;
}

function authenticateAccessToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_ACCESS_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

function authenticateRefreshToken(req, res, next) {
  const refreshToken = getRefreshTokenFromCookie(req);
  if (!refreshToken) return res.sendStatus(401);

  jwt.verify(refreshToken, JWT_REFRESH_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

async function isLogin(req, res) {
  const { username, password } = req.body;

  try {
    const userByUsername = await users.getUserByUsername(username);
    if (
      userByUsername &&
      (await bcrypt.compare(password, userByUsername.hash_password))
    ) {
      const access_token = generateAccessToken(userByUsername);

      const refreshToken = generateRefreshToken(userByUsername);
      setRefreshTokenCookie(res, refreshToken);

      return res
        .status(201)
        .json(responseOk("Login Successfully", { access_token, refreshToken }));
    } else {
      res.status(403).json(responseError("Invalid Credentials"));
    }
  } catch (e) {
    console.error("Error registering user: ", e);
    return res.status(e.code || 500).json(responseError(e.message));
  }
}

async function isLogout(req, res) {
  clearRefreshTokenCookie(res);
  res.status(200).json(responseOk("Logged out successfully"));
}

async function deleteUsers(req, res) {
  const id = req.params.id;
  try {
    await users.deleteUser(id);
    await userProfile.deleteUserProfile(id);
    return res
      .status(200)
      .json(responseOk("User & UserProfile Deleted Successfuly"));
  } catch (e) {
    console.error("Error Deleting User and Profile: ", e);
    return res.status(e.code || 500).json(responseError(e.message));
  }
}

export {
  registerUser,
  isLogin,
  isLogout,
  getUsers,
  updatePassword,
  deleteUsers,
  setRefreshTokenCookie,
  getRefreshTokenFromCookie,
  authenticateAccessToken,
  authenticateRefreshToken,
};
