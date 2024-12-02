import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './index.scss'
import App from './App.jsx'
import SidebarProvider from './context/sidebar.context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   


   <SidebarProvider>
    <App />
   </SidebarProvider>
   
  </StrictMode>,
)
