// import logo from './logo.svg';
// import { getUsers, createUser, updateUser, deleteUser } from './api';
// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './service/getUser.js';
// import { createUser } from './service/create.js';
import './App.css';
import './Global.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Add from './components/Add';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;