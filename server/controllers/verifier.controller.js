const jwt = require("jsonwebtoken")
const subscribers_model = require("../models/subscribers.model")

const verifier_controller = async (req, res, next) => {
    try {
        const { token } = req.body

        if (!token) return res.status(400).json({ success: false, message: "Verification failed" })
            
        const decoded = jwt.verify(atob(token), process.env.JWTTOKEN)
        const user = await subscribers_model.findOne({ user: decoded.user })
        
        if (Date.now() > decoded.expiresAt) return res.status(400).json({ success: false, message: "Verification link was expired" })
        if (!user) return res.status(400).json({ success: false, message: "Verification failed" })
        if (user.is_verified) return res.status(200).json({ success: false, message: "You already subscribed" })
        if (!user.tem_token && user.tem_token !== decoded.value) return res.status(400).json({ success: false, message: "Invalid verification token" })

        user.is_verified = true
        user.tem_token = null
        await user.save()

        return res.status(200).json({ success: true, message: "Verification successful" })
    } catch (error) {
        next(error)
    }
}

module.exports = verifier_controller