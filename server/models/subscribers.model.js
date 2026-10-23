const mongoose = require("mongoose")

const subscribers_schema = mongoose.Schema({
    user: {
        trim: true,
        unique: true,
        required: true,
        lowercase: true,
        type: mongoose.SchemaTypes.String
    },
    tem_token: {
        trim: true,
        required: false,
        type: mongoose.SchemaTypes.String
    },
    is_verified: {
        default: false,
        type: mongoose.SchemaTypes.Boolean
    }
})

const subscribers_model = mongoose.model("subscriber", subscribers_schema)

module.exports = subscribers_model