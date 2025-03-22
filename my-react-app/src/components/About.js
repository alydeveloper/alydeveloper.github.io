import React from 'react';

import Header from './Header';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import { Box, styled } from '@mui/material';

const Home = () => {

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

    const Body = styled(Box) ({
        display: 'flex',
        width: '80vw'
    });

    return (
        <>
            <Header />
            <Title>About Me!</Title>
            <Heading>Languages • Frameworks • Tools</Heading>
            <Body>
                <Timeline position='left'>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            Final year of highschool!
                            <ul>
                                <li>Graduated James Ruse Agricultural Highschool</li>
                                <li>Enrolled in a bachelor of engineering honours, majoring in Computer Engineering at UNSW!</li>
                            </ul>
                            <br></br><br></br>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot variant='outlined'/>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>2020</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            First year of university!
                            <ul>
                                <li>Learnt how to code in C</li>
                                <li>Built a bionic arm</li>
                                <li>Learnt the basics of electric circuits</li>
                                <li>Began working at Target</li>
                            </ul>
                            <br></br><br></br>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot variant='outlined'/>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>2021</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            Second year of university!
                            <ul>
                                <li>Learnt how to code in Python</li>
                                <li>Learnt Object Oriented Programming and built a basic dungeon crawler</li>
                                <li>Made the first iteration of my website</li>
                            </ul>
                            <br></br><br></br>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot variant='outlined'/>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>2022</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            Third year of university!
                            <ul>
                                <li>Peer mentored first year computer engineering students for EngSoc</li>
                                <li>Learnt about personal finance and investment strategies</li>
                                <li>Took an intro course on AI</li>
                                <li>Learnt about Networks</li>
                                <li>Learnt react in a course on frontend, and built a mock 'Airbnb' website in it</li>
                            </ul>
                            <br></br><br></br>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot variant='outlined'/>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>2023</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            Forth year of university!
                            <ul>
                                <li>Learnt the fundamentals of operating systems</li>
                                <li>Learnt about algorithm design and efficiency</li>
                                <li>Learnt about social choice, Knowledge Representation and Reasoning, and declarative programming languages</li>
                                <li>Learnt the basics of hardware coding</li>
                                <li>Interned at CAE as an Engineering Intern, working directly under the Head Engineer</li>
                            </ul>
                            <br></br><br></br>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot variant='outlined'/>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>2024</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            Fifth and final year of university!
                            <ul>
                                <li>Built this new website</li>
                                <li>Working on my Virtual Reality themed thesis</li>
                                <li>Excited to see where the rest of the year will take me!</li>
                            </ul>
                            <br></br><br></br>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot variant='outlined'/>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>2025</TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Body>
        </>
    )
};

export default Home;
