import { ClickToComponent } from 'click-to-react-component'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ClickToComponent />
    <App />
  </React.StrictMode>,
)
