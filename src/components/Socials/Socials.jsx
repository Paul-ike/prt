import React from 'react'
import './Socials.css'
import { Link } from 'react-router-dom'

const Socials = () => {
  return (
    <>
      <div className='socials-body'>
        <ul>
          <li style={{ '--i': -3, '--clr': '#1877f2' }} data-text="Facebook">
            <Link to={'/'}>
            <span><i class="fa-brands fa-facebook-f"></i></span>Facebook
            </Link>
          </li>
          <li style={{ '--i': -2, '--clr': '#25d366' }} data-text="Whatsapp">
            <Link to={'/'}>
            <span><i class="fa-brands fa-whatsapp"></i></span>Whatsapp
            </Link>
          </li>
          <li style={{ '--i': -1, '--clr': '#1da1f2' }} data-text="Twitter">
            <Link to={'/'}>
            <span><i class="fa-brands fa-twitter"></i></span>Twitter
            </Link>
          </li>
          <li style={{ '--i': 0, '--clr': '#c32aa3' }} data-text="Instagram">
            <Link to={'/'}>
            <span><i class="fa-brands fa-instagram"></i></span>Instagram
            </Link>
          </li>
          <li style={{ '--i': 1, '--clr': '#ff0000' }} data-text="YouTube">
            <Link to={'/'}>
            <span><i class="fa-brands fa-youtube"></i></span>YouTube
            </Link>
          </li>
          <li style={{ '--i': 2, '--clr': '#0a66c2' }} data-text="LinkedIn">
            <Link to={'/'}>
            <span><i class="fa-brands fa-linkedin-in"></i></span>LinkedIn
            </Link>
          </li>
          <li style={{ '--i': 3, '--clr': '#005766' }} data-text="Back">
            <Link to={'/'}>
            <span><i class="fa-solid fa-backward"></i></span>Back
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Socials