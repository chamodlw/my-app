import './App.css';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Head from './Components/Head';
import HomePage from './Components/HomePage';

import Signin from "./Components/Signin"
import Login from "./Components/Login"

function App() {
  return (
    <div>
    {/* <Signin></Signin> */}
    <BrowserRouter>
    <Routes>
      <Route path='/Head' element={<Head/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/HomePage' element={<HomePage/>}/>
    </Routes>
  </BrowserRouter>
    </div>



    );


}

export default App;
