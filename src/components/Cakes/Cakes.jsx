import React from 'react'
import './Cakes.css'
import { Link } from 'react-router-dom'
import { chocolate, fruit, strawberry, vanilla } from '../../assets'

const Cakes = () => {
  return (
    <div className='cakes-body'>
      <Link to={'/'}><i className="fa-solid fa-backward"></i></Link>
      <div className='cakes-container'>
        <div className='cakes-glass' style={{ '--r': -15 }} data-text="Chocolate-Cake"><img src={chocolate} alt='cake-pic'/></div>
        <div className='cakes-glass' style={{ '--r': 5 }} data-text="Vanilla-Cake"><img src={vanilla} alt='cake-pic'/></div>
        <div className='cakes-glass' style={{ '--r': 25 }} data-text="Strawberry-Cake"><img src={strawberry} alt='cake-pic'/></div>
        <div className='cakes-glass' style={{ '--r': -15 }} data-text="Fruit-Cake"><img src={fruit} alt='cake-pic'/></div>
      </div>
    </div>
  )
}

export default Cakes