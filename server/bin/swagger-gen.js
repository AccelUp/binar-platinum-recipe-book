#!/usr/bin/env node

import swaggerAutogen from "swagger-autogen";

const doc = {
  openapi: "3.1.0",
  info: {
    title: "Binar: Recipe-Book Swagger Documentation",
    version: "0.1.0",
    description: "This is a simple CRUD API application made with Express and documented with Swagger",
  },
  servers: [
    {
      url: "http://localhost:8000", // bisa di ganti pakai port kalian secara dynamic
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
  },
};

const outputFile = "swagger-output.json";
const routes = ["src/views/*.router.js"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

const generateSwagger = async () => {
  const swaggerGenerator = swaggerAutogen({ openapi: "3.0.0" });
  await swaggerGenerator(outputFile, routes, doc);
};

generateSwagger();
