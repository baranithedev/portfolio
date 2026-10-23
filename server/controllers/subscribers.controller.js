const template_manager = require("../cores/template_manager.core")
const subscribers_model = require("../models/subscribers.model")
const { transporter } = require("../config/mail.server")

const subscribers_controller = async (req, res, next) => {
    try {
        const verification_url = `${process.env.CLIENT_ORIGIN}${process.env.VERIFY_ENDPOINT}?token=${req.verifier_token}`
        const user = await subscribers_model.findOne({ user: req.decoded.user })
        const template = template_manager("subscriber.html", "utf-8", { verification_url, timestamp: new Date(req.decoded.expiresAt), minutes: req.time_left / 60 / 1000 })
        if (!user) {
            await subscribers_model.create({
                user: req.decoded.user,
                tem_token: req.decoded.value,
                is_verified: false
            })
        }
        if (!!user && !user.is_verified) {
            user.tem_token = req.decoded.value
            await user.save()
        }
        await transporter.sendMail({
            from: `"BARANIDHARAN.ME" <${process.env.BUSSINESS_EMAIL_USER}>`,
            to: `"Respected Sir/Madam" <${req.body.email}>`,
            subject: "Verify Your E-mail Address",
            html: template
        })
        return res.status(200).json({ success: true, message: "Please check you inbox" })
    } catch (error) {
        next(error)
    }
}

module.exports = subscribers_controller