const request = require("supertest");
const server = require("./server.js");

describe(" GET /", () => {
  it("should return 200 with await", async () => {
    const res = await request(server).get("/");
    expect(res.status).toBe(200);
  });
  //   it("should return JSON type", async () => {
  it("should return text/html type", async () => {
    const res = await request(server).get("/");
    // expect(res.type).toBe("application/json");
    expect(res.type).toBe("text/html");
  });
});
