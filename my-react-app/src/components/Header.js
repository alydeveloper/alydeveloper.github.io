import React from 'react';

import { Link } from 'react-router-dom';

import { Box, styled } from '@mui/material';

const Header = () => {
  const FlexBox = styled(Box)({
    margin: '1vw 2vw',
    width: '96vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  });

  return <FlexBox>
    <Link to='/dashboard'>
        this
    </Link>
    a, b, c, d
  </FlexBox>
};

export default Header;
