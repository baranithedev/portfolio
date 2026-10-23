const fs = require("fs")
const path = require("path")
const handlebars = require("handlebars")

const template_manager = (template_file, decoding="utf-8", template_props) => {
    const template_path = path.join(__dirname, "../", "templates", template_file)
    const template_source = fs.readFileSync(template_path, decoding)
    const template = handlebars.compile(template_source)
    return template(template_props)
}

module.exports = template_manager