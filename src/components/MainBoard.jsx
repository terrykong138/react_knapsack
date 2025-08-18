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
    console.log("window.myKnapsackData.isLogIn", window.myKnapsackData.isLogIn,"config.mpros.sourceItemId",config,"component",config.component);
      if (window.myKnapsackData.isLogIn===false && config.mpros.sourceItemId==="Submit" ){
           const signInElement = document.getElementById("logIn");
           signInElement.textContent ="DashBoard";
           window.myKnapsackData[0] = true;
           const signUpElement = document.getElementById("singUp");

           signUpElement.textContent ="Sign Out";
           signUpElement.style.color = "red";
        
      };
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