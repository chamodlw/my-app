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

export default function BasicSelect() {
  const [tests, setTests] = useState([]);
  const [selectedTest, setSelectedTest] = useState(null); // Changed to null initially
  const [selectedTestDescription, setSelectedTestDescription] = useState('');
  const [testDetails, setTestDetails] = useState('');

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
    setSelectedTest(selectedTestId);

    const selectedTest = tests.find((test) => test.id === selectedTestId);
    if (selectedTest) {
      setSelectedTestDescription(selectedTest.description);
      // Fetch test details based on the selected test
      Axios.get(`http://localhost:3100/api/tests/${selectedTestId}`)
        .then((response) => {
          setTestDetails(response.data?.details || '');
        })
        .catch((error) => {
          console.error('Axios Error : ', error);
        });
    }
  };

  const handleConfirm = () => {
    // You can add selected test to a table here if needed
    setSelectedTest(null); // Reset selected test
    setSelectedTestDescription('');
    setTestDetails('');
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
              {test.name}
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
          CONFIRM
        </Button>
      </Box>

      {/* Displaying tests in a table */}
      {selectedTest && <SelectTable tests={[tests.find(test => test.id === selectedTest)]} />}
    </Box>
  );
}
