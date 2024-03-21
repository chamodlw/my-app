import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Selecttest from './Selecttest';
import AddTest from './Admin/AddTest';
import AdminInterface from './Admin/AdminInterface';
import Dhome from './Dhome';
import Dapproval from './Dapproval';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='AdminInterface' element={<AdminInterface/>}/>
      <Route path='Selecttest' element={<Selecttest/>}/>
      <Route path='AddTest' element={<AddTest/>}/>
      <Route path='Dhome' element={<Dhome/>}/>
      <Route path='Dapproval' element={<Dapproval/>}/>
      <Route path='Contact' element={<Contact/>}/>
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
//