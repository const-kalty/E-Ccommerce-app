import React, {useState} from "react";
import './SignUp.styles.scss'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth} from "../../utils/firebase/Firebase";
import FormInput from "../form/FormInput";
import Button from "../button/Button";


const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormField] = useState(defaultFormField);
  const {displayName, email, password, confirmPassword} = formFields;


  const resetFormFields = ()=>{
    setFormField(defaultFormField)
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }
    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
    
      await createUserDocFromAuth(user, {displayName});
      resetFormFields();

    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create account,email already in use!!!");
      }
      console.log("user encounters an error", error);
    }
  };

  const changeHandler = (event) => {
    const {name, value} = event.target;
    setFormField({...formFields, [name]: value});
  };
  return (
    <div className="sign-up-container">
    <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form action="" onSubmit={submitHandler}>
        
     <FormInput label="Display Name"
          required
          type="text"
          onChange={changeHandler}
          name="displayName"
          value={displayName}
        />
     <FormInput label="Email"
          required
          type="email"
          onChange={changeHandler}
          name="email"
          value={email}
        />

       <FormInput label="Password"
          required
          type="password"
          onChange={changeHandler}
          name="password"
          value={password}
        />
       <FormInput label ="Confirm Password"
          required
          type="password"
          onChange={changeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button buttonType="inverted" type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
