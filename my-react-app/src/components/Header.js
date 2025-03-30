import React from 'react';

import { Link } from 'react-router-dom';

import { Box, styled } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Header = () => {
    const FlexBox = styled(Box)({
        padding: '1.5vw 2vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'right',
        fontSize: '2.7vh',
    });

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: '20vw', display: 'flex', flexDirection: 'column', margin: '2vh 2vw' }} role="presentation" onClick={toggleDrawer(false)}>
            <Button sx={{ justifyContent: 'right', color: 'black' }} onClick={toggleDrawer(false)}><CloseRoundedIcon></CloseRoundedIcon></Button>
            <Link to='/home' style={{ textDecoration: 'none', color: 'inherit', }}><h1>Alyssa Lubrano</h1></Link>
            <Link to='/about' style={{ textDecoration: 'none', color: 'inherit', }}><h2>About</h2></Link>
            <Link to='/skills' style={{ textDecoration: 'none', color: 'inherit', }}><h2>Skills</h2></Link>
            <Link to='/projects' style={{ textDecoration: 'none', color: 'inherit', }}><h2>Projects</h2></Link>
        </Box>
    );

    return <FlexBox>
        <div>
            <Button color='black' onClick={toggleDrawer(true)}><MenuRoundedIcon></MenuRoundedIcon></Button>
            <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>

    </FlexBox>
};

export default Header;
