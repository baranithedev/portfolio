import { createContext, useState, useEffect, useContext } from "react"

const DataContext = createContext(null)

export const DataProvider = ({ children }) => {
  const [response, setResponse] = useState({
    fetch_data: null,
    loading: true,
    error: null
  })
  useEffect(() => {
    const controller = new AbortController()
      const fetchDataFromJSON = async () => {
        try {
          const response = await fetch("/data/__portfolio.json", { signal: controller.signal })
          const data = await response.json()
          setResponse(prev => ({ ...prev, fetch_data: data, loading: false, error: null }))
        } catch (error) {
          setResponse(prev => ({ ...prev, fetch_data: null, loading: true, error: error }))
        }
        finally {
          if (!controller.signal.aborted) {
             setResponse(prev => ({ ...prev, loading: false }))
          }
        }
      }
      fetchDataFromJSON()
      return () => controller.abort()
    }, [children])
    return (
        <DataContext.Provider value={response}>
          {children}
        </DataContext.Provider>
    )
}

export const useDataHook = () => {
    const context = useContext(DataContext)
    if (context === null) {
        throw new Error("useDataHook must be used inside DataProvider")
    }
    return context
}