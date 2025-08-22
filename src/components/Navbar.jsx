import React from 'react';
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';
import LogOut from './LogOut';
// import NavbarHome from './NavbarHome';
// import ContentCards from './ContentCards';
import HomeComponent from './HomeComponent';
// import Navbar from './Navbar';
// import LogInForm from './LoginForm';
// import SignUpForm from './SignUpForm';
import DashBoardForm from './DashBoardForm';
import ViewDetails from "./ViewDetails"
import CartForm from './CartForm';

import { useState } from 'react';
// import HomeComponent from './HomeComponent';
function Navbar({switchComponent, logInPros}) {

  return (
     <nav className='topNav' id="topNav">
      <h2 className='topNav-title'>KnapsackShop</h2>
      <ul className='menu-lists'>
        <li  onClick={( ) =>{
          switchComponent(HomeComponent,{component: "Home", mpros: { }})}
         }
        >Home</li>
        <li  onClick={( ) =>{
          switchComponent(CartForm,{component: "Cart", mpros: { }})}
        }
        >Cart<sup id="cartSup" color='red'></sup></li>

        
           { window.myKnapsackData.logInItemState === "logIn" ? (
          <li id="logIn" onClick={( ) =>{
          switchComponent(LogInForm, {component: "LogIn", mpros: {isLogIn: false, sourceItemId: "navLogIn",itemText: "Log In"  }})}

          }  >Log In</li>):(
          <li id="dashBoard" onClick={( ) =>{
          switchComponent(DashBoardForm, {component: "DashBoard", mpros: { isLogIn: false, sourceItemId:"dashBoard", itemText: "Dash Board" }})}

          }  >DashBoard</li>
         ) 
        } 
           { window.myKnapsackData.signUpItemState === "signUp" ? (
          <li id="signUp" onClick={( ) =>{
          switchComponent(SignUpForm ,{component: "signUp", mpros: {isLogIn: false, sourceItemId: "navSignUp",itemText: "sign Up"  }})}

          }  >Sign Up</li>):(
          <li id="logOut" color='red' onClick={( ) =>{
          switchComponent(LogOut, {component: "logOut", mpros: { isLogIn: false, sourceItemId:"logOut", itemText: "log Out" }})}

          }  >Log Out</li>
         ) 
        } 
     
    
        
       
      </ul>
     </nav>
  );
}

export default Navbar