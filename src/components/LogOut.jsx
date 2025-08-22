import React from 'react';
import HomeComponent from './HomeComponent'
const LogOut = ({switchComponent}) => {
  return (
    <div className='form logOut'>
        <button id="logOutBt" onClick={( ) =>{
          switchComponent(HomeComponent,{component: "Home",  mpros: {isLogIn: false, sourceItemId: "logOutBt", itemText: "Log out"  }})}
        }>Log Out</button>
    </div>
  )
}

export default LogOut