import React, { useContext } from 'react'
import { CountCT } from '../layout/client'

type Props = {}

const Footer = (props: Props) => {
  const [count,setCount] = useContext(CountCT) as any
  return (
    <div className="p-3 mb-2 bg-warning text-dark text-center">
       <button onClick={()=>setCount(count+1)}>Thay đổi Value context</button>
    </div>
  )
}
export default Footer;