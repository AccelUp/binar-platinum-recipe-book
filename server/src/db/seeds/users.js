import { v4 } from "uuid";
import bcrypt from "bcrypt";

export const seed = (knex) => {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(async function () {
      // Inserts seed entries
      const genSalt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash("password123", genSalt);

      return knex("users").insert([
        {
          id: v4(),
          username: "user1",
          hash_password: hashPassword,
        },
        {
          id: v4(),
          username: "user2",
          hash_password: hashPassword,
        },
        // Add more user data as needed
      ]);
    });
};
