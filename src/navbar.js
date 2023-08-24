import {Frame, Navigation} from '@shopify/polaris';
import {HomeMinor, OrdersMinor, ProductsMinor} from '@shopify/polaris-icons';
import React from 'react';
import SettingForm from './SettingForm';

function Navbar() {
  
  return (
     

  <Frame>
     <div style={{ marginTop:'30px'}}>
      <Navigation location="/">
     
        <Navigation.Section
          items={[
            {
              url: '/',
              label: 'Home',
              icon: HomeMinor,
            },
            {
              url: `/${About}`,
              excludePaths: ['#'],
              label: 'Orders',
              icon: OrdersMinor,
              badge: '12',
            },
            {
            //   url: `/${Home}`, 
              path : "/Home",
              label: 'Products',
              icon: ProductsMinor,
            },
          ]}
    
        />
        
      </Navigation>
      </div>
       
    </Frame>
  
  );
}

export default Navbar;


const Home = () => {
    return(
        <div>Hello</div>
    );
}  
const About = () =>{
    return (
        <div>About</div>
    );
}