import React from 'react'
import { useState,useCallback } from 'react';
import LogInForm from './LoginForm';
import SignUpForm from './SignUpForm';
// import NavbarHome from './NavbarHome';
// import ContentCards from './ContentCards';
import HomeComponent from './HomeComponent';
import Navbar from './Navbar';
// import LogInForm from './LoginForm';
// import SignUpForm from './SignUpForm';
import DashBoardForm from './DashBoardForm';
import ViewDetails from "./ViewDetails"
import CartForm from './CartForm';

const MainBoard = () => {
const [activeComponent, setActiveComponent] = useState({component:"Home", pros:{isLogIn: false, itemText: "Home" }} );
const [activeLogInState, setActiveLogInState] = useState({isLogIn: false, itemText: "Log In"})
const [CurrentComponent, setCurrentComponent] = useState(() => HomeComponent);
const [componentConfig, setComponentConfig] = useState({component: "Home", mpros: {isLogIn: false, sourceItemId: "HomeComponent", itemText: "Log In" }});

const handleReplaceComponent = useCallback((newComponent, config) => {
   
    setCurrentComponent(() => newComponent);
    setComponentConfig(config);
    console.log("window.myKnapsackData.isLogIn", window.myKnapsackData.isLogIn,"config.mpros.sourceItemId",config.mpros.sourceItemId,"component",config.component);
      if (config.mpros.sourceItemId==="signIn" ){
          // const signUpElement = document.getElementById("singUp");
        //  if (window.myKnapsackData.isLogIn===false ){
            // const logInElement = document.getElementById("logIn");
            // logInElement.textContent = "Dash Board";
            // window.myKnapsackData.isLogIn=true;
            // window.myKnapsackData.logInItemState="dashBoard";

            // const signUpElement = document.getElementById("signUp");
            //  signUpElement.textContent = "Log Out";
            //  signUpElement.style.color = "red";
            //  window.myKnapsackData.signUpItemState = "logOut";

        //  } else {
           // const signUpElement = document.getElementById("singUp");
            // signUpElement.textContent ="Sign Up";
            // signUpElement.style.color = "white";
            // window.myKnapsackData.isLogIn=false;
        //  };
        
       };
        if (config.mpros.sourceItemId==="logOutBt" ){
          if (window.myKnapsackData.isLogIn===true ){
            const logInElement = document.getElementById("dashBoard");
            logInElement.textContent = "Log In";
            window.myKnapsackData.isLogIn=false;
            window.myKnapsackData.logInItemState="logIn";

            const signUpElement = document.getElementById("logOut");
             signUpElement.textContent = "Sing Up";
             signUpElement.style.color = "#192b33";
             window.myKnapsackData.signUpItemState = "signUp";
        }
      }
     
  }, []);  
const  formComponents = {
  Home: HomeComponent,
  LogIn: LogInForm,
  Cart: CartForm,
  SignUp: SignUpForm,
  DashBoard: DashBoardForm,
  ViewDetail: ViewDetails

}

const handleSwitch = ({component, pros}) => {

  setActiveComponent ({component, pros});
}

const handleSwitchLogIn = () =>{
  setActiveLogInState({isLogIn,itemText});
}
 const SelectedComponent = formComponents[componentConfig.component];

 const SelectedPors = {
  Home: activeComponent.component,
  LogIn: activeComponent.pros,
  Cart: activeComponent.component,
  SignUp: activeComponent.component,
  DashBoard: activeComponent.component,
  viewDetail: activeComponent.pros,

 }
 const selectedPro = SelectedPors[componentConfig.component];
 console.log(SelectedComponent);
  return (
    <div>
      <Navbar switchComponent={ handleReplaceComponent } />  
      {/* <SelectedComponent switchComponent={handleSwitch} />   */}
      {/* < SelectedComponent switchComponent={handleSwitch} spros={activeComponent.pros} /> */}
       <CurrentComponent switchComponent={handleReplaceComponent} config={componentConfig} />  
    </div>
  );
}

export default MainBoard;