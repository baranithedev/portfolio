const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()
require("dotenv").config({
    path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV || "development"}`)
})

const subscribers_route = require("./routes/subscribers.route")
const verifier_route= require("./routes/verifier.route")
const contacts_route = require("./routes/contacts.route")

const connect = require("./config/db.connect")
const return_error = require("./middlewares/return_error.log")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: process.env.CLIENT_ORIGIN, methods: ["GET", "POST"] }))

app.use(async (req, res, next) => {
    try {
        await connect()
        next()
    } catch (error) {
        res.status(500).json({ success: false, message: "Database connection failed" })
    }
})

app.get("/api/v1/healthcheckup", (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: "Server is running perfectly..."
        })
    } catch (error) {
        next(error)
    }
})

app.use("/api/v1", subscribers_route)
app.use("/api/v1", verifier_route)
app.use("/api/v1", contacts_route)

app.use(return_error)

module.exports = app