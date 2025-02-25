import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'transparent ',
        color: '#FFF',
        display: 'flex'
      }}
      flexDirection={{ sm: 'row', xs: 'column' }}
my={3}
justifyContent={'center'}
    >
      <Box width={{ xs: '100%', sm: '50%' }} padding={'5px 0px'}>
        <Typography fontSize={14}>
          © 2024 HomeownerBenefit. All rights reserved.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          lineHeight: '1.3em'
        }}
        justifyContent= {{xs:'flex-start',sm:'center'}}
        width={{ xs: '100%', sm: '50%' }}
        padding={'5px 0px'}
      >
        <Typography fontSize={14}>Terms</Typography><span style={{ margin: '0px 15px' }}>|</span>
        <Typography fontSize={14}>Privacy Policy</Typography><span style={{ margin: '0px 15px' }}>|</span>
        <Typography fontSize={14}>Licence Information</Typography>
      </Box>
    </Box>
  );
};

export default Footer;