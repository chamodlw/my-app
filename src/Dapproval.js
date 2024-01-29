import Patienthead from './Components/Patienthead';
import Dapproval01 from './Dapproval01';
import './maincss/Selecttest.css'
import BackToTop from './Components/Scroll';
import Footer from './Components/Footer';
import Date from './Components/Date';
function Dapproval() {
    return (
      <div className="Selecttest">
       
        <Patienthead/><br/><br/><br/><br/><br/>
        <Dapproval01/>
        <BackToTop />
        <Date/><br/>
        <Footer/>
      </div>
      
    );
  }
  export default Dapproval;