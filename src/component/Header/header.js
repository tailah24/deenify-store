import React from 'react'
import '../../styles/header.scss'
import { Link } from 'react-router-dom'

  const Header = () => {
      return (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <h2 className='logo'>Deenify</h2>
        </Link>
        <div className='options'>
            <Link className='option' to='shop'>
                SHOP
            </Link>
            <Link className='option' to='shop'>
                CONTACT
            </Link>
        </div>

    </div>
      )}

export default Header