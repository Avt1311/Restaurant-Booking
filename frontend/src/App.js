import {BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
   <div>
  
    <BrowserRouter>

    <Navbar />

    <Routes>
     <Route element={<Home/> } path ='/' /> 
     <Route element={<Home/> } path ='home' /> 
     <Route element={<Signup/> } path ='signup' /> 
     <Route element={<Login/> } path ='login' /> 

    </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;