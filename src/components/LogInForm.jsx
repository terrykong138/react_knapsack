import React from 'react';
import SignUpForm from './SignUpForm';
import HomeComponent from './HomeComponent';
const LogInForm = ({switchComponent}) => {
const signInHandleReplace = () => {
    // Multiple parameters: new component and config with multiple props
     const logInElement = document.getElementById("logIn");
            logInElement.textContent = "Dash Board";
            window.myKnapsackData.isLogIn=true;
            window.myKnapsackData.logInItemState="dashBoard";

            const signUpElement = document.getElementById("signUp");
             signUpElement.textContent = "Log Out";
             signUpElement.style.color = "red";
             window.myKnapsackData.signUpItemState = "logOut";
    switchComponent(HomeComponent, {component: "Home", mpros: {IsLogIn: true, sourceItemId:"signIn", itemText:"DashBoard"}})
  }

          
  
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
          <button  onClick={signInHandleReplace}
          // onClick={( ) =>{
          // switchComponent(HomeComponent, {component: "Home", mpros: {IsLogIn: True, sourceItemId:"signIn", itemText:"DashBoard"}})}

          // } 
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