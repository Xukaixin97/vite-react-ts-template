import { ClickToComponent } from 'click-to-react-component'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.module.less'
import './tailwind.css'
import 'antd/dist/reset.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ClickToComponent />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
