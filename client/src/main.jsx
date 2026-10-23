import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

import "./index.css"
import App from "./App.jsx"
import { ThemeProvider } from "./contexts/ThemeContext"
import { DataProvider } from "./contexts/DataContext.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </DataProvider>
  </StrictMode>
)