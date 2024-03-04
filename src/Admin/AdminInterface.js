//AdminInterface.js
import Patienthead from '../Components/Patienthead';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import '../maincss/AdminInterface.css';

function AdminInterface() {
  const Navigate=useNavigate()
    return (
      <div className="AdminInterface">
        <Patienthead/><br/><br/><br/><br/><br/>
        <Grid
  sx={{
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    gap: '5%',
    width: '100%', // Added to align buttons to the middle of the page
    height: '70vh', // Added to align buttons to the middle of the page
  }}
>
<button 

  className="AdminButton1"
  onClick={() => Navigate('../AddTest')}
  sx={{}}
>
  Add New Test
</button>
  <button
    className="AdminButton2"
    onClick={() => Navigate('')}
    sx={{}}
  >
    View Test List
  </button>
</Grid>

        <Footer/>
      </div>
      
    );
  }
  
  export default AdminInterface;