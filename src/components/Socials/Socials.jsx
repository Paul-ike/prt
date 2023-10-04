import React from 'react'
import './Socials.css'
import { Link } from 'react-router-dom'

const Socials = () => {
  return (
    <>
      <div className='socials-body'>
        <ul>
          <li style={{ '--i': -3, '--clr': '#1877f2' }} data-text="Facebook">
            <Link target='blank' to={'https://www.facebook.com/107367741000662/'}>
            <span><i class="fa-brands fa-facebook-f"></i></span>Facebook
            </Link>
          </li>
          <li style={{ '--i': -2, '--clr': '#25d366' }} data-text="Whatsapp">
            <Link target='blank' to={'https://wa.me/254705673353'}>
            <span><i class="fa-brands fa-whatsapp"></i></span>Whatsapp
            </Link>
          </li>
          <li style={{ '--i': -1, '--clr': '#1da1f2' }} data-text="Twitter">
            <Link target='blank' to={'https://twitter.com/tabbzthebaker'}>
            <span><i class="fa-brands fa-x-twitter"></i></span>Twitter
            </Link>
          </li>
          <li style={{ '--i': 0, '--clr': '#c32aa3' }} data-text="Instagram">
            <Link target='blank' to={'https://instagram.com/tabbz_the_baker'}>
            <span><i class="fa-brands fa-instagram"></i></span>Instagram
            </Link>
          </li>
          <li style={{ '--i': 1, '--clr': '#0a66c2' }} data-text="Call">
            <Link target='blank' to={'tel:+254705673353'}>
            <span><i class="fa-solid fa-phone"></i></span>Call
            </Link>
          </li>
          <li style={{ '--i': 2, '--clr': '#005766' }} data-text="Back">
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