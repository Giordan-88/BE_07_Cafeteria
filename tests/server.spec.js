const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {

    // 1. GET /cafes
  it("GET /cafes debe retornar status 200 y un arreglo con al menos un objeto", async () => {
    const response = await request(server).get("/cafes").send();
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });

  // 2. DELETE /cafes/:id
  it("DELETE /cafes/:id con un id inexistente debe retornar 404", async () => {
    const idInexistente = 999;
    const response = await request(server).delete(`/cafes/${idInexistente}`).send();
    expect(response.status).toBe(404);
  });

  // 3. POST /cafes
  it("POST /cafes debe agregar un nuevo café y retornar 201", async () => {
    const nuevoCafe = { id: 5, nombre: "Latte" };
    const response = await request(server).post("/cafes").send(nuevoCafe);
    expect(response.status).toBe(201);
    expect(response.body).toContainEqual(nuevoCafe);
  });

  // 4. PUT /cafes/:id
  it("PUT /cafes/:id con id distinto al payload debe retornar 400", async () => {
    const cafe = { id: 6, nombre: "Expreso" };
    const response = await request(server).put("/cafes/1").send(cafe);
    expect(response.status).toBe(400);
  });

});
