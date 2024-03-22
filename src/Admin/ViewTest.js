import React from 'react';
import Testlist from '../Components/Testlist';
import Patienthead from '../Components/Patienthead'; // Importing header component
import Footer from '../Components/Footer'; // Importing footer component
import { Grid } from '@mui/material';

function ViewTest() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Patienthead />
      <Grid sx={{ backgroundColor: '#a6a6a6', flex: 1 }}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Testlist />
        <br />
        <br />
      </Grid>
      <Footer />
    </div>
  );
}

export default ViewTest;
