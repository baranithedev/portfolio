const jwt = require("jsonwebtoken")

const validate_token = (req, res, next) => {
    const token = req.verifier_token
    if (!token) {
        return res.status(400).json({ success: false, message: "Token was not provided" })
    }
    const decoded = jwt.verify(atob(token), process.env.JWTTOKEN)
    req.decoded = decoded
    next()
}

module.exports = validate_token