import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';


export default function BasicSelect() {
  const [test, setTest] = React.useState('');

  const handleChange = (event) => {
    setTest(event.target.value);
  };

  return (
    <Box sx={{ width: '80%', margin: '0 auto', backgroundColor: '#D9D9D9', padding: '20px' ,borderRadius: '8px'}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{color:'#101754'}}>Blood Test Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={test}
          label="Blood Test Type"
          onChange={handleChange}
          sx={{ backgroundColor: '#FFFFFF' }}

        >
          <MenuItem value={'Sugar test : more details.........'}>001-Sugar test</MenuItem>
          <MenuItem value={'Glucourse test : more details.........'}>002-Glucourse test</MenuItem>
          <MenuItem value={'Calcium test : more details.........'}>003-Calcium test</MenuItem>
        </Select>
      </FormControl>
      
      {test && (
        <Typography variant="subtitle1" sx={{ marginTop: '10px' }}>
          
           {`${test}`}
           
        </Typography>
      )}
      
      
    </Box>
  );
}