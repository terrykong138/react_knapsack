import React from 'react';
import { useState, useCallback } from 'react';
import NavbarHome from './NavbarHome';
import ContentCards from './ContentCards';
import ThemeCards from './ThemeCards';
import ViewDetails from './ViewDetails';
const HomeComponent = ({switchComponent}) => {
const [keyComponent, setActiveComponent] = useState({component:"All", pros:{}});
const  formComponents = {
  All: ContentCards,
  Theme: ThemeCards,
  ViewDetail: ViewDetails
}

const handleSwitch = ({component, pros}) => {
  setActiveComponent ({component, pros});
}

// ================================
const [CurrentComponent, setCurrentComponent] = useState((swith) => ThemeCards );
const [componentConfig, setComponentConfig] = useState({component: "All", mpros: {id: 1,
     imageSrc: "./src/assets/pho-advanture-pro-40l.jpeg",
     productType: "Hiking",
     isInStock: true,
     productTitle: "Adventure Pro 40L",
     productDescription: "Perfect for multi-day hiking adventures with ergonomic design and weather protection.", 
     keyFeatures: ["40L", "Ergonomic Straps", "Waterproof", "Multiple Compartments"],
    reviewsCount:445,
     price: 149.99    
    }});
  const handleReplaceComponent =useCallback((newComponent, config) => {
    setCurrentComponent(() => newComponent);
    setComponentConfig(config);
  },[]) ;

  // =================================
 const SelectedComponent = formComponents[componentConfig.component];
  return (
    <div>
      <NavbarHome   switchComponent={handleReplaceComponent} />
       <CurrentComponent switchComponent={handleReplaceComponent} config={componentConfig} /> 

        {/* {componentConfig.component === "All" ? ( <SelectedComponent  switchComponentC={handleReplaceComponent} /> ) : (
        <SelectedComponent  switchComponent={handleReplaceComponent} config={componentConfig}  />
        )}  */}
    </div>
  );
}

export default HomeComponent;