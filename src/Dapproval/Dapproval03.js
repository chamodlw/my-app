import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Dapproval04 from './Dapproval04';
import Button from '@mui/material/Button';


export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
     
        <Box sx={{  width: '80%', margin: 'auto', backgroundColor: '#D9D9D9', padding: '20px' ,borderRadius: '8px',height:'50vh'}} >
            <h1>Recommendations</h1>
            <hr></hr>
            <br></br>
          <Dapproval04/>
          <br/>   
          <Button sx={{variant:'contained' ,color:'#FFFFFF', background:'#101754',height:'50px'}}>
          Submit
        </Button>     
            </Box>
     
    </React.Fragment>
  );
}
