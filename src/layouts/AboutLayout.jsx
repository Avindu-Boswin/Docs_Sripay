import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AboutLayout({ children }) {
    return (
        <div>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />

        </div>
    )
}

export default AboutLayout