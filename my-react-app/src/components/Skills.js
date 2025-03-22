import React from 'react';

import Header from './Header';
import PythonImg from '../Images/Python.png';
import CImg from '../Images/C.png';
import JavaImg from '../Images/Java.webp';
import ReactImg from '../Images/React.png';
import HtmlImg from '../Images/Html.png';
import cssImg from '../Images/css.png';
import gitImg from '../Images/git.png';
import godotImg from '../Images/godot.png';
import UEImg from '../Images/UE.png';

import { Card, CardMedia, CardContent, Box, styled } from '@mui/material';
import { useState } from 'react';
import Popup from 'reactjs-popup';

const Home = () => {
    const [hoveredCard, sethoveredCard] = useState(null);
    const [clickedCard, setclickedCard] = useState(null);

    const cardData = [
        { id: 1, name: 'Python', image: PythonImg, popupMessage: 'Python' },
        { id: 2, name: 'C', image: CImg, popupMessage: 'C' },
        { id: 3, name: 'Java', image: JavaImg, popupMessage: 'Java' },
        { id: 4, name: 'React', image: ReactImg, popupMessage: 'React' },
        { id: 5, name: 'HTML', image: HtmlImg, popupMessage: 'HTML' },
        { id: 6, name: 'CSS', image: cssImg, popupMessage: 'CSS' },
        { id: 7, name: 'Git', image: gitImg, popupMessage: 'Git' },
        { id: 8, name: 'Godot', image: godotImg, popupMessage: 'Godot' },
        { id: 9, name: 'Unreal Engine', image: UEImg, popupMessage: 'Unreal Engine' }
    ];

    const Body = styled(Box)({
    });

    const CardHolders = styled(Box) ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: '5vw',
        rowGap: '2vw',
        marginTop: '8vh',
        flexWrap: 'wrap',
        padding: '0 10vw'
    });

    const Heading = styled('h2') ({
        padding: '0 5vw',
        fontSize: '2.5vh',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1vh',
    });

    const Title = styled('h1') ({
        display: 'flex',
        justifyContent: 'center',
        fontSize: '9vh',
        marginBottom: '1vh'
    });

    return (
        <>
            <Header />
            <Body>
                <Title>My Skills</Title>
                <Heading>Languages • Frameworks • Tools</Heading>
                <CardHolders> 
                    {cardData.map((card) => (
                        <>
                            <Card sx={{ backgroundColor: '#D7E3FC', width : '10vw', height : '10vw', justifyContent : 'center', alignItems : 'center', display : 'flex'}} onMouseEnter={() => sethoveredCard(card.id)} onMouseLeave={() => sethoveredCard(null)} onClick={() => setclickedCard(card.id)}>
                                {hoveredCard === card.id ?
                                (<CardContent>{card.name}</CardContent>
                                ) : (
                                    <CardMedia
                                        component='img'
                                        height='100%'
                                        image={card.image}
                                        alt={card.name}
                                    />
                                )}
                            </Card>
                            <Popup
                                contentStyle={{
                                    width : '10vw',
                                    height : '10vw'
                                }}
                                open={clickedCard === card.id}
                                closeOnDocumentClick
                                onClose={() => {
                                    setclickedCard(null); 
                                    sethoveredCard(null);
                                }}
                            >
                                {card.popupMessage}
                            </Popup>
                        </>
                    ))}
                </CardHolders>
            </Body>
        </>
    )
};

export default Home;

