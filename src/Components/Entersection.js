//EnterSection.js
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
  component="form"
  sx={{
    backgroundColor:'#D9D9D9',
    width:'40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > :not(style)': { m: 1, width: '70%' },
    margin: 'auto', // Aligning center horizontally
    borderRadius: '10px', // Adding rounded corners
    padding: '20px',  // Adding some padding for better aesthetics
  }}
  noValidate
  autoComplete="off"
>
    
  <TextField id="id" label="id" variant="outlined" />
  <TextField id="name" label="name" variant="outlined" />
  <TextField id="description" label="description" variant="outlined" />
  
</Box>



  );
}