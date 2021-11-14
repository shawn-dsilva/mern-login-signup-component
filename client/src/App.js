import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import {Routes, Route} from 'react-router-dom';
import Profile from './features/auth/Profile';
import './App.css';
import Auth from './features/auth/Auth';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/" element={<Auth/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
