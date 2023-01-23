
import React from 'react'
import SignUp from '../../sign-up-form/SignUp.jsx';
import SignIn from './sign-in-form/SignIn.jsx';
import './Authentication.styles.scss'

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignIn/>
      <SignUp/>
    </div>
  );
}

export default Authentication