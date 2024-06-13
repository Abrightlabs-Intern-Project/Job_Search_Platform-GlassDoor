import React from 'react';
import './css/JobsCard.css';
import Stack from '@mui/joy/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
const JobsCard: React.FC = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (

    <>
    
    

   <div className='classcontainer'>
    <div className='smallcontainer'>
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 3</Item>
        <Item>Item 3</Item>
        <Item>Item 3</Item>
        <Item>Item 3</Item>
        <Item>Item 3</Item>
        <Item>Item 3</Item>
        <Item>Item 3</Item>
        <Item>Item 3</Item>

      </Stack>
    </Box>
    </div>
    <div className='largecontainer'>
      large jobcard
    </div>
   </div>
   </>
  );
};

export default JobsCard;
