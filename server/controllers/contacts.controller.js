const template_manager = require("../cores/template_manager.core")
const { transporter } = require("../config/mail.server")

const contacts_controller = async (req, res, next) => {
    try {
        const { lead, subject, description } = req.body
        const template = !!lead? template_manager("project_lead.html", "utf-8",{ type: lead?.name, price: lead?.price, subject, description }): 
          template_manager("conversation.html", "utf-8",{
            subject,
            description
          })
        await transporter.sendMail({
            from: `"${!!req.body.lead? "LEAD": "CONVERSATION"} | ${req.body.full_name}" <${req.body.from_email}>`,
            to: `<${process.env.BUSSINESS_EMAIL_USER}>`,
            subject: req.body.subject,
            html: template,
            priority: "high"
        })
        return res.status(200).json({ success: true, message: "Thankyou for your request!. Return Response will arrive within 1-2 days." })
    } catch (error) {
        next(error)
    }
}

module.exports = contacts_controller