import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { PublicRoute } from './routes/router'


function App() {


  return (
    <>
  <RouterProvider router={PublicRoute}></RouterProvider>
    </>
  )
}

export default App
