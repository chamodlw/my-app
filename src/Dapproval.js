import Patienthead from './Components/Patienthead';
import Dapproval01 from './Dapproval01';
import Dapproval03 from './Dapproval03';
import './maincss/Selecttest.css'

import Footer from './Components/Footer';

function Dapproval() {
    return (
      <div className="Selecttest">
       
        <Patienthead/><br/><br/><br/><br/><br/>
        <Dapproval01/>
        <br/>
        <Dapproval03/>
        <br/>
          <Footer/>
      </div>
      
    );
  }
  export default Dapproval;