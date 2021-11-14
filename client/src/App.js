import React,{useState} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import {Routes, Route} from 'react-router-dom';
import Profile from './features/auth/Profile';
import Register from './features/auth/Register';
import Login from './features/auth/Login';

import './App.css';
import Auth from './features/auth/Auth';

function App() {

  const [button, buttonClicked] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/" element={<Auth button={button} />} >
              <Route path="/login" element={<Login buttonClicked={buttonClicked} />} />
             <Route path="/register" element={<Register buttonClicked={buttonClicked} />} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
