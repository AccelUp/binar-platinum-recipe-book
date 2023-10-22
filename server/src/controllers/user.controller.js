import usersmodel from "../models/user.models.js";
import usersProfile from "../models/userProfile.models.js";
import { responseOk, responseError } from "../helpers/restResponse.helper.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const users = new usersmodel();
const userProfile = new usersProfile();

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
  const JWT_KEY = process.env.JWT_SECRET;

  return jwt.sign({ user: { user_id: user.id } }, JWT_KEY, {
    expiresIn: "1h",
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
      return res
        .status(201)
        .json(responseOk("Login Sucessfully", { access_token }));
    } else {
      res.status(403).json(responseError("Invalid Credentials"));
    }
  } catch (e) {
    console.error("Error registering user: ", e);
    return res.status(e.code || 500).json(responseError(e.message));
  }
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

export { registerUser, isLogin, getUsers, updatePassword, deleteUsers };
