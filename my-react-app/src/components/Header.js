import React from 'react';

import { Link } from 'react-router-dom';

import { Box, styled } from '@mui/material';

const Header = () => {
    const FlexBox = styled(Box)({
        padding: '1.5vw 2vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '2.7vh',
    });

    const LeftBox = styled(Box) ({
        display: 'flex',
    });

    const RightBox = styled(Box) ({
        justifyContent: 'space-between',
        display: 'flex',
        columnGap: '2vw'
    });

    return <FlexBox>
        <LeftBox>
            <Link to='/home' style={{ textDecoration: 'none', color: 'inherit', }}>Alyssa Lubrano</Link>
            <Link to='/testing' style={{ textDecoration: 'none', color: 'inherit', }}>TESTING</Link>
        </LeftBox>
        <RightBox>
            <Link to='/about' style={{ textDecoration: 'none', color: 'inherit', }}>About</Link>
            <Link to='/skills' style={{ textDecoration: 'none', color: 'inherit', }}>Skills</Link>
            <Link to='/projects' style={{ textDecoration: 'none', color: 'inherit', }}>Projects</Link>
        </RightBox>
    </FlexBox>
};

export default Header;
