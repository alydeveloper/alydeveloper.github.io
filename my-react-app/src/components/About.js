import React from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
  } from '@mui/lab/TimelineOppositeContent';

import { Box, styled } from '@mui/material';

const Home = () => {

    const Blurb = styled('p') ({
        fontSize: '4vh',
        marginTop: '1vh',
        marginBottom: '5vh',
        width: '92%'
    });

    const Heading = styled('h1') ({
        fontSize: '9vh',
        marginTop: '0',
        marginBottom: '1vh'
    });

    const Body = styled(Box) ({
        display: 'flex',
        flexDirection: 'row',
        margin: '3vw'
    });

    return (
        <Body sx={{ marginTop: '5vh', minHeight: '100vh' }}>
            <Box sx={{ width: '45%' }} >
                <Heading>About Me!</Heading>
                <Blurb>I am in my penultimate year of a Bachelor of Engineering degree (Computing) (Honours) at UNSW.
                    I am eager to learn everything I can from a company that’s backbone is the tech industry.
                    My career goal is to become a software engineer at Canva and an internship would be the perfect
                    first step to achieving this goal.
                </Blurb>
            </Box>
            <Box sx={{ width: '55%' }}>
                <Timeline position='left'
                    sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 2,
                    },
                    [`& .MuiTimelineContent-root`]: {
                        flex: 1,
                    }
                }}>
                    <TimelineItem>
                        <TimelineOppositeContent sx={{ paddingTop: 0 }}>
                            <p style={{ paddingTop: 0, marginTop: 0, marginBottom: '1.5vh', fontSize: '3vh' }} >Final year of highschool!</p>
                            <ul style={{ fontSize: '2.4vh' }}>
                                <li>Graduated James Ruse Agricultural Highschool</li>
                                <li>Enrolled in a bachelor of engineering honours, majoring in Computer Engineering at UNSW!</li>
                            </ul>
                            <br></br><br></br>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot variant='outlined' sx={{ borderColor: '#001845' }} />
                        <TimelineConnector sx={{ backgroundColor: '#001845' }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ fontSize: '2.5vh', paddingTop: '0.5vh' }} >TWENTY TWENTY</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent sx={{ paddingTop: 0 }}>
                            <p style={{ paddingTop: 0, marginTop: 0, marginBottom: '1.5vh', fontSize: '3vh' }} >First year of university!</p>
                            <ul style={{ fontSize: '2.4vh' }}>
                                <li>Learnt how to code in C</li>
                                <li>Built a bionic arm</li>
                                <li>Learnt the basics of electric circuits</li>
                                <li>Began working at Target</li>
                            </ul>
                            <br></br><br></br>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot variant='outlined' sx={{ borderColor: '#001845' }} />
                        <TimelineConnector sx={{ backgroundColor: '#001845' }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ fontSize: '2.5vh', paddingTop: '0.5vh' }} >TWENTY TWENTY<br></br>ONE</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent sx={{ paddingTop: 0 }}>
                            <p style={{ paddingTop: 0, marginTop: 0, marginBottom: '1.5vh', fontSize: '3vh' }} >Second year of university!</p>
                            <ul style={{ fontSize: '2.4vh' }}>
                                <li>Learnt how to code in Python</li>
                                <li>Learnt Object Oriented Programming and built a basic dungeon crawler</li>
                                <li>Made the first iteration of my website</li>
                            </ul>
                            <br></br><br></br>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot variant='outlined' sx={{ borderColor: '#001845' }} />
                        <TimelineConnector sx={{ backgroundColor: '#001845' }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ fontSize: '2.5vh', paddingTop: '0.5vh' }} >TWENTY TWENTY TWO</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent sx={{ paddingTop: 0 }}>
                            <p style={{ paddingTop: 0, marginTop: 0, marginBottom: '1.5vh', fontSize: '3vh' }} >Third year of university!</p>
                            <ul style={{ fontSize: '2.4vh' }}>
                                <li>Peer mentored first year computer engineering students for EngSoc</li>
                                <li>Learnt about personal finance and investment strategies</li>
                                <li>Took an intro course on AI</li>
                                <li>Learnt about Networks</li>
                                <li>Learnt react in a course on frontend, and built a mock 'Airbnb' website in it</li>
                            </ul>
                            <br></br><br></br>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot variant='outlined' sx={{ borderColor: '#001845' }} />
                        <TimelineConnector sx={{ backgroundColor: '#001845' }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ fontSize: '2.5vh', paddingTop: '0.5vh' }} >TWENTY TWENTY THREE</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent sx={{ paddingTop: 0 }}>
                            <p style={{ paddingTop: 0, marginTop: 0, marginBottom: '1.5vh', fontSize: '3vh' }} >Forth year of university!</p>
                            <ul style={{ fontSize: '2.4vh' }}>
                                <li>Learnt the fundamentals of operating systems</li>
                                <li>Learnt about algorithm design and efficiency</li>
                                <li>Learnt about social choice, Knowledge Representation and Reasoning, and declarative programming languages</li>
                                <li>Learnt the basics of hardware coding</li>
                                <li>Interned at CAE as an Engineering Intern, working directly under the Head Engineer</li>
                            </ul>
                            <br></br><br></br>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot variant='outlined' sx={{ borderColor: '#001845' }} />
                        <TimelineConnector sx={{ backgroundColor: '#001845' }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ fontSize: '2.5vh', paddingTop: '0.5vh' }} >TWENTY TWENTY FOUR</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent sx={{ paddingTop: 0 }}>
                            <p style={{ paddingTop: 0, marginTop: 0, marginBottom: '1.5vh', fontSize: '3vh' }} >Fifth and final year of university!</p>
                            <ul style={{ fontSize: '2.4vh' }}>
                                <li>Built this new website</li>
                                <li>Working on my Virtual Reality themed thesis</li>
                                <li>Excited to see where the rest of the year will take me!</li>
                            </ul>
                            <br></br><br></br>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot variant='outlined' sx={{ borderColor: '#001845' }} />
                        <TimelineConnector sx={{ backgroundImage: 'linear-gradient(to bottom, #001845, #E2EAFC)' }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ fontSize: '2.5vh', paddingTop: '0.5vh' }} >TWENTY TWENTY FIVE</TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Box>
        </Body>
    )
};

export default Home;
