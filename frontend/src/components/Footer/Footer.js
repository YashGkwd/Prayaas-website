import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Prayaas</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#contribute">Contribute</a></li>
        <li><a href="#team">Team</a></li>
      </ul>
      
      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Prayaas Website. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer