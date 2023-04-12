import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {AiFillLinkedin} from 'react-icons/ai'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Prayaas</a>

      <ul className='permalinks'>
        <li><a href="/">Home</a></li>
        <li><a href="/Events">Events</a></li>
        <li><a href="/Contribute">Contribute</a></li>
        <li><a href="/Team">Team</a></li>
      </ul>
      
      <div className="footer__socials">
        <a href="https://www.facebook.com/VNIT.PRAYAAS/"><FaFacebookF/></a>
        <a href="https://instagram.com/prayaas__vnit?igshid=YmMyMTA2M2Y="><FiInstagram/></a>
        <a href="https://in.linkedin.com/in/prayaas-vnit-10b808112"><AiFillLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Prayaas Website. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer