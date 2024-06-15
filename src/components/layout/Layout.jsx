import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../header/Navigation'
import Footer from '../footer/Footer'

function Layout() {
  return (
    <>
    <Navigation></Navigation>
    <div >
       <Outlet/>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Layout