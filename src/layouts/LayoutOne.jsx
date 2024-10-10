import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Banner from '../component/Banner/Banner'

const LayoutOne = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Banner/>
    <Outlet/>
    

    </>
  )
}

export default LayoutOne