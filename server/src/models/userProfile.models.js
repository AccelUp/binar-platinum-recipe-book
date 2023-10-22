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

  //   async insert(username, hash_password) {
  //     const profile = {
  //       id: v4(),
  //       username,
  //       password: hash_password,
  //     };
  //     return await db.insert(profile).into("users").returning("*");
  //   }
}

export default userProfile;

// import knex from "../config/db.js";
// import { ErrorServer } from "../helpers/errorHandlers";

// async function getUserProfileByUserId(userId) {
//   try {
//     return knex("user_profile").where("user_id", userId).first();
//   } catch (e) {
//     throw new ErrorServer(e.detail);
//   }
// }

// async function createUserProfile(userId, email, fullName, dateOfBirth, address) {
//   try {
//     return knex("user_profile").insert({
//       email: email,
//       user_id: userId,
//       full_name: fullName,
//       date_of_birth: dateOfBirth,
//       address,
//     });
//   } catch (e) {
//     throw new ErrorServer(e.detail);
//   }
// }

// async function updateProfile(userId, email, fullName, dateOfBirth, address) {
//   try {
//     return knex("user_profile").where("user_id", userId).update({
//       full_name: fullName,
//       email: email,
//       date_of_birth: dateOfBirth,
//       address,
//     });
//   } catch (e) {
//     throw new ErrorServer(e.detail);
//   }
// }

// async function deleteUserProfile(userId) {
//   try {
//     return knex("user_profile").where("user_id", userId).del();
//   } catch (e) {
//     throw new ErrorServer(e.detail);
//   }
// }

// export { getUserProfileByUserId, createUserProfile, updateProfile, deleteUserProfile };
