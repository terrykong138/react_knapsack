import React from 'react'
import { useState } from 'react';
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
const [activeComponent, setActiveComponent] = useState({component:"Home", pros:{isLogIn: false, itemText: "Log In" }} );
const [activeLogInState, setActiveLogInState] = useState({isLogIn: false, itemText: "Log In"})
const [CurrentComponent, setCurrentComponent] = useState(() => HomeComponent);
const [componentConfig, setComponentConfig] = useState({component: "Home", pros: {id: 1,
     imageSrc: "./src/assets/pho-advanture-pro-40l.jpeg",
     productType: "Hiking",
     isInStock: true,
     productTitle: "Adventure Pro 40L",
     productDescription: "Perfect for multi-day hiking adventures with ergonomic design and weather protection.", 
     keyFeatures: ["40L", "Ergonomic Straps", "Waterproof", "Multiple Compartments"],
    reviewsCount:445,
     price: 149.99    
    }});
  const handleReplaceComponent = useCallback((newComponent, config) => {
    setCurrentComponent(() => newComponent);
    setComponentConfig(config);
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
      <Navbar switchComponent={ handleSwitch } logInPros={activeComponent.pros} />  
      <HomeComponent switchComponent={handleReplaceComponent} />  
      {/* < SelectedComponent switchComponent={handleSwitch} spros={activeComponent.pros} /> */}
       <SelectedComponent config={componentConfig} /> 
    </div>
  );
}

export default MainBoard;