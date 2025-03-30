import React from 'react';
import Header from './Header';

import { useState } from 'react';
import { Box, styled } from '@mui/material';

import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import Website from '../Images/Website.png';
import Notion from '../Images/notion.webp';
import Game from '../Images/game.png';
import VHDL from '../Images/3222.png';
import Mic from '../Images/mic.png';
import AirBrb from '../Images/AirBrb.png';
import Preview from '../Images/Preview.png';

import AddIcon from '@mui/icons-material/AddRounded';

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
    padding: '0 15vw',
    display: 'flex',
    flexDirection: 'row',
    height: '60vh',
    justifyContent: 'space-between'
});

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        // '&:not(:last-child)': {
        //     borderBottom: 0,
        // },
        '&::before': {
            display: 'none',
        },
    }));
    
const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<AddIcon sx={{ fontSize: '1.2rem' }} />}
        {...props}
    />
    ))(({ theme }) => ({
    // flexDirection: 'row-reverse',
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
        {
        transform: 'rotate(45deg)',
        },
    [`& .${accordionSummaryClasses.content}`]: {
        marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles('dark', {
        backgroundColor: 'rgba(255, 255, 255, .05)',
    }),
}));
    
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
}));

const OverlayImage = styled('img')({
    position: 'absolute',
    top: '18%',
    left: '17%',
    width: '23.2vw',
    height: '24.7vh',
    zIndex: 2,
    objectFit: 'stretch',
});

const Projects = () => {
    const projects = [
        {name: 'Productivity App', description: 'This app combines all the best parts of apps like Notion, ToDolist and Lofi. A productivity hub for academic and life purposes. Coming soon ;)', image: Notion},
        {name: 'This Website!', description: 'ta da! :)', image: Website},
        {name: 'Dungeonmania', description: 'This is a dungeon crawler game I created a few years ago for a uni course, to apply what I learnt about Object Oriented Programming in Java.', image: Game},
        {name: 'VHDL Basics', description: 'A collation of all tasks from my COMP3222 VHDL class at UNSW. It includes fun stuff like a HiLo guessing game and a binary to hexadecimal switch/led system. All written in VHDL :)', image: VHDL},
        {name: 'Wacky Microphone', description: 'This is a program that reads data from an i2s microphone and converts it into a .wav file. It has a UI where you can apply various effects to this .wav file. The audio processing is written in Java, the effects application written in C, and the UI is written in Node.js', image: Mic},
        {name: 'AirBrb', description: 'This is an AirBnb dupe for COMP6080 at UNSW. It is a React app.', image: AirBrb},
    ];

    const [expanded, setExpanded] = useState(projects);
    const [overlayImage, setOverlayImage] = useState(null);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
        const selectedProject = projects.find(project => project.name === panel);
        setOverlayImage(newExpanded ? selectedProject.image : null);
    };
    
    return (
        <>
            <Header></Header>
            <Body>
                <Title>My Projects!</Title>
                <Heading>An overview of some of my projects!</Heading>
                <ProjectsBox>
                    <Box sx={{ width: '45%', height: '75%', overflowY: 'auto', marginTop: '5%' }}>
                        {projects.map((project) =>
                            <Accordion sx={{ width: '100%', backgroundColor: '#E2EAFC', boxShadow: 'none', transition: 'background-color 1s ease-in-out', '&:hover': { backgroundColor: '#D7E3FC', borderRadius: '5px' }}} expanded={expanded === project.name} onChange={handleChange(project.name)}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                    <Typography sx={{ fontSize: '5vh' }} component="span">{project.name}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontSize: '2.5vh' }}>
                                        {project.description}
                                    </Typography>
                                </AccordionDetails>
                        </Accordion>
                        )}
                    </Box>
                    <Box sx={{ width: '50%', height: '100%', position: 'relative' }}>
                        <img src={Preview} style={{ width: '100%', height: '100%' }} alt='Project Preview' ></img>
                        {overlayImage !== null && <OverlayImage src={overlayImage} alt='Sample Project' />}
                    </Box>
                </ProjectsBox>
            </Body>
        </>
    );
};

export default Projects;