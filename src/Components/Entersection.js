//EnterSection.js
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function EnterSection({ handleChange, formData }) {
  const { id, name, description } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  return (
    <Box
      component="form"
      sx={{
        backgroundColor: '#D9D9D9',
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > :not(style)': { m: 1, width: '70%' },
        margin: 'auto', // Aligning center horizontally
        borderRadius: '10px', // Adding rounded corners
        padding: '20px', // Adding some padding for better aesthetics
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="id"
        name="id"
        label="id"
        variant="outlined"
        value={id}
        onChange={handleInputChange}
      />
      <TextField
        id="name"
        name="name"
        label="name"
        variant="outlined"
        value={name}
        onChange={handleInputChange}
      />
      <TextField
        id="description"
        name="description"
        label="description"
        variant="outlined"
        value={description}
        onChange={handleInputChange}
      />
    </Box>
  );
}