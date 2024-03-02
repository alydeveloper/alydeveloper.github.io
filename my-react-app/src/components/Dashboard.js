import React from 'react';
import Header from './Header';
import { Box, styled, CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import IntroBox from './structures/IntroBox';
import ContentBox from './structures/ContentBox';

const Dashboard = () => {
    const FlexBox = styled(Box)({
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        backgroundColor: '#A7BBEC',
        height: '100vh',
        width: '100vw'
    });

    const navigate = useNavigate();

  return (
    <>
      <Header
        
      />
      <FlexBox>
        <IntroBox>
            <h2 style={{ padding: "1%" }}>Welcome to my website!<br />
            My name is <a href="https://www.linkedin.com/in/alyssa-lubrano-605856254/">Alyssa Lubrano</a>.</h2>
            <p style={{ padding: "1%" }}>I am an Computer Engineering (Honours) student who is interested in Artificial Intelligence, Cybersecurity and Game Development.<br />
            Click a heading below to learn more!</p>
        </IntroBox>
        <ContentBox>
            <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#9AB1EA", padding: "1%" }}>
                <CardActionArea onClick={() => navigate(`/about`)}>
                    <CardMedia
                    component="img"
                    height="140"
                    alt="about me"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        About Me
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Let me tell you about how I got to where I am, and my hopes for the future.
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#9AB1EA", padding: "1%" }}>
                <CardActionArea onClick={() => navigate(`/languages`)}>
                    <CardMedia
                    component="img"
                    height="140"
                    alt="languages"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Languages
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Here's a list of all languages I've learnt so far, and the courses I completed to gain knowledge on them.
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#9AB1EA", padding: "1%" }}>
                <CardActionArea onClick={() => navigate(`/projects`)}>
                    <CardMedia
                    component="img"
                    height="140"
                    alt="projects"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Projects
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Projects I've completed over the course of my degree and various passion projects.
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </ContentBox>
      </FlexBox>
    </>
  )
};

export default Dashboard;
