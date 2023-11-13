import paths from './paths/index.js'
import * as schemas from './schemas/index.js'

const swaggerDocument = {
    openapi: "3.1.0",
    info: {
      title: "API Fatec CRUD",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    paths,
    schemas: {
      ...schemas
    }
  }

  export default swaggerDocument
  