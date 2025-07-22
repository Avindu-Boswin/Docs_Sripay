import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = ({ children }) => (
  <div>
    <Navbar />
    <main>
      {children}
    </main>
    <Footer />
  </div>
);

export default HomeLayout;