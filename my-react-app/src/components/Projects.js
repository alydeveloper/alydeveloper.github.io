import React from 'react';
import Header from './Header';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Box, styled } from '@mui/material';

import Website from '../Images/Website.png';
import Notion from '../Images/notion.webp';
import Game from '../Images/game.png';
import VHDL from '../Images/3222.png';
import Mic from '../Images/mic.png';
import AirBrb from '../Images/AirBrb.png';


const Projects = () => {

    const projects = [
        {name: 'Productivity App', description: 'This app combines all the best parts of apps like Notion, ToDolist and Lofi. A productivity hub for academic and life purposes. Coming soon ;)', image: Notion},
        {name: 'This Website!', description: 'ta da! :)', image: Website},
        {name: 'Dungeonmania', description: 'This is a dungeon crawler game I created a few years ago for a uni course, to apply what I learnt about Object Oriented Programming in Java.', image: Game},
        {name: 'VHDL Basics', description: 'A collation of all tasks from my COMP3222 VHDL class at UNSW. It includes fun stuff like a HiLo guessing game and a binary to hexadecimal switch/led system. All written in VHDL :)', image: VHDL},
        {name: 'Wacky Microphone', description: 'This is a program that reads data from an i2s microphone and converts it into a .wav file. It has a UI where you can apply various effects to this .wav file. The audio processing is written in Java, the effects application written in C, and the UI is written in Node.js', image: Mic},
        {name: 'AirBrb', description: 'This is an AirBnb dupe for COMP6080 at UNSW. It is a React app.', image: AirBrb},
    ];

    const Body = styled(Box) ({
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
        alignItems: 'center'
    });

    const Heading = styled('h2') ({
        padding: '0 5vw',
        fontSize: '2.5vh',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1vh',
        marginBottom: '5vh'
    });

    const Title = styled('h1') ({
        display: 'flex',
        justifyContent: 'center',
        fontSize: '9vh',
        marginBottom: '1vh'
    });

    const ProjectsBox = styled(Box) ({
        padding: '0 15vw'
    });

    const Splitter = styled(Box) ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'space-between',
        columnGap: '2vw'
    });

    return (
        <>
            <Header></Header>
            <Body>
                <Title>My Projects!</Title>
                <Heading>An overview of some of my projects!</Heading>
                <ProjectsBox>
                    {projects.map((project) =>
                        <Accordion sx={{ width: '100%', margin: '0 !important', paddingLeft: '1.5vh', backgroundColor: '#E2EAFC', boxShadow: 'none', transition: 'background-color 1s ease-in-out', '&:hover': { backgroundColor: '#D7E3FC', borderRadius: '5px' }}} >
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            sx={{ borderColor: 'black', borderStyle: 'solid' }}
                            >
                            <Typography sx={{ fontSize: '3.5vh' }} component="span">{project.name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ paddingTop: '0', marginTop: '0', }}>
                                <Splitter sx={{ fontSize: '2.5vh', }} >
                                    {project.description}
                                    <img style={{height : '20vw', width : '35vw', marginRight: '1vw', borderRadius: '5px'}} src={project.image} alt={project.name} />
                                </Splitter>
                            </AccordionDetails>
                            </Accordion>
                    )}
                </ProjectsBox>
            </Body>
        </>
    );
};

export default Projects;
