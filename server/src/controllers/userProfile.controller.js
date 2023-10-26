import { responseOk, responseError } from "../helpers/restResponse.helper.js";
import userProfileModels from "../models/userProfile.models.js";

// const models = new userProfile()

const userProfile = new userProfileModels();

async function getUserProfile(req, res) {
  const userId = req.params.userId;

  try {
    const userProfilesss = await userProfile.getUserProfileByUserId(userId);
    if (userProfilesss) {
      return res.status(200).json(responseOk("Success Get User Profile", userProfilesss));
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
