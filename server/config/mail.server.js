const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_SERVER,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
        user: process.env.BUSSINESS_EMAIL_USER,
        pass: process.env.MAIL_SERVER_PASS
    }
})

module.exports = { transporter }