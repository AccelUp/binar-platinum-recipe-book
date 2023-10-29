import { runMigration, destroyConnection } from "../src/db/run-migration.js";
import sinon from "sinon";
import { expect } from "chai";
import CookBookModels from "../src/models/recipe.models.js";
import db from "../src/config/db_lite.js";

before(async () => {
  await runMigration();
});

after(async () => {
  await destroyConnection();
  process.exit();
});

describe("Model Test", () => {
  it("should return an array of recipes", async () => {
    const sampleRecipes = [
      {
        id: "2bedeb4f-d99f-48e8-a2b3-f5a34b8c62bc",
        title: "Pizza",
        ingredients: "Flour, Water, Sugar, Salt, Yeast, Olive oil",
        instruction:
          "1. Combine flour, water, sugar, salt, yeast and olive oil until evenly mixed. \n2. Stir while pouring ice water little by little. \n3. Knead the dough until smooth and elastic. \n4. Let the dough rest for 30 minutes to rise. \n5. After rising, flatten the dough with a rolling pin. \n6. Place the dough on a pizza pan that has been greased with olive oil. \n7. Add tomato sauce and toppings to taste. \n8. Bake in the oven for 10-15 minutes.",
        caption: "Make your own pizza at home with easy recipes.",
        category: "Main Course",
        img_filename: "pizza.jpg",
      },
    ];

    // Create a sinon.stub for the 'db.select' method to return sample data
    const dbSelectStub = sinon.stub(db, "select").resolves(sampleRecipes);

    // Instantiate the RecipeModels class
    const recipeModel = new CookBookModels();

    try {
      // Call the findAll method and assert the result
      const result = await recipeModel.findAll();
      expect(result).to.deep.equal(sampleRecipes);
    } finally {
      // Restore the sinon.stub after the test
      dbSelectStub.restore();
    }
  });
});
