import React from 'react';

import { Link } from 'react-router-dom';

import { Box, styled } from '@mui/material';

const Header = () => {
  const FlexBox = styled(Box)({
    width: '98vw',
    height: '5vh',
    padding: '1%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#9AB1EA',
  });

  return <FlexBox >
    <Link to='/dashboard'>
        Alyssa Lubrano
    </Link>
    <Link to='/about'>
        About Me
    </Link>
    <Link to='/languages'>
        Languages
    </Link>
    <Link to='/projects'>
        Projects
    </Link>
    <Link to='/contact'>
        Contact Me
    </Link>
  </FlexBox>
};

export default Header;
