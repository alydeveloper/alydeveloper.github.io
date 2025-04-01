import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Box } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const sections = ["Home", "About", "Skills", "Projects"];

const Header = () => {
    const [open, setOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState("Home");

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            let activeSection = "Home";

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        activeSection = section;
                    }
                }
            });

            setCurrentSection(activeSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const getIcon = (section) => {
        let icon;
        if (section === currentSection) {
            icon = <RemoveRoundedIcon />;
        } else if (sections.indexOf(section) < sections.indexOf(currentSection)) {
            icon = <KeyboardArrowUpRoundedIcon />;
        } else {
            icon = <KeyboardArrowDownRoundedIcon />;
        }

        return (
            <Box
                sx={{
                    width: '1.5vw',
                    height: '1.5vw',
                    borderRadius: '50%',
                    backgroundColor: '#A5B1C9',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {icon}
            </Box>
        );
    };

    const DrawerList = (
        <Box
            sx={{
                width: '20vw',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#D7E3FC',
                height: '100%',
                margin: '0',
                paddingLeft: '2vw'
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <Button sx={{ margin: '2vh 2vw', justifyContent: 'right', color: 'black' }} onClick={toggleDrawer(false)}>
                <CloseRoundedIcon />
            </Button>

            {sections.map((section) => (
                <Box key={section} sx={{ display: 'flex', alignItems: 'center', gap: '1vw', paddingBottom: '1vh' }}>
                    {getIcon(section)}
                    <Link to={section} smooth duration={500} onClick={toggleDrawer(false)} style={{ fontSize: '3.5vh' }}>
                        {section}
                    </Link>
                </Box>
            ))}

            <img src="https://i.pinimg.com/originals/70/37/d4/7037d478852af21357f038fac2d2e9f6.gif" style={{ width: '18vw' }} alt="Gif" />
        </Box>
    );

    return (
        <Box sx={{ margin: '2vh 1.2vw', position: 'sticky', top: '2.5vh', zIndex: '1' }}>
            <Button sx={{ float: 'right' }} color="black" onClick={toggleDrawer(true)}>
                <MenuRoundedIcon />
            </Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </Box>
    );
};

export default Header;
