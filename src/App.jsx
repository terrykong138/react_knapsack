import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainBoard from './components/MainBoard';
function App() {
  if (typeof window.myKnapsackData === "undefined")
     { window.myKnapsackData={isLogIn:false, itemState:"logIn", cartItems:0};} 
  // console.log(window.myKnapsackData);
  return (
    <>
   
     {/* <Navbar />  */}
      <MainBoard /> 
     {/* <nav className='topNav'>
      <ul className='menu-lists'>
        <li>Home</li>
        <li>CHat</li>
        <li>LogIn</li>
        <li>SignUp</li>
      </ul>
     </nav> */}
     {/* <nav className='subNav'>
        <ul className='menu-lists'>
          <li>All</li>
          <li>Hiking</li>
          <li>Urban</li>
          <li>Expedition</li>
          <li>Student</li>
          <li>Travel</li>
          <li>Tech</li>
        </ul>
      </nav>  */}
    </>
  );
}

export default App;
