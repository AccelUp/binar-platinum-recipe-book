import { runMigration, destroyConnection } from "../src/db/run-migration.js";
import sinon from "sinon";
import { expect } from "chai";
import bcrypt from "bcrypt";
import {
  getUsers,
  getByID,
  updatePassword,
  registerUser,
} from "../src/controllers/user/user.controller.js";
import UserModels from "../src/models/user.models.js";

const models = new UserModels();

before(async () => {
  await runMigration();
});

after(async () => {
  await destroyConnection();
});

// Get All User
describe("Controller User Test", () => {
  it("should get all users successfully", async () => {
    const getAllUsersStub = sinon
      .stub(models, "getAllUsers")
      .resolves([models.getAllUsers()]);
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await getUsers(null, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(getAllUsersStub.calledOnce).to.be.true;
    expect(res.json.calledOnce).to.be.true;

    getAllUsersStub.restore();
  });

  // Get Specific User
  it("should return a user when a valid ID is provided", (done) => {
    const req = {
      params: {
        id: "5b59c79d-366a-499e-9812-92eb8dd49e4e",
      },
    };

    const res = {
      status: (statusCode) => {
        expect(statusCode).to.equal(200);
        return {
          json: (response) => {
            expect(response.message).to.equal("Contact retrieved successfully");
            done();
          },
        };
      },
    };

    getByID(req, res);
  });
  // Updata Password
  it("should update a recipe in the database", async () => {
    const req = {
      params: { id: "5b59c79d-366a-499e-9812-92eb8dd49e4e" },
      body: {
        password: "ono_ono",
      },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await updatePassword(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledOnce).to.be.true;
    const responseJSON = res.json.args[0][0];
    expect(responseJSON).to.not.be.undefined;
  });

  // Create User

  it("should create a user with valid data", async () => {
    const createUserStub = sinon
      .stub(UserModels.prototype, "createUser")
      .resolves({ id: "someUserId" });

    // Mock data
    const username = "ace";
    const password = "12345";

    // Call the createUser function
    const userId = await new UserModels().createUser(username, password);

    // Assert that the stub was called once
    expect(createUserStub.calledOnce).to.be.true;

    // Assert that the user was created, and the returned user ID is not null
    expect(userId).not.to.be.null;

    // Restore the stub
    createUserStub.restore();
  });
});

describe("Login Controller Test", () => {
  const sampleUser = {
    id: "2ee3374f-0b72-4bd8-84da-40841484dda7",
    username: "dono",
    hash_password:
      "$2b$10$nsmMxvVrXJdjtSOS4IpMvOSdB1taY.GmB.cuspLlCdYYw5WNfCa1u", // Replace with a valid bcrypt hash
  };

  // Stub the user model functions
  before(() => {
    sinon.stub(models, "getUserByUsername").resolves(sampleUser);
  });

  after(() => {
    sinon.restore();
  });

  it("should login a user with valid credentials and return tokens", async () => {
    const req = {
      body: {
        username: "admin",
        password: "admin",
      },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await loginAndStoreTokens(req, res);

    expect(res.status.calledWith(201)).to.be.true;
    expect(res.json.calledOnce).to.be.true;
    expect(res.json.getCall(0).args[0].message).to.equal("Login Successfully");
    expect(res.json.getCall(0).args[0].data.access_token).to.be.a("string");
    expect(res.json.getCall(0).args[0].data.refresh_token).to.be.a("string");
  });

  it("should return an error for invalid credentials", async () => {
    const req = {
      body: {
        username: "user123",
        password: "invalid_password",
      },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await loginAndStoreTokens(req, res);

    expect(res.status.calledWith(403)).to.be.true;
    expect(res.json.calledOnce).to.be.true;
    expect(res.json.getCall(0).args[0].message).to.equal("Invalid Credentials");
  });
});
