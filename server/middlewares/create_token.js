const crypto = require("crypto")
const jwt = require("jsonwebtoken")

const verifier_token = (req, res, next) => {
    const time_left = 60 * 1000 * 15
    const token = {
        user: req.body.email,
        value: crypto.randomBytes(32).toString("hex"),
        expiresAt: Date.now() + time_left
    }
    req.time_left = time_left
    req.verifier_token = btoa(jwt.sign(token, process.env.JWTTOKEN))
    next()
}
module.exports = verifier_token