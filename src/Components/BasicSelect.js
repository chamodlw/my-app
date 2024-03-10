// BasicSelect.js
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Axios from 'axios';
import SelectTable from './SelectTable';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


function BasicSelect() {
  
  const [tests, setTests] = useState([]);
  const [selectedTest, setSelectedTest] = useState(null);
  const [selectedTestsForTable, setSelectedTestsForTable] = useState([]); // New state to track selected tests for table
  const [selectedTestDescription, setSelectedTestDescription] = useState('');
  const [testDetails, setTestDetails] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');


  useEffect(() => {
    getTests();
  }, []);

  const getTests = () => {
    Axios.get('http://localhost:3100/api/tests')
      .then((response) => {
        setTests(response.data?.response || []);
      })
      .catch((error) => {
        console.error('Axios Error : ', error);
      });
  };

  const handleChange = (event) => {
    const selectedTestId = event.target.value;
    
    // Check if the selected test is already in selectedTestsForTable
    const isAlreadySelected = selectedTestsForTable.some(test => test.id === selectedTestId);
    
    if (!isAlreadySelected) {
      setSelectedTest(selectedTestId);
    
      const selectedTest = tests.find((test) => test.id === selectedTestId);
      if (selectedTest) {
        setSelectedTestDescription(selectedTest.description);
        Axios.get(`http://localhost:3100/api/tests/${selectedTestId}`)
          .then((response) => {
            setTestDetails(response.data?.details || '');
          })
          .catch((error) => {
            console.error('Axios Error : ', error);
          });
      }
    } else {
      // Set the Snackbar message and open Snackbar
      setSnackbarMessage('Test is already selected');
      setSnackbarOpen(true);
    }
  };

  const handleConfirm = () => {
    if (selectedTest) {
      // Find the selected test object from the tests array
      const selectedTestObject = tests.find((test) => test.id === selectedTest);
      // Add selected test object to the table
      setSelectedTestsForTable([...selectedTestsForTable, selectedTestObject]);
      setSelectedTest(null);
      setSelectedTestDescription('');
      setTestDetails('');
  
      // Sort selectedTestsForTable by ID in ascending order
      setSelectedTestsForTable(prevSelectedTests => prevSelectedTests.sort((a, b) => a.id - b.id));
    }
  };

  const handleCloseSnackbar = () => {
    // Close Snackbar
    setSnackbarOpen(false);
  };
  
  

  return (
    <Box sx={{ width: '80%', margin: 'auto', backgroundColor: '#D9D9D9', padding: '20px', borderRadius: '8px' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{ color: '#101754' }}>
          Blood Test Type
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedTest || ''}
          label="Blood Test Type"
          onChange={handleChange}
          sx={{ backgroundColor: '#FFFFFF' }}
        >
          {tests.map((test) => (
            <MenuItem key={test.id} value={test.id}>
              {test.id + ' ' + test.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedTestDescription && (
        <Typography variant="subtitle1" sx={{ marginTop: '10px' }}>
          {selectedTestDescription}
        </Typography>
      )}

      {testDetails && (
        <Typography variant="subtitle1" sx={{ marginTop: '10px' }}>
          {testDetails}
        </Typography>
      )}

      <Box sx={{ marginLeft: 'auto', marginTop: '10px' }}>
        <Button sx={{ variant: 'contained', color: '#FFFFFF', background: '#101754' }} onClick={handleConfirm}>
          SELECT
        </Button>
          <Snackbar  
            open={snackbarOpen} 
            autoHideDuration={4000} 
            onClose={handleCloseSnackbar} 
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MuiAlert
        onClose={handleCloseSnackbar}
        severity="warning"
        sx={{
            width: '100%',backgroundColor: '#000000',color: 'white','& .MuiAlert-icon': {color: 'white',}
            }}
            >
              {snackbarMessage}
            </MuiAlert>
          </Snackbar>

      </Box>

      {/* Displaying selected tests in a table */}
      {selectedTestsForTable.length > 0 && <SelectTable tests={selectedTestsForTable} />}

      <Box sx={{ marginLeft: 'auto', marginTop: '10px' }}>
        {selectedTestsForTable.length > 0 && (
          <Button sx={{ variant: 'contained', color: '#FFFFFF', background: '#101754' }} onClick={''}>
            CONFIRM
          </Button>
        )}
      </Box>


      </Box>
  );
}

export default BasicSelect;
