import React from 'react';
import LogInForm from './LoginForm';
import HomeComponent from './HomeComponent';
const SignUpForm = ({switchComponent}) => {
  // const handleSignUp = () => {
  //   if (window.myKnapsackData[isLogIn]===false){
  //      const signInElement = document.getElementById("lonIn");
  //      singnInElement.content ="DashBoard";
  //      window.myKnapsackData[isLogIn] = true;
  //      const signUpElement = document.getElementById("singUp");
  //      singnInElement.content ="Sign Out";
  //      singnInElement.Style.color = "red";
  //      switchComponent( switchComponent(HomeComponent{component: "Home", mpros: {isLogIn: false, itemText: "Log In"  }})}
  // })
  //   }
  // }
  return (
    
     <form className='signUpForm'>
        <h3>Create Account</h3>
        <p>Join KnapsackShop and start your adventure</p>
        <label>User Name</label>
        <input type='email' id="signUpName" name="signUpName" />
        <label>PassWord</label>
        <input type="password" id="signUpPassWord" name="signUpPassWord" />
        
        <button type="submit" value="Submit"
          onClick={( ) =>{
          switchComponent(LogInForm, {component: "LogIn", mpros: {isLogIn: false, sourceItemId: "Submit", itemText: "Log In"  }})}
          } 
        >Sign Up</button>
        <p>Already have a account<a href="#" id="signupLink" 
        onClick={( ) =>{
          switchComponent(LogInForm, {component: "LogIn", mpros: {isLogIn: false,  sourceItemId: "signupLink", itemText: "Log In" }})}
          } 
        >Log In</a></p>
    </form> 
  );
}

export default SignUpForm;