import './App.css';
import { BrowserRouter, Routes,Route, Switch } from 'react-router-dom';
import Head from './Components/Head';
import Selecttest from './Selecttest';
import Signin from './Signin';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Head' element={<Head/>}/>
      <Route path='/Selecttest' element={<Selecttest/>}/>
      <Route path='/Signin' element={<Signin/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
