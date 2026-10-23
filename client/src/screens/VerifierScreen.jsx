import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import api from "../api/api.config"

const initialDataState = {
  message: null,
  loading: false,
  error: null
}

const VerifierScreen = () => {
  const [ data, setData ] = useState(initialDataState)
  const [searchParams] = useSearchParams()
  const providedToken = !!searchParams && searchParams.get("token")
  if (!providedToken) return
  useEffect(() => {
      setData((prev) => ({ ...prev, loading: true }))
      api.post("/subscribers/verify", { token: providedToken.toString() })
      .then((response) => {
        setData((prev) => ({ ...prev, message: response.data.message, loading: false, error: null }))
      })
      .catch((error) => {
        setData((prev) => ({ ...prev, message: null, loading: false, error: error.response.data.message }))
      })
      .finally(() => {
        setData((prev) => ({ ...prev, loading: false }))
      })
  }, [])

  return (
    <div>
      { !data.loading? (
          <div>
            <h2>{ data.message || data.error }</h2>
            <p>{ !data.error && "Verification Successful! You may now safely close this tab. Your verification process is complete" }</p>
          </div>
        ): (
          <div>
            <h1>Please wait...</h1>
            <p>Please wait until the verification process is complete</p>
          </div>
        )
      }
    </div>
  )
}

export default VerifierScreen