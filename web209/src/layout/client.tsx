import React, { createContext, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export const CountCT = createContext([0,(e:number)=>{}]) ;
const Client = () => {
  const [count,setCount] = useState(0);
  return (
    <CountCT.Provider value={[count,setCount]}>
    <Header title='LOGO'/>
        <Outlet/>
    <Footer/>
    </CountCT.Provider>
  )
}
export default Client