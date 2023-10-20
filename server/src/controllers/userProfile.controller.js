import { updateUserProfile, deleteUserProfile } from "../models/userProfile.models.js";
import { responseOk, responseError } from "../helpers/restResponse.helper.js";

async function getUserProfile(req, res) {
  const userId = req.params.userId;

  try {
    const userProfile = await userProfile.getUserProfileByUserId(userId);
    if (userProfile) {
      return res.status(200).json(responseOk("Success Get User Profile", userProfile));
    }
  } catch (e) {
    console.error("Error fetching user profile: ", e);
    return res.status(e.code || 500).json(responseError(e.message));
  }
}

async function updateUserProfile(req, res) {
  const userId = req.params.userId;
  const { fullName, dateOfBirth, address } = req.body;

  try {
    await userProfile.updateUserProfile(userId, fullName, dateOfBirth, address);
    return res.status(200).json(responseOk("User Profile Updated Successfuly"));
  } catch (e) {
    console.error("Error updating user profile: ", e);
    return res.status(e.code || 500).json(responseError(e.message));
  }
}

async function deleteUserProfile(req, res) {
  const userId = req.params.userId;

  try {
    await userProfile.deleteUserProfile(userId);
    return res.status(200).json(responseOk("User Profile Deleted Successfuly"));
  } catch (e) {
    console.error("Error deleting user profile: ", e);
    return res.status(e.code || 500).json(responseError(e.message));
  }
}

export { getUserProfile, updateUserProfile, deleteUserProfile };
