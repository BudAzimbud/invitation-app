import React from 'react';
import './App.css';
import {  Route, BrowserRouter, Routes } from 'react-router-dom'
import LoginPage from './Components/Pages/Login/LoginPage';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
