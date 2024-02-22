//AddTest.js
import Patienthead from '../Components/Patienthead';
import Footer from '../Components/Footer';
import '../maincss/AddTest.css';
import { Button, Grid } from '@mui/material';
import BasicTextFields from '../Components/Entersection';
import Axios from "axios";
import { useState } from 'react';

function AddTest() {
  const [tests,setTests] =useState([]);

  const getTests =() => {
    
  }
    return (
      <div className="AddTest">
        <Patienthead/><br/><br/><br/><br/><br/>
        <Grid sx={{align:'center'}}>
          <BasicTextFields/>
          <Button sx={{
          variant: 'contained',
          color: '#FFFFFF',
          background: '#101754',
          display: 'block',
          margin: 'auto',
          marginBottom: '40px',
          marginTop: '20px',
  }}>
    ADD
  </Button>

        </Grid>
        <Footer/>
      </div>
      
    );
  }
  
  export default AddTest;