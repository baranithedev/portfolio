const verifier_route = require("express").Router()
const verifier_controller = require("../controllers/verifier.controller")

verifier_route.post("/subscribers/verify", verifier_controller)

module.exports = verifier_route