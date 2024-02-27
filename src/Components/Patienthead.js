import React,{ useState }  from 'react'
import {AppBar, Tab , Tabs, Typography} from '@mui/material/'
import LocalHospitalTwoToneIcon from '@mui/icons-material/LocalHospitalTwoTone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';



export default function Head() {
  const [value, setValue] = useState(0);

  // Create a function to handle the tab change event
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppBar sx={{ background: "#D9D9D9"}}>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', fontFamily: 'Helvetica', fontSize: '40px' , color: '#101754' }}>
        <LocalHospitalTwoToneIcon fontSize="large" style={{ marginRight: '10px' ,marginLeft:'10px', color: '#101754' }} />

        HealthLab
        <Tabs value={value} onChange={handleChange} sx={{marginLeft:'100px'}}>
          <Tab label ="Home"/>
          <Tab label ="Services"/>
          <Tab label ="About us"/>
          <Tab label="Contact Us"component={Link} to="../Contact"/> 
        </Tabs>
        <AccountCircleIcon sx={{marginLeft: 'auto', marginRight:'15px' }}></AccountCircleIcon>
      </Typography>
        
    </AppBar>
  )
}
