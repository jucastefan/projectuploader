import React from 'react'
import classes from './Header.module.css'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <div className="container pt-5">
      <img src={logo} className={`${classes.logo} img-fluid`}></img>
      <p className='text-dark fs-1 fw-bold'>ProjectUploader</p>
    </div>
  )
}

export default Header
