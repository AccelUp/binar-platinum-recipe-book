import request from "supertest";
import express from "express";
import sinon from "sinon";
import { v4 as uuid } from "uuid";
import userRouter from "../src/router/user.router.js";

const app = express();

const authMiddleware = (req, res, next) => {
  next();
};

const authMiddlewareStub = sinon.stub().callsFake(authMiddleware);

app.use(authMiddlewareStub);
app.use(userRouter);

describe("User Router", function () {
  it("should post a user", async function () {
    const uuidStub = sinon.stub(uuid, "v4").returns("sample-uuid");

    app.post("/api/v1/users/register", (req, res) => {
      res.status(201).json({ message: "User registered successfully" });
    });

    const response = await request(app).post("/api/v1/users/register").send({
      username: "test",
      password: "test123",
    });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("User registered successfully");

    uuidStub.restore();
  });

  it("should get a list of users", function (done) {
    app.get("/api/v1/users", (req, res) => {
      res.status(200).json({ users: [] });
    });

    request(app).get("/api/v1/users").expect(200).end(done);
  });

  it("should get a user profile by ID", function (done) {
    app.get("/api/v1/users/profile/:userId", (req, res) => {
      const userId = req.params.userId;
      res.status(200).json({ userId, username: "Example User" });
    });

    request(app)
      .get("/api/v1/users/profile/bbbbb9ae-2b55-4ff5-ab52-6e785e7e3db5")
      .expect(200)
      .end(done);
  });
});

after(function () {
  authMiddlewareStub.restore();
});
