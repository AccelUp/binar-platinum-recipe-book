import {
  runMigration,
  destroyConnection,
} from "../../db/migrations/run-migration";
import {
  getRecipes,
  addRecipes,
  deleteRecipesById,
  editRecipesById,
  getRecipesById,
} from "../recipe.controllers";
import {
  responseOk,
  responseError,
} from "../../helpers/restResponse.helper.js";

// Recipe Controller

beforeAll(async () => {
  await runMigration();
});

afterAll(async () => {
  await destroyConnection();
});

// Test Suite 1
describe("getRecipes", () => {
  it("Fetch all recipe from the database", async () => {
    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn(() => res),
    };

    await getRecipes(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    const responseJSON = res.json.mock.calls[0][0];
    expect(res.json).toHaveBeenCalledWith(responseJSON);
  });
});

// Test Suite 2

describe("getRecipesById", () => {
  it("Fetch one recipe from the database", async () => {
    const req = {
      params: {
        id: "2be93241-00d5-44b3-aa2c-3842de618704",
      },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(() => res),
    };

    await getRecipesById(req, res);
    expect(res.status).toHaveBeenCalledWith(200);

    const responseJSON = res.json.mock.calls[0][0];
    expect(responseJSON).not.toBeUndefined();
  });
});
