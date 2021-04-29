import React from 'react'
import './userAccount.scss'
import SignIn from '../../component/Sign-in/signin'
import SignUp from '../../component/sign-up/sign-up'


const UserAccount = () => (
    <div className='user-account'>
        <SignIn />
        <SignUp />
    </div>
)


export default UserAccount