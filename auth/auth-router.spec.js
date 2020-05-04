const request = require("supertest");
const server = require("../api/server.js");

describe("POST /register", () => {
  it("Should save user to database", async (done) => {
    const res = await request(server).post("/api/auth/register").send({
      username: "dummy",
      password: "dummy",
    });
    expect(res.status).toBe(201);
    done();
  });
  it("should return res.type text/html", async (done) => {
    const res = await request(server).post("/api/auth/register");
    expect(res.type).toBe("text/html");
    done();
  });
});
