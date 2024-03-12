import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'


type Props = {}
const Client = (props:Props) => {
  return (
    <>
      <Header title='LOGO'/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Client
