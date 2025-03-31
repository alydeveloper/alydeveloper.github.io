import React from 'react';

import { Link } from 'react-scroll';

import { Box } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Header = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: '20vw', display: 'flex', flexDirection: 'column', backgroundColor: '#D7E3FC', height: '100%', margin: '0' }} role="presentation" onClick={toggleDrawer(false)}>
            <Button sx={{ margin: '2vh 2vw', justifyContent: 'right', color: 'black' }} onClick={toggleDrawer(false)}><CloseRoundedIcon></CloseRoundedIcon></Button>
            <Link to='Home' smooth duration={500} onClick={toggleDrawer(false)}>Home</Link>
            <Link to='About' smooth duration={500} onClick={toggleDrawer(false)}>About</Link>
            <Link to='Skills' smooth duration={500} onClick={toggleDrawer(false)}>Skills</Link>
            <Link to='Projects' smooth duration={500} onClick={toggleDrawer(false)}>Projects</Link>
        </Box>
    );

    return (
        <Box sx={{ margin: '2vh 1.2vw' }} >
            <Button sx={{ float: 'right' }} color='black' onClick={toggleDrawer(true)}><MenuRoundedIcon></MenuRoundedIcon></Button>
            <Drawer anchor='right' open={open} onClose={toggleDrawer(false)} >
                {DrawerList}
            </Drawer>
        </Box>
    );
};

export default Header;
