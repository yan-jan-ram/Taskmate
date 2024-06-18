import React from 'react'
import Logo from '../assets/logo.png'
import './header.css'

const Header = () => {
  return (
    <>
      <img className='header-logo' src={Logo} alt="Header logo" />
    </>
  )
}

export default Header
