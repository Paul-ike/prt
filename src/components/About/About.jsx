import React from 'react'
import './About.css'

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
                  <p style={{ '--i': 1 }}>I specialize in crafting a wide range of delectable baked goods that's enjoyed by people of all ages.</p>
                  <p style={{ '--i': 2 }}>I'm also a coordinator whose specialized in creating memorable outdoor dining experiences.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About