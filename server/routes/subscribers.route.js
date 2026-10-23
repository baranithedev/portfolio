const subscribers_route = require("express").Router()
const subscribers_controller = require("../controllers/subscribers.controller")
const verifier_token = require("../middlewares/create_token")
const validate_token = require("../middlewares/validate_token")

subscribers_route.post("/subscriber/send", verifier_token, validate_token, subscribers_controller)

module.exports = subscribers_route