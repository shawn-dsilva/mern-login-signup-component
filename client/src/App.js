import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Auth from './features/auth/Auth';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Auth/>
      </header>
    </div>
  );
}

export default App;
