const http = require("http")
const app = require("./app")

const server = http.createServer(app)

if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 5000
    server.listen(process.env.PORT, async () => {
        console.log(`Server is running on port ${PORT}`)
    })
}