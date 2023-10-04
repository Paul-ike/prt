import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about-body'>
    <div className='about-container'>
        <div className='box' data-color='clr1'>
            <div className='imgBx'>
                <img src='https://wallpapercave.com/wp/wp6632941.jpg' alt='pic' />
            </div>
            <div className='glass'>
                <h3>My name is Tasha.<br/><span>The Baker.</span></h3>
                <div className='p'>
                  <Link to={'/cake'} className='link'><p style={{ '--i': 1 }}>I specialize in crafting a wide range of delectable baked goods that's enjoyed by people of all ages.</p></Link>
                  <Link to={'/picnic'} className='link'><p style={{ '--i': 2 }}>I'm also a coordinator whose specialized in creating memorable outdoor dining experiences.</p></Link>
                </div>
                <Link to={'/'}><i className="fa-solid fa-backward"></i></Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About