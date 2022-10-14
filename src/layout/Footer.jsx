import React from 'react'
import {FaGithub} from 'react-icons/fa'
function Footer() {
    const footerYear = new Date().getFullYear()
  return (
    <footer className='footer'>
        <FaGithub className='footer-icon'/>
        <p className='footer-text'>Copyright &copy; {footerYear} All rights </p>
    </footer>
  )
}

export default Footer