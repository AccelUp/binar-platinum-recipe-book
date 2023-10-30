import { expect } from "chai";
import sinon from "sinon";
import * as bcrypt from "bcrypt";
import UserModels from "../src/models/user.models.js";
import { loginAndStoreTokens } from "../src/controllers/auth.controllers.js";

describe("Auth Controller", () => {
  let req, res;
  const models = new UserModels();

  beforeEach(() => {
    req = { body: {} };
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
  });

  it("should be successful login", async () => {
    req.body.username = "user1";
    req.body.password = "password123";

    // Stub the user model's getUserByUsername method to return a user with a hashed password.
    sinon.stub(models, "getUserByUsername").resolves({
      id: "testUserId",
      hash_password: await bcrypt.hash("password123", 10), // Hashed password
    });

    await loginAndStoreTokens(req, res);

    expect(res.status.firstCall.args[0]).to.equal(201);
    expect(res.json.firstCall.args[0]).to.deep.equal({
      message: "Login Successfully",
      data: null,
    });
  });
});
