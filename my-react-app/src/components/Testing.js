import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
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

import Header from './Header';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
    }));

    const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
    ))(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
        {
        transform: 'rotate(90deg)',
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
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    }));

const Testing = () => {

  const projects = [
    {name: 'Productivity App', description: 'This app combines all the best parts of apps like Notion, ToDolist and Lofi. A productivity hub for academic and life purposes. Coming soon ;)', image: Notion},
    {name: 'This Website!', description: 'ta da! :)', image: Website},
    {name: 'Dungeonmania', description: 'This is a dungeon crawler game I created a few years ago for a uni course, to apply what I learnt about Object Oriented Programming in Java.', image: Game},
    {name: 'VHDL Basics', description: 'A collation of all tasks from my COMP3222 VHDL class at UNSW. It includes fun stuff like a HiLo guessing game and a binary to hexadecimal switch/led system. All written in VHDL :)', image: VHDL},
    {name: 'Wacky Microphone', description: 'This is a program that reads data from an i2s microphone and converts it into a .wav file. It has a UI where you can apply various effects to this .wav file. The audio processing is written in Java, the effects application written in C, and the UI is written in Node.js', image: Mic},
    {name: 'AirBrb', description: 'This is an AirBnb dupe for COMP6080 at UNSW. It is a React app.', image: AirBrb},
    ];


  const [expanded, setExpanded] = React.useState('test1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };



  return (
    <div>
        <Header></Header>
        {projects.map((project) => 
            <Accordion expanded={expanded === project.name} onChange={handleChange(project.name)}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography component="span">{project.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {project.description}
                </Typography>
                </AccordionDetails>
            </Accordion>
        )}
    </div>
  );
};

export default Testing;
