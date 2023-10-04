import React from 'react'
import './Picnics.css'
import { Link } from 'react-router-dom'
import { bashnic, coupnic, frienic, grounic } from '../../assets'

const Picnics = () => {
  return (
    <div className='picnics-body'>
      <Link to={'/'}><i className="fa-solid fa-backward"></i></Link>
      <div className='picnics-container'>
        <div className='picnics-glass' style={{ '--r': -15 }} data-text="Frienic - Friends"><img src={frienic} alt='picnic-pic'/></div>
        <div className='picnics-glass' style={{ '--r': 5 }} data-text="Grounic - Group"><img src={grounic} alt='picnic-pic'/></div>
        <div className='picnics-glass' style={{ '--r': 25 }} data-text="Coupnic - Couples"><img src={coupnic} alt='picnic-pic'/></div>
        <div className='picnics-glass' style={{ '--r': -83 }} data-text="Bashnic - Party"><img src={bashnic} alt='picnic-pic'/></div>
      </div>
    </div>
  )
}

export default Picnics