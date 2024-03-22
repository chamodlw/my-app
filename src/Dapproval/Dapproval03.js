import React, { useState}from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Dapproval04 from './Dapproval04';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function FixedContainer() {
  const [msg,setMsg]=useState('')
  const submit =async(e)=>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:3000/Dapproval",{
        msg
      })
    
    }
    catch(e){
      console.log(e);
    }
  }
  return (
    <React.Fragment>
      <CssBaseline />
     
        <Box sx={{  width: '80%', margin: 'auto', backgroundColor: '#D9D9D9', padding: '20px' ,borderRadius: '8px',height:'50vh'}} >
            <h1>Recommendations</h1>
            <hr></hr>
            <br></br>
           <div classname='cont'>
            <form acction="POST">
            <textarea name="text" onChange={(e)=>{setMsg(e.target.value)}}  placeholder="Need to..." cols="150" rows="10"></textarea><br></br>
            <input type="submit" onClick={submit} value="Submit" sx={{color:'#FFFFFF', background:'#101754',height:'50px'}}/>
            </form>

           </div>
          <br/>   
              
            </Box>
     
    </React.Fragment>
  );
}
