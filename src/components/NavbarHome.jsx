import React from 'react'
import { useState } from 'react';
import ThemeCards from './ThemeCards';
import ContentCards from './ContentCards';
function NavbarHome({switchComponent}) {
  
// const handleReplace =() =>{
//       switchComponent(ThemeCards,{component: "",mpros: { }})
//    }   
  return (
     <nav className='HomeNav'>
      <ul className='menu-lists homeNavItem'>
        <li onClick={( ) =>{
            switchComponent(ContentCards,{component: "All", mpros: { }})}
           }   
         
        >All</li>
        <li onClick={( ) =>{
            switchComponent(ThemeCards,{component: "Hiking", mpros: { }})}
           }           
        >Hiking</li>
        <li onClick={( ) =>{
            switchComponent(ThemeCards,{component: "Urban", mpros: { }})}
           } 
         >Urban</li>
        <li  onClick={( ) =>{
            switchComponent(ThemeCards,{component: "Expedition", mpros: { }})}
           } 
        >Expedition</li>
        <li  onClick={( ) =>{
            switchComponent(ThemeCards,{component: "Travel", mpros: { }})}
           }         
        >Tavel</li>
        <li  onClick={( ) =>{
            switchComponent(ThemeCards,{component: "Tech", mpros: { }})}
           }     
        >Tech</li>
      </ul>
     </nav>
  );
}

export default NavbarHome;