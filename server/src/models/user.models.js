import db from "../config/db.js";
import { v4 } from "uuid";
import { ErrorServer, ErrorNotFound } from "../helpers/errorHandlers.js";
import bcrypt from "bcrypt";

class user {
  async createUser(username, password) {
    const genSalt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, genSalt);
    try {
      return await db("users").returning("id").insert({
        id: v4(),
        username,
        hash_password: hashPassword,
      });
    } catch (e) {
      throw new ErrorServer(e.detail);
    }
  }

  async getUserByUsername(username) {
    try {
      return await db("users").where("username", username).first();
    } catch (e) {
      throw new ErrorServer(e.detail);
    }
  }

  async getAllUser() {
    try {
      return await db.select("*").from("users");
    } catch (e) {
      throw new ErrorServer();
    }
  }

  async updateUserPassword(userId, newPassword) {
    try {
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      return await db("users").where("id", userId).update({ hash_password: hashedPassword });
    } catch (e) {
      throw new ErrorServer(e.detail);
    }
  }

  async deleteUser(id) {
    try {
      return await db("users").where("id", id).del();
    } catch (e) {
      throw new ErrorServer(e.detail);
    }
  }
}

export default user;

// module.exports = {
//   createUser,
//   getUserByUsername,
//   getAllUser,
//   updateUserPassword,
//   deleteUser,
// };

// class users {
//   // register user
//   async insert(username, hash_password) {
//     const newUser = {
//       id: v4(),
//       username,
//       password: hash_password,
//     };
//     return await db.insert(newUser).into("users").returning("*");
//   }
// }

// export default users;
