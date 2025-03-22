import React from 'react';

import Header from './Header';
import { useState } from 'react';
import { Box, styled } from '@mui/material';
import Popup from 'reactjs-popup';

import linkedinLogo from '../Images/linkedin.png';
import gmailLogo from '../Images/gmail.png';
import resumeLogo from '../Images/resume.png';
import githubLogo from '../Images/github.png';
import Resume from '../documents/Alyssa_Lubrano_Resume.pdf'

const Home = () => {
    const [openResume, setopenResume] = useState(false);

    const FlexBox = styled(Box)({
        display: 'flex',
        alignItems: 'center',
        fontSize: '5vh',
        flexDirection: 'column',
        padding: '15vh 5vw'
    });

    const BlurbBox = styled(Box) ({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        fontSize: '5vh',
        '& h1': {
        marginBottom: '0vh',
        },
        '& p': {
        marginTop: '2vh',
        },
    });

    const IconsBox = styled(Box) ({
        margin: '1vw 2vw',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    });
    

    return (
        <>
            <Header />
            <FlexBox>
                <BlurbBox>
                    <h1>Hello! <br></br>
                    I'm Alyssa Lubrano,</h1>
                    <p>a final year computer engineering student.<br></br></p>
                    Get in touch:<br></br>
                </BlurbBox>
                <IconsBox>
                    <img style={{height : '4.6vw', width : '4.6vw', marginRight: '1vw', marginTop: '0.3vw'}} src={linkedinLogo} alt="LinkedIn" onClick={() => window.open('https://www.linkedin.com/in/alyssa-lubrano-605856254/', '_blank')}/>
                    <img style={{height : '4.5vw', width : '4.5vw', marginRight: '1vw'}} src={gmailLogo} alt="Gmail" onClick={() => window.open('mailto:aly.developer1@gmail.com', '_blank')}/>
                    <img style={{height : '5vw', width : '5vw', marginRight: '1vw'}} src={resumeLogo} alt="Resume" onClick={() => setopenResume(true)}/>
                    <img style={{height : '4vw', width : '4vw', marginRight: '1vw'}} src={githubLogo} alt="Github" onClick={() => window.open('https://github.com/alydeveloper', '_blank')}/>
                </IconsBox>
                <Popup open={openResume} closeOnDocumentClick onClose={() => setopenResume(false)} contentStyle={{width: '60vw', height: '85vh'}}>
                    <iframe src={Resume} width='100%' height='100%' title='Alyssa Lubrano Resume'/>
                </Popup>
            </FlexBox>
        </>
    )
};

export default Home;
