import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import DeveloperHeading from '../components/DeveloperHeading';

const HomeLayout = () => (
  <div>

    <main>
 
     <Outlet/>
     
    </main>
    <DeveloperHeading/>
    <Footer />
  </div>
);

export default HomeLayout;