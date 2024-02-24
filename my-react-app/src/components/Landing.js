import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CircularProgress, Container } from '@mui/material';


const Landing = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('/dashboard');
  }, [navigate]);

  return <Container>
      <CircularProgress />
    </Container>
};

export default Landing;
