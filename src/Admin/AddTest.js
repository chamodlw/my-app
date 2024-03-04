//AddTest.js
import React, { useState } from 'react';
import { Button, Grid, Snackbar } from '@mui/material'; // Import Snackbar from MUI
import EnterSection from '../Components/Entersection';
import Patienthead from '../Components/Patienthead';
import Footer from '../Components/Footer';
import '../maincss/AddTest.css';

function AddTest() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false); // State variable for Snackbar

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddTest = () => {
    // You can perform any necessary validation here before sending the data
    // to the backend API for adding the test
    fetch('http://localhost:3100/api/addtest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Add Test Response:', data);
        // Optionally, you can reset the form after successful addition
        setFormData({
          id: '',
          name: '',
          description: '',
        });
        setOpenSnackbar(true); // Open the Snackbar upon successful addition
      })
      .catch((error) => {
        console.error('Error adding test:', error);
      });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // Close the Snackbar
  };

  return (
    <div className="AddTest">
      <Patienthead />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Grid sx={{ align: 'center' }}>
        <EnterSection handleChange={handleChange} formData={formData} />
        <Button
          onClick={handleAddTest}
          sx={{
            variant: 'contained',
            color: '#FFFFFF',
            background: '#101754',
            display: 'block',
            margin: 'auto',
            marginBottom: '40px',
            marginTop: '20px',
          }}
        >
          ADD
        </Button>
        <Snackbar
          open={openSnackbar} // Set open state of the Snackbar
          autoHideDuration={4000} // Duration for the Snackbar to auto close
          onClose={handleCloseSnackbar} // Function to handle closing the Snackbar
          message="Test added successfully!" // Message to be displayed
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // Position of the Snackbar
        />
      </Grid>
      <Footer />
    </div>
  );
}

export default AddTest;
