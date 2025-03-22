import React from 'react';
import Header from './Header';

import { Box, styled } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Masonry from '@mui/lab/Masonry';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Projects = () => {

    const projects = [
        {name: 'a', description: 'testing a blurb for this project', height: '20vh'},
        {name: 'b', description: 'testing a blurb for this project', height: '8vh'},
        {name: 'c', description: 'testing a blurb for this project', height: '14vh'},
        {name: 'd', description: 'testing a blurb for this project', height: '12vh'},
        {name: 'e', description: 'testing a blurb for this project', height: '14vh'},
        {name: 'f', description: 'testing a blurb for this project', height: '15vh'},
        {name: 'g', description: 'testing a blurb for this project', height: '20vh'},
        {name: 'h', description: 'testing a blurb for this project', height: '8vh'},
        {name: 'i', description: 'testing a blurb for this project', height: '10vh'},
        {name: 'j', description: 'testing a blurb for this project', height: '13vh'},
    ];

    const StyledAccordion = styled(Accordion)(({ theme }) => ({
        backgroundColor: '#fff',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
          backgroundColor: '#1A2027',
        }),
    }));

    const Body = styled(Box) ({
        justifyItems: 'center'
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

    return (
        <>
            <Header></Header>
            <Body>
                <Title>My Projects!</Title>
                <Heading>An overview of some of my projects!</Heading>
                <Box sx={{ width: '50vw', minHeight: '15vh' }}>
                    <Masonry columns={3} spacing={2}>
                        {projects.map((project) => (
                        <Paper key={project.name}>
                            <StyledAccordion sx={{ minHeight: project.height, backgroundColor: '#CCDBFD', color: '#272A2F' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography component="span">{project.name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>{project.description}</AccordionDetails>
                            </StyledAccordion>
                        </Paper>
                        ))}
                    </Masonry>
                </Box>
            </Body>
        </>
    );
};

export default Projects;

