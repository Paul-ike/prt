import React from 'react'
import './Cakes.css'
import { Link } from 'react-router-dom'

const Cakes = () => {
  return (
    <div className='cakes-body'>
      <Link to={'/'}><i className="fa-solid fa-backward"></i></Link>
      <div className='cakes-container'>
        <div className='cakes-glass' style={{ '--r': -15 }} data-text="Chocolate-Cake"><img src='https://wallpapercave.com/wp/wp7367665.jpg' alt='cake-pic'/></div>
        <div className='cakes-glass' style={{ '--r': 5 }} data-text="Vanilla-Cake"><img src='https://images3.alphacoders.com/104/1042455.jpg' alt='cake-pic'/></div>
        <div className='cakes-glass' style={{ '--r': 25 }} data-text="Strawberry-Cake"><img src='https://rare-gallery.com/uploads/posts/560347-cake-4k-wallpaper.jpg' alt='cake-pic'/></div>
        <div className='cakes-glass' style={{ '--r': -15 }} data-text="Fruit-Cake"><img src='https://c0.wallpaperflare.com/preview/338/621/223/berries-berry-blackberry-blueberry.jpg' alt='cake-pic'/></div>
      </div>
    </div>
  )
}

export default Cakes