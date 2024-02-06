import './App.css';
import { BrowserRouter, Routes,Route, Switch } from 'react-router-dom';
import Head from './Components/Head';
import Selecttest from './Selecttest';
import Dapproval from './Dapproval';
import Dhome from './Dhome';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Head' element={<Head/>}/>
      <Route path='/Selecttest' element={<Selecttest/>}/>
      <Route path='/Dapproval' element={<Dapproval/>}/>
      <Route path='/Dhome' element={<Dhome/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
