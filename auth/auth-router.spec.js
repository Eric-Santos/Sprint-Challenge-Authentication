const request = require("supertest");
const server = require("../api/server.js");

const db = require("../database/dbConfig");

describe("test register and login endpoints", () => {
  beforeAll(async () => {
    await db("users").truncate();
  });
  const user = { username: "eric", password: "baker" };
  //test register endpoint
  describe("POST to /register", () => {
    it("Should save user to database", async (done) => {
      const res = await request(server).post("/api/auth/register").send(user);
      expect(res.status).toBe(201);
      done();
    });
    it("should return res.type text/html", async (done) => {
      const res = await request(server).post("/api/auth/register");
      expect(res.type).toBe("text/html");
      done();
    });
  });
  //test login endpoint
  describe("should test login endpoint", async () => {
    it("should return return res.status(200) when registration happens");
    const res = await request(server).post("/api/auth/login").send(user);
    expect(res.status).toBe(200);
    it("should return a 401 credentials are not correct", async (done) => {
      const res = await request(server).post("/api/auth/login").send({
        username: "eri9c",
        password: "987654",
      });
      expect(res.status).toBe(401);
    });
  });
});
