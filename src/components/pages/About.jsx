import React from 'react'

function About() {
  return (
        <div className="about container">
            <h1 className='about-title'>Github Finder</h1>
            <h3 className='about__post-title'>This Web-Project for Testing</h3>
            <p className="about-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente vel porro minima vitae voluptatum aliquam fuga veritatis commodi provident deleniti dolor iure, facilis totam amet nesciunt quaerat?</p>
            <a href="tel:+99890000000" className='about-contact'><span>Contact Us: </span>+34834898789</a>
            <a href="mailto:example@gmail.com" className='about-contact'><span>Contact Us: </span>example@gmail.com</a>
        </div>
  )
}

export default About