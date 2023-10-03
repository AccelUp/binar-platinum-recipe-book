import db from "../config/db";
import { v4 } from "uuid";

class RecipeModels {
  //Post
  async insert(title, ingredients, instruction, caption, category) {
    const newRecipe = { id: v4(), title, ingredients, instruction, caption, category };
    return await db.insert(newRecipe).into("recipe").returning("*"); //.returning
  }
  //Get
  async findAll() {
    const query = await db.select("*").table("recipe");
    return query;
    // return this.recipesData;
  }
  //Get
  async findById(id) {
    return await db.select("*").table("recipe").where({ id });
  }
  //Delete
  async delete(id) {
    return await db.del().table("recipe").where({ id });
  }
  //Update
  async edit(id, body) {
    return await db.update(body).table("recipe").where({ id }).returning("*");
  }
}

export default RecipeModels;
