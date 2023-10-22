import db from "../config/db.js";
import { v4 } from "uuid";
import { ErrorServer } from "../helpers/errorHandlers.js";
import bcrypt from "bcrypt";

class User {
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

  async getAllUsers() {
    try {
      return await db.select("*").from("users");
    } catch (e) {
      throw new ErrorServer();
    }
  }

  async updateUserPassword(userId, newPassword) {
    try {
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      return await db("users")
        .where("id", userId)
        .update({ hash_password: hashedPassword });
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

export default User;
