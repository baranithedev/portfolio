import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_V1_URL,
    method: ["GET", "POST"]
})

export default api