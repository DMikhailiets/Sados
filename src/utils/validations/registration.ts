 
import { check } from "express-validator"

export default [
  check("email").isEmail().isLength({ min: 3, max: 45 }),
  check("fullname").isLength({ min: 3, max: 15 }),
  check("password").isLength({ min: 3, max: 70 })
]