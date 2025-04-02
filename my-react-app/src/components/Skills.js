import React from 'react';

import PythonImg from '../Images/Python.png';
import CImg from '../Images/C.png';
import JavaImg from '../Images/Java.tiff';
import ReactImg from '../Images/React.png';
import HtmlImg from '../Images/Html.png';
import cssImg from '../Images/css.png';
import gitImg from '../Images/git.png';
import godotImg from '../Images/godot.png';
import UEImg from '../Images/UE.png';
import ElectronImg from '../Images/electron.png';
import vscodeImg from '../Images/vscode.png';


import { Card, CardMedia, CardContent, Box, styled } from '@mui/material';
import { useState } from 'react';
import Popup from 'reactjs-popup';

const Skills = () => {
    const [hoveredCard, sethoveredCard] = useState(null);
    const [clickedCard, setclickedCard] = useState(null);

    const languages = [
        { id: 1, name: 'Python', image: PythonImg, popupMessage: 'COMP1531, COMP3331, COMP3141' },
        { id: 2, name: 'C', image: CImg, popupMessage: 'COMP1511, COMP1521, COMP2521, COMP3231, ' },
        { id: 3, name: 'Java', image: JavaImg, popupMessage: 'COMP2511, ' },
        { id: 4, name: 'HTML', image: HtmlImg, popupMessage: 'COMP6080, This Website' },
        { id: 5, name: 'CSS', image: cssImg, popupMessage: 'COMP6080, This Website' },
        { id: 6, name: 'VHDL', image: UEImg, popupMessage: 'COMP3222, COMP3601, COMP3211, COMP4601' },
    ];

    const frameworks = [
        { id: 7, name: 'React', image: ReactImg, popupMessage: 'COMP6080, This Website' },
        { id: 8, name: 'Electron', image: ElectronImg, popupMessage: 'COMP6080, This Website' },
    ];

    const tools = [
        { id: 9, name: 'Git', image: gitImg, popupMessage: 'Every software project listed here!' },
        { id: 10, name: 'VS Code', image: vscodeImg, popupMessage: 'Every software project listed here!' },
        { id: 11, name: 'Godot', image: godotImg, popupMessage: 'Coming soon ;)' },
        { id: 12, name: 'Unreal Engine', image: UEImg, popupMessage: 'COMP4951, COMP4952, COMP4953' }
    ];

    const Body = styled(Box)({
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    });

    const CardHolders = styled(Box) ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'right',
        alignItems: 'center',
        columnGap: '5vw',
        rowGap: '2vw',
        flexWrap: 'wrap',
        padding: '0 5vw',
        marginTop: '0vh',
        marginBottom: '5vh'
    });

    const Heading = styled('h2') ({
        fontSize: '4vh',
        marginTop: '1vh',
        marginBottom: '2vh'
    });

    const Title = styled('h1') ({
        fontSize: '9vh',
        marginBottom: '1vh',
    });

    return (
        <Body>
            <Box sx={{ padding: '0 5vw', textAlign: 'right' }}>
                <Title>My Skills</Title>
                <Heading>Languages</Heading>
            </Box>
            <CardHolders> 
                {languages.map((card) => (
                    <>
                        <Card sx={{ backgroundColor: '#D7E3FC', width : '10vw', height : '10vw', justifyContent : 'center', alignItems : 'center', display : 'flex', cursor: 'pointer'}} onMouseEnter={() => sethoveredCard(card.id)} onMouseLeave={() => sethoveredCard(null)} onClick={() => setclickedCard(card.id)}>
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
                                width : '40vw',
                                height : '50vh'
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
            <Box sx={{ padding: '0 5vw', textAlign: 'right' }}>
                <Heading>Frameworks</Heading>
            </Box>
            <CardHolders> 
                {frameworks.map((card) => (
                    <>
                        <Card sx={{ backgroundColor: '#D7E3FC', width : '10vw', height : '10vw', justifyContent : 'center', alignItems : 'center', display : 'flex', cursor: 'pointer'}} onMouseEnter={() => sethoveredCard(card.id)} onMouseLeave={() => sethoveredCard(null)} onClick={() => setclickedCard(card.id)}>
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
                                width : '40vw',
                                height : '50vh'
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
            <Box sx={{ padding: '0 5vw', textAlign: 'right' }}>
                <Heading>Tools</Heading>
            </Box>
            <CardHolders> 
                {tools.map((card) => (
                    <>
                        <Card sx={{ backgroundColor: '#D7E3FC', width : '10vw', height : '10vw', justifyContent : 'center', alignItems : 'center', display : 'flex', cursor: 'pointer'}} onMouseEnter={() => sethoveredCard(card.id)} onMouseLeave={() => sethoveredCard(null)} onClick={() => setclickedCard(card.id)}>
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
                                width : '40vw',
                                height : '50vh'
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
    )
};

export default Skills;

