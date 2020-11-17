import express from "express"
import dotenv from "dotenv"
import { createServer } from "http"

//import "./core/db"
import createRoutes from "./core/routes"
import  mongoose  from "mongoose"

const app = express()
const http = createServer(app)
async function start() {
  try {
      await mongoose.connect('mongodb://localhost:27017/sados_backend', {
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false,
      })
  } catch(e) {
      console.log(e)
  }
}
start()

dotenv.config()

createRoutes(app)

http.listen(process.env.PORT, function() {
  console.log(`Server: http://localhost:${process.env.PORT}`)
})