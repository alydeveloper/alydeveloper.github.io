import React from 'react';

import Header from './Header';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';

import { Element } from 'react-scroll';

// import { TypeAnimation } from 'react-type-animation';

const Webpage = () => {
    return (
        <>
            <Header />
            <Element id='Home'>
                <Home />
            </Element>
            <Element id='About'>
                <About />
            </Element>
            <Element id='Skills'>
                <Skills />
            </Element>
            <Element id='Projects'>
                <Projects />
            </Element>
            <Footer />
        </>
    )
};

export default Webpage;
