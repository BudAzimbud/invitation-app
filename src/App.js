import React from 'react';
import './App.css';
import {  Route, BrowserRouter, Routes } from 'react-router-dom'
import LoginPage from './Components/Pages/Login/LoginPage';
import RegisterPage from './Components/Pages/Register/RegisterPage';
import MainContainer from './Containers/Main/MainContainer';
import PartyPage from './Components/Pages/Party/PartyPage';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/' element={<MainContainer element={< PartyPage />}/>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
