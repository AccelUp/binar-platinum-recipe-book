import { runMigration, destroyConnection } from "../src/db/run-migration.js";
import sinon from "sinon";
import { expect } from "chai";
import {
  getRecipes,
  getRecipesById,
  addRecipes,
  editRecipesById,
} from "../src/controllers/recipe/recipe.controllers.js";
import CookBookModels from "../src/models/recipe.models.js";

before(async () => {
  await runMigration();
});

after(async () => {
  await destroyConnection();
  process.exit();
});

describe("Controller Recipe Test", () => {
  const models = new CookBookModels();

  // Get All Recipe
  it("should get all recipes successfully", async () => {
    const findAllStub = sinon
      .stub(models, "findAll")
      .resolves([models.findAll()]);
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await getRecipes(null, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(findAllStub.calledOnce).to.be.true;
    expect(res.json.calledOnce).to.be.true;

    findAllStub.restore();
  });

  // Get Specific Recipe
  it("should return a recipe when a valid ID is provided", (done) => {
    const req = {
      params: {
        id: "0d3da870-0618-4787-8c55-82ee1983024e",
      },
    };

    const res = {
      status: (statusCode) => {
        expect(statusCode).to.equal(200);
        return {
          json: (response) => {
            expect(response.message).to.equal("Success get link by id");
            done();
          },
        };
      },
    };

    getRecipesById(req, res);
  });

  // Add new recipe

  it("should add a new recipe to the database", async () => {
    const req = {
      body: {
        title: "New Recipe",
        ingredients: "Ingredient 1, Ingredient 2",
        instruction: "Step 1, Step 2",
        caption: "A delicious recipe",
        category: "Food",
        img_filename: "image.jpg",
      },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const fakeNewRecipe = {
      id: "0d3da870-0618-4787-8c55-82ee1983024e",
      title: "New Recipe",
      ingredients: "Ingredient 1, Ingredient 2",
      instruction: "Step 1, Step 2",
      caption: "A delicious recipe",
      category: "Food",
      img_filename: "image.jpg",
    };

    const modelInsertStub = sinon
      .stub(models, "insert")
      .resolves(fakeNewRecipe);

    await addRecipes(req, res);

    expect(res.status.calledWith(201)).to.be.true;
    expect(res.json.calledOnce).to.be.true;
    const responseJSON = res.json.args[0][0];
    expect(responseJSON).to.deep.equal({
      message: "Recipe added successfully",
      data: fakeNewRecipe,
    });

    modelInsertStub.restore();
  });

  // Update Recipe

  it("should update a recipe in the database", async () => {
    const req = {
      params: { id: "0d3da870-0618-4787-8c55-82ee1983024e" },
      body: {
        title: "Bolang Gorang",
        ingredients:
          "White rice, Garlic, Chicken, Sweet soy sauce or soy sauce, Sambal, Scallions, Salt",
        instruction:
          "1. Heat cooking oil on a wok.\n2. Sauté garlic until fragrant.\n3. Add white rice and stir until evenly distributed.\n4. Add sweet or salty soy sauce, chili sauce, salt\n5. Stir until evenly distributed and cook for 5 minutes.\n6. Add green onion and stir until evenly distributed.",
      },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await editRecipesById(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledOnce).to.be.true;
    const responseJSON = res.json.args[0][0];
    expect(responseJSON).to.not.be.undefined;
  });
});
