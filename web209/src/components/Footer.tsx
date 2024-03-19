import React, { useContext } from 'react'
import { CountCT } from '../layout/client'

type Props = {}

const Footer = (props: Props) => {
  const [state,setState] = useContext(CountCT) as any
  return (
  
    <>
    {state}
    <div className="p-3 mb-2 bg-warning text-dark text-center">
        
        </div>
    </>
  )
}
export default Footer;