import request from "supertest";
import { app } from "../app";
import createConnection from "../database"

describe("Users", () => {
  beforeAll(async() => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  xit("Should be able to create user", async() => {
    const response = await request(app).post("/users")
      .send({
        email: "testAdmin@gmail.com",
      });
    expect(response.status).toBe(201);
  })
})
