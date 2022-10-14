import React from 'react'
import { Link } from 'react-router-dom'
import error from '../../images/error.png'
function NotFound() {
  return (
    <div className='notfound'>
        <img src={error} alt="error" className="error__img" />
        <h4 className="error__title">This page doesn't exist</h4>
        <p className="error__text">Would do you like to <Link to="/">return to home page</Link></p>
    </div>
  )
}

export default NotFound