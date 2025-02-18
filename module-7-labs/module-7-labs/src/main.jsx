import React from "react"
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

/*createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* All other routing components need this to work */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
