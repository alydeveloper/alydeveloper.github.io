import React from 'react';
import Header from './Header';
import { Box, styled } from '@mui/material';

const Dashboard = () => {
    const FlexBox = styled(Box)({
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
    });
  return (
    <>
      <Header
        
      />
      <FlexBox>
        yo
      </FlexBox>
    </>
  )
};

export default Dashboard;
