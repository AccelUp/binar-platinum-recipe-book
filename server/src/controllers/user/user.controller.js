import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { responseOk, responseError } from "../../helpers/restResponse.helper.js";
import UsersModel from "../../models/user.models.js";
import UserProfileModel from "../../models/userProfile.models.js";

const users = new UsersModel();
const userProfile = new UserProfileModel();

async function registerUser(req, res) {
  const { id, username, password, fullName, email, dateOfBirth, address } = req.body;

  try {
    const [user_id] = await users.createUser(username, password);
    const userId = user_id.id;
    await userProfile.createUserProfile(id, userId, fullName, email, dateOfBirth, address);

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

async function getUsers(_, res) {
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
    return res.status(200).json(responseOk("User Password Updated Successfully"));
  } catch (e) {
    console.error("Error updating user password: ", e);
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
    return res.status(200).json(responseOk("Contact retrieved successfully", user));
  } catch (e) {
    console.error("Error retrieving contacts: ", e);
    return res.status(500).json(responseError(e.message));
  }
}

async function deleteUsers(req, res) {
  const id = req.params.id;
  try {
    await users.deleteUser(id);
    await userProfile.deleteUserProfile(id);
    return res.status(200).json(responseOk("User & UserProfile Deleted Successfully"));
  } catch (e) {
    console.error("Error Deleting User and Profile: ", e);
    return res.status(e.code || 500).json(responseError(e.message));
  }
}

export { registerUser, getUsers, getByID, updatePassword, deleteUsers };
