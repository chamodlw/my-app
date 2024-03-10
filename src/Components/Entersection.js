import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function EnterSection({ handleChange, formData, maxId }) {
  const { name, description } = formData;

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
        margin: 'auto',
        borderRadius: '10px',
        padding: '20px',
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="id"
        name="id"
        label="ID"
        variant="outlined"
        value={maxId + 1}
        InputProps={{
          readOnly: true,
        }}
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
