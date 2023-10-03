import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
    <div>
        <ul>
            <li style={{ '--i': 6 }}><Link to='/'>Home</Link></li>
            <li style={{ '--i': 5 }}><Link to='/'>About</Link></li>
            <li style={{ '--i': 4 }}><Link to='/'>Services</Link></li>
            <li style={{ '--i': 3 }}><Link to='/'>Portfolio</Link></li>
            <li style={{ '--i': 2 }}><Link to='/'>Our Team</Link></li>
            <li style={{ '--i': 1 }}><Link to='/'>Contact</Link></li>
        </ul>
    </div>
    </>
  )
}

export default Menu