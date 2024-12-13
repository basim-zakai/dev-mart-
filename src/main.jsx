import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './index.scss'
import App from './App.jsx'
import   { persistor, store } from './redux/features/store.jsx'
import { Provider } from 'react-redux'
import SidebarProvider from './context/sidebar.context.jsx'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   

<Provider  store = {store}>
<PersistGate loading={null} persistor={persistor}>


   <SidebarProvider>
    <App />
   </SidebarProvider>
</PersistGate>
</Provider>
   
  </StrictMode>,
)
