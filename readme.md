# API REST de Pizzas (Node.js + MongoDB)

API desarrollada con Express y el driver oficial nativo de MongoDB para gestionar un CRUD completo de pizzas.

## 1. Requisitos y Base de Datos
* **MongoDB:** Tener MongoDB corriendo localmente en el puerto `27017`.
* **Conexión:** `mongodb://root:12345678@localhost:27017/`
* **Base de datos:** `pizzas`
* **Colección:** `pizzas`

Formato de documento esperado:
```json
{
  "id": 1,
  "nombre": "Mexicana",
  "descripcion": "Jalapeño, Chorizo"
}

2. Instalación y Ejecución
Instalar dependencias:
npm install
Iniciar el servidor:
npm run dev
El servidor arrancará en: http://localhost:3000

3. Endpoints (Rutas)
GET /api/v1/pizzas - Obtiene todas las pizzas.

GET /api/v1/pizzas/:id - Obtiene una pizza por su id.

POST /api/v1/pizzas - Inserta una pizza (enviar JSON con id, nombre, descripcion).

PUT /api/v1/pizzas/:id - Actualiza nombre y descripcion de la pizza indicada.

DELETE /api/v1/pizzas/:id - Elimina la pizza por su id.

Crear una colección llamada CRUD Pizzas.
Agregar las 5 peticiones en este orden: POST -> GET todas -> GET por id -> PUT -> DELETE.