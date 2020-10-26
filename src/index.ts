import express from "express"
import dotenv from "dotenv"
import { createServer } from "http"

import "./core/db"
import createRoutes from "./core/routes"

const app = express()
const http = createServer(app)

dotenv.config()

createRoutes(app)

http.listen(process.env.PORT, function() {
  console.log(`Server: http://localhost:${process.env.PORT}`)
})