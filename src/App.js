import './App.css';
import React from 'react';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>

    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
