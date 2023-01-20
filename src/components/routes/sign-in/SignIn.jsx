import React from 'react'
import { signInWithGooglePopup,createUserDocFromAuth } from '../../../utils/firebase/Firebase.js'

const SignIn = () => {
    const logGoogleUsers = async()=>{
    const {user} = await signInWithGooglePopup();
   const userDocRef = await createUserDocFromAuth(user)
  
    }
  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logGoogleUsers}>sign in with google</button>
    </div>
  );
}

export default SignIn