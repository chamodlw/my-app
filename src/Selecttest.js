import Patienthead from './Components/Patienthead';
import BasicSelect from './Components/BasicSelect';
import './maincss/Selecttest.css';
import BackToTop from './Components/Scroll';
import Footer from './Components/Footer';
import Date from './Components/Date';

function Selecttest() {
  return (
    <div className="Selecttest">
     
      <Patienthead/><br/><br/><br/><br/><br/>
      <BasicSelect/>
      <BackToTop />
      <Date/><br/>
      <Footer/>
    </div>
    
  );
}

export default Selecttest;
