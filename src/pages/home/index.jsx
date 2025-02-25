
import { Box } from '@mui/material';
import React from 'react';
import LeftSideContent from '../../components/section/LeftSideContent';
import RightSideContent from '../../components/section/RightSideContent';

const HomePage = () => {
  return (
    <Box color={'#fff'} display={'flex'} flexDirection={{sm:'row', xs:'column'}}>
      <Box width={{ sm: '60%', xs: '100%', }} >
        <LeftSideContent />
      </Box>
      <Box width={{ sm: '40%', xs: '100%', }} >
        <RightSideContent />
      </Box>

    </Box>
  );
};

export default HomePage;