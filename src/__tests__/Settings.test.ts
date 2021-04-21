import request from "supertest";
import { app } from "../app";
import createConnection from "../database";

describe("Settings", () => {
  beforeAll(async() => {
    const connection = await createConnection();
    await connection.runMigrations();
  });
  
  it("Should be able a new settings", async() => {
    const response = await request(app).post("/settings")
      .send({
        chat: true,
        username: "Admin",
      });
    expect(response.status).toBe(201);
  })
});
