import React from 'react'
import '../../styles/header.scss'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'

  const Header = ({ currentUser }) => {
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
            {
                currentUser ? 
                <div className='option' onClick = {() => auth.signOut()} > SIGN OUT </div>
                :
                <Link className='option' to='/signin' > SIGN IN</Link>
            }
        </div>

    </div>
      )}

export default Header