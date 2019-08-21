import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import { connect } from "react-redux";

var divStyle = {
color:'white'
};

export class HomePage extends Component {
  render() {
    return (
       <div className="container">
        <div className="main">
          <h1 style={divStyle}> MERN Sessions Auth App </h1>
          <br/>
            <h5 style={divStyle}>Minimalistic Sessions based Authentication app <span role="img" aria-label="lock">🔒 </span><br></br>Built using Reactjs, Nodejs, Express, MongoDB and Bootstrap</h5>
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
const mapStateToProps = (state) => ({ //Maps state to redux store as props
  button: state.button
});

export default connect(mapStateToProps)(HomePage);
