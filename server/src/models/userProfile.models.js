import db from "../config/db.js";
import { v4 } from "uuid";
import { ErrorServer } from "../helpers/errorHandlers.js";

class userProfile {
  // register user

  async getUserProfileByUserId(userId) {
    try {
      return await db("user_profile").where("user_id", userId).first();
    } catch (e) {
      throw new ErrorServer(e.detail);
    }
  }

  async createUserProfile(id, userId, email, fullName, dateOfBirth, address) {
    try {
      return await db("user_profile").insert({
        id: v4(),
        email: email,
        user_id: userId,
        full_name: fullName,
        date_of_birth: dateOfBirth,
        address,
      });
    } catch (e) {
      throw new ErrorServer(e.detail);
    }
  }

  async updateProfile(userId, email, fullName, dateOfBirth, address) {
    try {
      return await db("user_profile").where("user_id", userId).update({
        full_name: fullName,
        email: email,
        date_of_birth: dateOfBirth,
        address,
      });
    } catch (e) {
      throw new ErrorServer(e.detail);
    }
  }

  async deleteUserProfile(userId) {
    try {
      return await db("user_profile").where("user_id", userId).del();
    } catch (e) {
      throw new ErrorServer(e.detail);
    }
  }
}

export default userProfile;
