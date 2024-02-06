import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
     
        <Box sx={{  width: '80%', margin: 'auto', backgroundColor: '#D9D9D9', padding: '20px' ,borderRadius: '8px',height:'50vh'}} >
            <h1>Recommendations</h1>
            <hr></hr>
            <TextField
         Report ID
          id="outlined-required"
          label="Report Id"
        />
            </Box>
     
    </React.Fragment>
  );
}
