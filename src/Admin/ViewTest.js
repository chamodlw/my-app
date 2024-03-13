import React from 'react';
import Testlist from '../Components/Testlist'
import Patienthead from '../Components/Patienthead'; // Importing header component
import Footer from '../Components/Footer'; // Importing footer component
import { Grid } from '@mui/material';

function ViewTest() {
  
  return (
    <div>
        <Patienthead/>
        <Grid sx={{backgroundColor:'#D9D9D9'}}>
        <br/><br/><br/><br/><br/><br/>
        
        <Testlist/>
        
        <br/><br/>
        </Grid>
        <Footer/>
    </div>
  );
}

export default ViewTest;
