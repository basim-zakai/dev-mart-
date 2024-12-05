import React from 'react'
import { Topbar } from '../components/headers/top-bar'
import { Navbar } from '../components/headers/navbar'
import { Footer } from '../components/footer/footer'

export const Homepage = () => {
  return (
   <>
   <Topbar></Topbar>
   <Navbar></Navbar>
   <h1>home page</h1>
   <Footer></Footer>
   </>
  )
}
