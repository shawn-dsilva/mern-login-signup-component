import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';


export class HomePage extends Component {
  render() {
    return (
       <div className="container">
        <div className="main">
          <h1> MERN Sessions Auth App </h1>
          <br/>
            <h5>Minimalistic Sessions based Authentication app <span role="img" aria-label="lock">🔒 </span><br></br>Built using Reactjs, Nodejs, Express, MongoDB and Bootstrap</h5>
          <br/>
          <div>
            <Login/>
            <Register/>
          </div>
        </div>
    </div>
    )
  }
}

export default HomePage
