import React from 'react';
import SignUpForm from './SignUpForm';
import HomeComponent from './HomeComponent';
const LogInForm = ({switchComponent}) => {
const handleReplace = () => {
    // Multiple parameters: new component and config with multiple props
    replaceComponent(LogInForm, {component:home,
      
    })
  };
  return (
    <form className='logInForm'>
        <h3>Welcom Back</h3>
        <p>Sign in to your KnapsackShop account</p>
        <label>User Name</label>
        <input type='email' id="logInName" name="logInName" required />
        <label>PassWord</label>
        <input type="password" id="LogInPassWord" name="logInPassWord" required />
        <div className='box-logIn-foot'>
          <button id="Abort"

          onClick={( ) =>{
          switchComponent(HomeComponent , {component: "Home", mpros: {IsLogIn: false, itemText:"Log In"}})}

          } 
          >Abort</button>
          <button type="submit" value="Submit" 
          onClick={( ) =>{
          switchComponent(HomeComponent , {component: "Home", mpros: {IsLogIn: True, itemText:"DashBoard"}})}

          } 
        //   onClick={() => switchComponent({
        //     component: "Home",
        //     pros: {IsLogIn: true, itemText:"DashBoard" }
        //  })} 
          >Sign In</button>
        </div>  
        <p>Don't have a account<a id="logInLink" 
       onClick={( ) =>{
          switchComponent(SignUpForm , {component: "SignUp", mpros: { }})}

          } 
        >Sign Up</a></p>
    </form> 
  );
}

export default LogInForm;