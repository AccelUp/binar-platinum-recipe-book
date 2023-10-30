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

app.use(userRouter);

describe("User Router", function () {
  it("should post a user", async function () {
    const uuidStub = sinon.stub(uuid, "v4").returns("sample-uuid");

    const response = await request(app).post("/api/v1/users/register").send({
      username: "Picky Pickle",
      password: "poki_eater",
    });

    expect(response.status).toBe(201);

    uuidStub.restore();
  });

  it("should get a list of users", function (done) {
    request(app).get("/api/v1/users").expect(200).end(done);
  });

  it("should get a user profile by ID", function (done) {
    request(app)
      .get("/api/v1/users/profile/742405ea-ef81-461b-9a28-9f0b1f8a7528")
      .expect(200)
      .end(done);
  });
});

after(function () {
  authMiddlewareStub.restore();
});
