const mongoose = require("mongoose")

const connect = async () => {
    if (mongoose.connection.readyState >= 1) {
        return
    }
    try {
        await mongoose.connect(process.env.MONGO_URI, { family: 4, serverSelectionTimeoutMS: 5000 })
    } catch (error) {
        throw error
    }
}

module.exports = connect