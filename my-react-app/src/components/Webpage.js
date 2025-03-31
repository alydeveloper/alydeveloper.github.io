import React from 'react';

import Header from './Header';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

import { Element } from 'react-scroll';

import { TypeAnimation } from 'react-type-animation';

const Webpage = () => {
    return (
        <>
            <Header />
            <Element id='Home'>
                <Home></Home>
            </Element>
            <Element id='About'>
                <About></About>
            </Element>
            <Element id='Skills'>
                <Skills></Skills>
            </Element>
            <Element id='Projects'>
                <Projects></Projects>
            </Element>
        </>
    )
};

export default Webpage;
