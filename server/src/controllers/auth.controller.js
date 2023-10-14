import db from "../config/db.js";
import { v4 } from "uuid";
import bcrypt from "bcrypt";

// register
async function register(req, res) {
  let { email, password, fullname } = req.body;
  let id = v4();
  let genSalt = await bcrypt.genSalt(10);
  let hashPassword = await bcrypt.hash(password, genSalt);

  await db("users").insert({
    id,
    email,
    hash_password: hashPassword,
  });
  await db("user_profiles").insert({
    user_id: id,
    full_name: fullname,
  });

  // success
  res.status(201).json({
    message: "success created user",
    data: {
      user: {
        id,
        email,
        fullname,
      },
    },
  });
}

// login
async function login(req, res) {
  const { email, password } = req.body;

  const user = await db("users").first("id", "email", "hash_password").where("email", email);

  const isSameUser = await bcrypt.compare(password, user, hash_password);
  if (!isSameUser) {
    return res.status(403).json({ error: "email or passsword is wrong" });
  }
}

export { register, login };
