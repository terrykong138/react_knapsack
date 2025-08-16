import React from 'react';
import { useState } from 'react';
import NavbarHome from './NavbarHome';
import ContentCards from './ContentCards';
import ThemeCards from './ThemeCards';
const HomeComponent = ({switchComponent}) => {
const [keyComponent, setActiveComponent] = useState({component:"All", pros:{}});
const  formComponents = {
  All: ContentCards,
  Theme: ThemeCards
}

const handleSwitch = ({component, pros}) => {
  setActiveComponent ({component, pros});
}
// const selectedComponent = formComponents[activeComponent];
  return (
    <div>
      <NavbarHome  switchComponent={ handleSwitch } />
       {keyComponent.component === "All" ? ( <ContentCards  switchComponetC={handleSwitch}/> ) : (
        <ThemeCards  switchComponent={switchComponent} theme={keyComponent.component} />
        )} 
    </div>
  );
}

export default HomeComponent