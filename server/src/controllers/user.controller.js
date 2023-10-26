import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { responseOk, responseError } from "../helpers/restResponse.helper.js";
import UsersModel from "../models/user.models.js";
import UserProfileModel from "../models/userProfile.models.js";

const JWT_ACCESS_SECRET = process.env.JWT_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_SECRET;

const users = new UsersModel();
const userProfile = new UserProfileModel();

let access_token;
let refresh_token;

async function registerUser(req, res) {
  const { id, username, password, fullName, email, dateOfBirth, address } =
    req.body;

  try {
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
      responseOk("User Registered Successfully", {
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
      .json(responseOk("User Password Updated Successfully"));
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

  return accessToken;
}

function generateRefreshToken(user) {
  const refresh_token = jwt.sign(
    { user: { user_id: user.id } },
    JWT_REFRESH_SECRET,
    {
      expiresIn: "7d",
    }
  );
  return refresh_token;
}

function setTokens(access_token, refresh_token) {
  access_token = access_token;
  refresh_token = refresh_token;
}

function authenticateAccessToken(req, res, next) {
  const auth_header = req.headers["authorization"];
  const token = auth_header && auth_header.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_ACCESS_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

function authenticateRefreshToken(req, res, next) {
  const refresh_token = getRefreshTokenFromCookie(req);
  if (!refresh_token) return res.sendStatus(401);

  jwt.verify(refresh_token, JWT_REFRESH_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

async function refreshAccessToken(req, res) {
  const refresh_token = req.body.refresh_token;
  const username = req.body.username;

  try {
    jwt.verify(refresh_token, JWT_REFRESH_SECRET, async (err, data) => {
      if (err) {
        return res.status(403).json(responseError("Invalid Refresh Token"));
      }

      try {
        const user = await users.getUserByUsername(username);
        if (!user) {
          return res.status(404).json(responseError("User not found"));
        }
        const access_token = generateAccessToken(user);

        return res
          .status(200)
          .json(responseOk("Access Token Refreshed", { access_token }));
      } catch (e) {
        console.error("Error fetching user details: ", e);
        return res.status(e.code || 500).json(responseError(e.message));
      }
    });
  } catch (e) {
    console.error("Error refreshing access token: ", e);
    return res.status(e.code || 500).json(responseError(e.message));
  }
}

async function getByID(req, res) {
  const id = req.params.id;
  try {
    const user = await users.getUserById(id);
    if (!user) {
      return res.status(404).json(responseError(e.message));
    }
    return res
      .status(200)
      .json(responseOk("Contact retrieved successfully", user));
  } catch (e) {
    console.error("Error retrieving contacts: ", e);
    return res.status(500).json(responseError(e.message));
  }
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
      setTokens(access_token, refresh_token);

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
  setTokens(null, null);
  res.status(200).json(responseOk("Logged out successfully"));
}

async function deleteUsers(req, res) {
  const id = req.params.id;
  try {
    await users.deleteUser(id);
    await userProfile.deleteUserProfile(id);
    return res
      .status(200)
      .json(responseOk("User & UserProfile Deleted Successfully"));
  } catch (e) {
    console.error("Error Deleting User and Profile: ", e);
    return res.status(e.code || 500).json(responseError(e.message));
  }
}

export {
  registerUser,
  loginAndStoreTokens,
  logoutAndRemoveTokens,
  getUsers,
  getByID,
  updatePassword,
  deleteUsers,
  authenticateAccessToken,
  authenticateRefreshToken,
  refreshAccessToken,
};
