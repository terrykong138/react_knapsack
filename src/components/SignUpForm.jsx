import React from 'react'

const SignUpForm = ({switchComponent}) => {
  return (
    
     <form className='SignUpForm'>
        <h3>Create Account</h3>
        <p>Join KnapsackShop and start your adventure</p>
        <label>User Name</label>
        <input type='email' id="signUpName" name="signUpName" />
        <label>PassWord</label>
        <input type="password" id="signUpPassWord" name="signUpPassWord" />
        
        <button type="submit" value="Submit">Sign Up</button>
        <p>Already have a account<a href="#" id="signupLink" 
        onClick={() => switchComponent({
            component: "LogIn",
            pros: {}
         })} 
        >Log In</a></p>
    </form> 
  );
}

export default SignUpForm;