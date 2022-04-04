import React from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import LoginPage from './Components/Pages/Login/LoginPage';
import RegisterPage from './Components/Pages/Register/RegisterPage';
import MainContainer from './Containers/Main/MainContainer';
import PartyPage from './Components/Pages/Party/PartyPage';
import PartyCreateNew from './Components/Pages/Party/New/PartyCreateNew';
import Table from './Core/List/Table';





function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/tabletest' element={<Table />} />
          <Route path='/' element={<MainContainer element={< PartyPage />} />} />
          <Route path='/undangan' element={<MainContainer />} />
          <Route path='/sampah' element={<MainContainer />} />
          <Route path='/party/new' element={<MainContainer element={< PartyCreateNew />} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
