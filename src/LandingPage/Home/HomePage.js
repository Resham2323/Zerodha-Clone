import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Education from './Education';
import Pricing from './Pricing';
import Award from './Awards';
import Stats from './Stats';
import OpenAccount from "../OpenAccount"
import Footer  from '../Footer';


function HomePage() {
    return ( 
        <>
        <Navbar />
        <Hero />
        <Award />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        <Footer />
        </>
     );
}

export default HomePage;