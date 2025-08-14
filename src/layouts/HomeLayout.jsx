import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';


const HomeLayout = () => (
  <div>
 
    <main>
 
     <Outlet/>

        
  
    </main>

    <Footer />
  </div>
);

export default HomeLayout;