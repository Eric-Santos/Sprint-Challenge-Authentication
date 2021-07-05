const request = require("supertest");
const server = require("../api/server");

const db = require("../database/dbConfig");

describe("GET at jokes-router with auth", () => {
  beforeAll(async () => {
    await db("users").truncate();
  });
  const user = { username: "eric", password: "baker" };

  describe("test jokes endpoints", () => {
    it("should test error handling, return status 401", async () => {
      const res = await request(server).get("/api/jokes/");
      expect(res.status).toBe(401);
    });
    it("should return error message using authentication middleware", async () => {
      const res = await request(server).get("/api/jokes/");
      expect(res.get("Content-type")).toBe("application/json; charset=utf-8");
    });
  });
});
