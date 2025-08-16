import React from 'react'
import { useState } from 'react';
function Navbar({switchComponent, logInPros}) {
    // const [logInState, setLogInState] = useState("logOut");
 console.log(logInPros);
    // const LogInSetText = () => {
    //    const liItem = document.getElementById("logIn");
    //    if (liItem !== null && liItem !== undefined) {
    //      liItem.innerText = "DashBoard";
    //      liItem.style.color = "red";
       
    //    };
    //   return () => switchComponent({
    //         component: "SignIn",
    //         pros: {}
    //      })
        
    //     } ;
    
  
    // const showLogInPage = () => {};
    // const showDashBoard = () => {};
    // const logInAction = () => {
    //     setLogInState(() => {
    //         switch (logInState) {
    //             case "logOut" : {
    //                 if (logInState !== "dashBoard") {
    //                  //  if ( showLogInPage()===true){
    //                 //     LogInSetText();
    //                 //     logInState = "logIn";
    //                   //  };
    //                    LogInSetText();
    //                    return  "logIn";
    //             };
    //             break;

    //             }
    //             case "dashBoard" :{
    //                 showDashBoard();
    //                 return "dashBoard";
    //             }  
    //             default : return "logOut";

    //         }       
    //         });
    // } 
  return (
     <nav className='topNav'>
      <ul className='menu-lists'>
        <li  onClick={() => switchComponent({
            component: "Home",
            pros: {}
         })}
        >Home</li>
        <li  onClick={() => switchComponent({
            component: "Cart",
            pros: {}
         })}
        >Cart</li>
        { window.myKnapsackData.isLogIn === false ? (
          <li id="logIn" onClick={() => switchComponent({
            component: "LogIn",
            pros: {}
         })}  >Log In</li>):(
          <li id="logIn" onClick={() => switchComponent({
            component: "DashBoard",
            pros: {}
         })} >DashBoard</li>
         ) 
        }
        <li onClick={() => switchComponent({
            component: "SignUp",
            pros: {}
         })}
        id="singUp">SignUp</li>

      </ul>
     </nav>
  );
}

export default Navbar