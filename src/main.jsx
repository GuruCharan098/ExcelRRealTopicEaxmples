import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RouterComponent from './RouterExample/RouterComponent.jsx'
import { BrowserRouter } from 'react-router-dom'
import CurdOperation from './ApiCrud/CrudOperation.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>
    <App />
    <CurdOperation/>
  </StrictMode>
)
