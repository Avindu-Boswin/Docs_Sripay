import React from 'react';
import Footer from '../components/Footer';
import AcqNav from '../components/Acquirer/AcquirerNavBar';

function AcquirerLayout({ children }) {
    return (
        <div>
            <AcqNav />
            <main>
                {children}
            </main>
            <Footer />

        </div>
    )
}

export default AcquirerLayout;