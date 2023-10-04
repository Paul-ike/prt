import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
    <div className='body'>
        <ul>
            <li style={{ '--i': 6 }}><Link to={'/'}>Welcome to Cakes By Tabbz</Link></li>
            <li style={{ '--i': 5 }}><Link to={'/about'}>About</Link></li>
            <li style={{ '--i': 4 }}><Link to={'/service'}>Services</Link></li>
            <li style={{ '--i': 3 }}><Link to={'/cake'}>Cakes</Link></li>
            <li style={{ '--i': 2 }}><Link to={'/picnic'}>Picnics</Link></li>
            <li style={{ '--i': 1 }}><Link to={'/contact'}>Contact</Link></li>
        </ul>
    </div>
    </>
  )
}

export default Menu