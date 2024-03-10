import React, { useState, useEffect } from 'react';
import { Button, Grid, Snackbar } from '@mui/material';
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

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [maxId, setMaxId] = useState(0);

  useEffect(() => {
    fetchMaxId();
  }, []);

  const fetchMaxId = () => {
    fetch('http://localhost:3100/api/tests')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          const maxTestId = Math.max(...data.map((test) => test.id));
          setMaxId(maxTestId + 1); // Add 1 to the maximum test ID
        } else {
          setMaxId(0); // If no tests in database, set maxId to 1
        }
      })
      .catch((error) => {
        console.error('Error fetching maximum test ID:', error);
      });
  };
  

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddTest = () => {
    const nextId = maxId + 1;

    fetch('http://localhost:3100/api/addtest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formData, id: nextId }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Add Test Response:', data);
        setFormData({
          id: '',
          name: '',
          description: '',
        });
        setMaxId(nextId); // Update maxId with the newly added test ID
        setSnackbarMessage('Test added successfully!');
        setOpenSnackbar(true);
      })
      .catch((error) => {
        console.error('Error adding test:', error);
      });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
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
        <EnterSection handleChange={handleChange} formData={formData} maxId={maxId} />
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
          open={openSnackbar}
          autoHideDuration={4000}
          onClose={handleCloseSnackbar}
          message={snackbarMessage}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        />
      </Grid>
      <Footer />
    </div>
  );
}

export default AddTest;
