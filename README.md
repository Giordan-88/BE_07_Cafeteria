📌 Resumen del desafío – Cafetería Nanacao

El desafío consistió en desarrollar una API REST con Express que gestionara una lista de cafés almacenados en un archivo JSON, y en implementar tests automatizados con Jest y Supertest para validar su correcto funcionamiento.

Las pruebas cubren los siguientes casos:

GET /cafes → debe retornar un arreglo con al menos un café y status 200.

DELETE /cafes/:id → si el id no existe, debe devolver 404.

POST /cafes → permite agregar un nuevo café y debe retornar 201.

PUT /cafes/:id → si el id de la URL no coincide con el del payload, debe retornar 400.

De esta forma se asegura que las operaciones básicas de la API (lectura, creación, actualización y eliminación) funcionen correctamente bajo distintos escenarios.

📌 Challenge Summary – Nanacao Coffee Shop

The challenge consisted of developing a REST API with Express to manage a list of coffees stored in a JSON file, and implementing automated tests with Jest and Supertest to validate its correct functionality.

The tests cover the following cases:

GET /cafes → should return an array with at least one coffee and status 200.

DELETE /cafes/:id → if the id does not exist, it should return 404.

POST /cafes → should allow adding a new coffee and return 201.

PUT /cafes/:id → if the id in the URL does not match the one in the payload, it should return 400.

This ensures that the API’s basic operations (read, create, update, delete) work correctly under different scenarios.
