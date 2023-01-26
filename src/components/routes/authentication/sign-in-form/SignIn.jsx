import React, {useState} from "react";
import "./SignIn.styles.scss";
import FormInput from "../../../form/FormInput";
import Button from "../../../button/Button";
import {signInAuthUserWithEmailAndPassword, signInWithGooglePopup} from "../../../../utils/firebase/Firebase";

const defaultFormField = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormField] = useState(defaultFormField);
  const {email, password} = formFields;

  const resetFormFields = () => {
    setFormField(defaultFormField);
  };

  const signInWithGoogle = async ()=>{
  await signInWithGooglePopup();
  
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email,password);
      
      resetFormFields();
    } catch (error) {
      switch(error.code){
        case  "auth/wrong-password" : alert("incorrect password");
        break;
        case "auth/user-not-found" : alert("no user is associated to this email");
        break;
        default: console.log(error);
      }
      if(error.code === "auth/wrong-password"){
       
      }
    }
  };

  const changeHandler = (event) => {
    const {name, value} = event.target;
    setFormField({...formFields, [name]: value});
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form action="" onSubmit={submitHandler}>
        <FormInput
          label="Email"
          required
          type="email"
          onChange={changeHandler}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          onChange={changeHandler}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">
            Sign In
          </Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
