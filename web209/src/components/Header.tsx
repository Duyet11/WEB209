import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { CountCT } from '../layout/client';

type Props = {
    title:string;
}

const Header = (props: Props) => {
  const [count,setCount] = useContext(CountCT) as any
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="#">
        { props.title }
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to={'/details'}>Details</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/demo'}>Demo</NavLink>
          </li>
        </ul>
      </div>
      <div>Số đếm: {count}</div>
    </div>
  </nav>
  )
}
export default Header;