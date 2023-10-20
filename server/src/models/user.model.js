import db from "../config/db.js";
import { v4 } from "uuid";
import bcrypt from "bcrypt";

const createUser = async (username, password, res) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    return await db("user").returning("id").insert({
      username,
      hashedPassword: hashedPassword,
    });
  } catch (e) {
    if (e) {
      res.status(400).json({ error: e });
    }
  }
};

export { createUser };
