import React from 'react'
import { useState } from 'react';
function NavbarHome({switchComponent}) {
  
  
  return (
     <nav className='topNav'>
      <ul className='menu-lists'>
        <li onClick={() => switchComponent({
            component: "All",
            pros: {}
         })}
        >All</li>
        <li onClick={() => switchComponent({
            component: "Hiking", 
            pros: {}
         })}
        
        >Hiking</li>
        <li 
         onClick={() => switchComponent({
            component: "Urban",
            pros: {}
         })}>Urban</li>
        <li   onClick={() => switchComponent({
            component: "Expedition",
            pros: {}
         })}
        >Expedition</li>
        <li   onClick={() => switchComponent({
            component: "Travel",
            pros: {}
         })}        
        >Tavel</li>
        <li   onClick={() => switchComponent({
            component: "Tech",
            pros: {}
         })}      
        >Tech</li>
      </ul>
     </nav>
  );
}

export default NavbarHome;