import React from 'react'
import {Link} from 'react-router-dom'
import {FaGithub} from 'react-icons/fa'
import PropTypes from 'prop-types'

function Navbar({title}) {
  return (
    <header className='navbar'>
        <div className='container navbar-nav'>
            <Link to="/" className='navbar-logo'>
                <FaGithub className='navbar-icon' />
                <span className='navbar-title'>{title}</span>
            </Link>
            <div className="navbar-list">
                <Link to="/" className='navbar-link'>Home</Link>
                <Link to="/about" className='navbar-link'>About</Link>
            </div>
        </div>
    </header>
  )
}

Navbar.defaultProps = {
    title:'Github Finder'
}
Navbar.propType = {
    title:PropTypes.string,
}

export default Navbar