const contacts_route = require("express").Router()
const contacts_controller = require("../controllers/contacts.controller")

contacts_route.post("/contact/project/request", contacts_controller)

module.exports = contacts_route