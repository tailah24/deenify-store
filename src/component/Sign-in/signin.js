import React, { useState } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import './sign-in.scss'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'


function SignIn(props) {
    const [email, setEmail] = useState( '' )
    const [password, setPassword] = useState( '' )


   const handleSubmit = async e => {
        e.preventDefault()
        setEmail('')
        setPassword('')

        try {

            await auth.signInWithEmailAndPassword(email, password)
            setEmail('')
            setPassword('')

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form >
                <FormInput name='email' value={email} type='email' label='Email' required onChange={e => setEmail(e.target.value)} />
                <FormInput name='password' value={password} type='password' label='Password' required  onChange={e => setPassword(e.target.value)}/>
                
            <div className='buttons'>
                <CustomButton type='submit' value='Submit Form' onSubmit={handleSubmit}> Sign In </CustomButton>
                <CustomButton type='button' onClick={signInWithGoogle}  isGoogleSignIn = {true} > Sign In with google</CustomButton>
                </div>
                
                
            </form> 
        </div>
    );
}

export default SignIn;

